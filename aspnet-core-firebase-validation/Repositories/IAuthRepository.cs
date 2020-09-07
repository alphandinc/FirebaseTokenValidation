namespace aspnet_core_firebase_validation.Repositories
{
    using System.Security.Claims;

    public interface IAuthRepository
    {
        string TokenValidate(ClaimsIdentity claimsIdentity);
    }
}
