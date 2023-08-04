using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SteelTank_TestingEnvironment.Data;
using SteelTank_TestingEnvironment.Data.Models;
using SteelTank_TestingEnvironment.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Services
{
    // UNUSGED, NOT ENOUGH TIME TO IMPLEMENT FULLY
    public class AdminService
    {
        private readonly ILogger logger;
        private readonly AppDbContext context;

        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;

        public AdminService(
            ILogger<AccountService> logger,
            AppDbContext context,
            SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            this.logger = logger;
            this.context = context;
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        public async Task<AccountViewModel> GetAccountInformation(string userId)
        {
            try
            {
                AccountViewModel model = new AccountViewModel();

                if (userId != null)
                {
                    ApplicationUser user = await context.Users.SingleOrDefaultAsync(p => p.Id == userId);
                    if(user != null)
                    {
                        model.Id = user.Id;
                        model.FirstName = user.FirstName;
                        model.LastName = user.LastName;
                        model.EmailAddress = user.Email;
                        model.PhoneNumber = user.PhoneNumber;
                        model.Address1 = user.Address1;
                        model.Address2 = user.Address2;
                        model.City = user.City;
                        model.State = user.State;
                        model.Zip = user.Zip;
                        model.FaxNumber = user.FaxNumber;
                        model.Company = user.Company;
                        model.CertificationNumber = user.CertificationNumber;

                        model.AccountRole = await userManager.IsInRoleAsync(user, "Admin");
                    }
                }

                return model;
            }
            catch (Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return null;
        }

        public async Task<AccountViewModel> SetAccountInformation(AccountViewModel model)
        {
            try
            {
                ApplicationUser user = await userManager.FindByIdAsync(model.Id);

                if (user == null)
                {
                    if (model.Password == null)
                        return null;

                    user = new ApplicationUser
                    {
                        UserName = model.EmailAddress,
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        Email = model.EmailAddress,
                        PhoneNumber = model.PhoneNumber,
                        Address1 = model.Address1,
                        Address2 = model.Address2,
                        City = model.City,
                        State = model.State,
                        Zip = model.Zip,
                        FaxNumber = model.FaxNumber,
                        Company = model.Company,
                        CertificationNumber = model.CertificationNumber
                    };

                    await userManager.CreateAsync(user, model.Password);
                }
            }
            catch(Exception ex)
            {

            }
            return null;
        }
    }
}
