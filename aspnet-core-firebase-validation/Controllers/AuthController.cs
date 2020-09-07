namespace aspnet_core_firebase_validation.Controllers
{
    using aspnet_core_firebase_validation.Models;
    using aspnet_core_firebase_validation.Repositories;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Newtonsoft.Json;
    using System.Linq;
    using System.Security.Claims;

    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [Authorize]
        [HttpPost("authfirebasetoken")]
        public IActionResult AuthFirebaseToken()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            dynamic userId = _authRepository.TokenValidate(claimsIdentity);

            return new OkObjectResult(userId);
        }

        [Authorize]
        [HttpGet("firebaseemail2register")]
        public IActionResult FirebaseEmail2Register()
        {
            var user = HttpContext.User;
            var claims = ((ClaimsIdentity)user.Identity).Claims;
            var items = claims.ToList();
            var jsonstr = items.Last().Value;

            FirebaseIdentity fb = (FirebaseIdentity)JsonConvert.DeserializeObject(jsonstr, typeof(FirebaseIdentity));

            string email = fb.Identities.Email[0];

            return new OkObjectResult(email);
        }
    }
}
