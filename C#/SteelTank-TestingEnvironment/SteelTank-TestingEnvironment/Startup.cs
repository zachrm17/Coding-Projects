using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SteelTank_TestingEnvironment.Data;

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SteelTank_TestingEnvironment.Data.Models;
using Microsoft.Extensions.Logging;
using SteelTank_TestingEnvironment.Services;

namespace SteelTank_TestingEnvironment
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private async Task createRolesandUsers(IServiceProvider serviceProvider)
        {
            // Get Required Services
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var logger = serviceProvider.GetRequiredService<ILogger<Startup>>();

            try
            {
                // Add Role
                string role = "Admin";

                var resultRole = await roleManager.RoleExistsAsync(role);

                if (!resultRole)
                {
                    var r = await roleManager.CreateAsync(new IdentityRole(role));
                    if(!r.Succeeded)
                    {
                        logger.LogError($"Unable To Seed Role \"{role}\"");
                        return;
                    }
                }

                // Add User
                ApplicationUser user = new ApplicationUser
                {
                    UserName = "admin@steeltank.com",
                    Email = "admin@steeltank.com",
                    FirstName = "admin",
                    LastName = "admin"
                };

                var resultUser = await userManager.FindByNameAsync(user.UserName);

                if(resultUser == null)
                {
                    var createUser = await userManager.CreateAsync(user, "password123!");
                    if(!createUser.Succeeded)
                    {
                        logger.LogError($"Unable To Seed User \"{user.UserName}\"");
                        return;
                    }
                }

                // Add Role To User
                var resultAddRole = await userManager.IsInRoleAsync(user, role);
                if (!resultAddRole)
                {
                    var r = await userManager.AddToRoleAsync(user, role);
                    if (!r.Succeeded)
                    {
                        logger.LogError($"Unable To Add Role \"{role}\" To User \"{user.UserName}\"");
                        return;
                    }
                }
            }
            catch(Exception ex)
            {
                logger.LogError(ex.Message);
            }
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            services.AddDbContext<AppDbContext>( config =>
            {
                config.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Database=SteelTankApplicationDb; Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            });

            services.AddIdentity<ApplicationUser, IdentityRole>( config =>
            {
                config.Password.RequireDigit = false;
                config.Password.RequiredLength = 1;
                config.Password.RequireNonAlphanumeric = false;
                config.Password.RequireUppercase = false;
                config.User.RequireUniqueEmail = true;
            })
                .AddEntityFrameworkStores<AppDbContext>()
                .AddDefaultTokenProviders();


            services.ConfigureApplicationCookie(config =>
            {
                config.Cookie.Name = "SteelTankApp.Cookie";
                config.LoginPath = "/Auth/Login";
            });

            services.AddScoped<AccountService>();
            services.AddScoped<AdminService>();
            services.AddScoped<ExamService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseCookiePolicy();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            // Seed Roles and Administrator
            createRolesandUsers(serviceProvider).Wait();
        }
    }
}
