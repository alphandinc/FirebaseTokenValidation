namespace aspnet_core_firebase_validation.Repositories
{
    using System.Linq;
    using System.Security.Claims;

    public class AuthRepository : IAuthRepository
    {
        public string TokenValidate(ClaimsIdentity claimsIdentity)
        {
            string userId = (claimsIdentity.Claims).ToList().FirstOrDefault(a => a.Type == "user_id").Value;

            return userId;
        }
    }
}