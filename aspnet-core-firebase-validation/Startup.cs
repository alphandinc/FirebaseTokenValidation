namespace aspnet_core_firebase_validation
{
    using aspnet_core_firebase_validation.Repositories;
    using FirebaseAdmin;
    using Google.Apis.Auth.OAuth2;
    using Microsoft.AspNetCore.Authentication.JwtBearer;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.IdentityModel.Tokens;

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string firebaseCredentialPath = Configuration["AppSettings:FirebaseCredentialPath"];

            FirebaseApp.Create(new AppOptions()
            {
                Credential = GoogleCredential.FromFile(firebaseCredentialPath)
            });

            services.AddControllers();

            services.AddTransient<IAuthRepository, AuthRepository>();

            #region Firebase Token

            string firebaseAuthorityUrl = Configuration["AppSettings:FirebaseAuthorityUrl"];
            string firebaseAppId = Configuration["AppSettings:FirebaseAppId"];

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.Authority = firebaseAuthorityUrl;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = firebaseAuthorityUrl,
                    ValidateAudience = true,
                    ValidAudience = firebaseAppId,
                    ValidateLifetime = true
                };
            });

            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}