using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SteelTank_TestingEnvironment.Data;
using SteelTank_TestingEnvironment.Data.Models;
using SteelTank_TestingEnvironment.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Services
{
    public class AccountService
    {
        private readonly ILogger logger;
        private readonly AppDbContext context;

        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;

        /// <summary>
        /// Dependency inject required services used by this service.
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="context"></param>
        /// <param name="signInManager"></param>
        /// <param name="userManager"></param>
        /// <param name="roleManager"></param>
        public AccountService(
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

        /// <summary>
        /// Sign in of an account
        /// </summary>
        /// <param name="loginModel"></param>
        /// <returns>Returns true on successs and false on failure</returns>
        public async Task<bool> SignInAccount(LoginViewModel loginModel)
        {
            try
            {
                SignInResult attemptSignIn = await signInManager.PasswordSignInAsync(loginModel.Email, loginModel.Password, false, false);
                return attemptSignIn.Succeeded;
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return false;
        }

        /// <summary>
        /// sign out of an account
        /// </summary>
        /// <returns></returns>
        public async Task SignOutAccount()
        {
            try
            {
                await signInManager.SignOutAsync();
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }
        }

        /// <summary>
        /// Gets list of current registrations for a user id.
        /// </summary>
        /// <param name="user"></param>
        /// <returns>A list of registration models for a user id on success and null on failure</returns>
        public async Task<List<Registration>> GetCurrentRegistrations(ClaimsPrincipal user)
        {
            try
            {
                // get user
                ApplicationUser appUser = await userManager.GetUserAsync(user);

                // Get registrations for that user
                var currentRegistrations = context.Registrations.Where(p =>
                p.ApplicationUserId == appUser.Id).Include(p => p.Exam).AsEnumerable().Where(p => p.IsValid()).ToList();

                return currentRegistrations;
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return null;
        }

        /// <summary>
        /// Get list of previous registrations for a user id
        /// </summary>
        /// <param name="user"></param>
        /// <returns>A list of registration models for a user id on success and null on failre</returns>
        public async Task<List<Registration>> GetPreviousRegistrations(ClaimsPrincipal user)
        {
            try
            {
                // get user
                ApplicationUser appUser = await userManager.GetUserAsync(user);

                // Get registrations for that user
                var previousRegistrations = context.Registrations.Where(p =>
                p.ApplicationUserId == appUser.Id).Include(p => p.Exam).OrderByDescending(p => p.ExpireDate).AsEnumerable().Where(p => !p.IsValid()).ToList();

                return previousRegistrations;
            }
            catch (Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return null;
        }

        /// <summary>
        /// Get account information view model given a user id
        /// </summary>
        /// <param name="user"></param>
        /// <returns>Returns a Account view model on success or null on failure</returns>
        public async Task<AccountViewModel> GetAccountInformation(ClaimsPrincipal user)
        {
            try
            {
                // Get application user data and images.
                ApplicationUser appUser = await userManager.GetUserAsync(user);
                appUser.UserFile1 = await context.UserFiles.Select(p => new UserFile { Id = p.Id, Name = p.Name }).SingleOrDefaultAsync(p => p.Id == appUser.UserFile1Id);
                appUser.UserFile2 = await context.UserFiles.Select(p => new UserFile { Id = p.Id, Name = p.Name }).SingleOrDefaultAsync(p => p.Id == appUser.UserFile2Id);
                appUser.UserFile3= await context.UserFiles.Select(p => new UserFile { Id = p.Id, Name = p.Name }).SingleOrDefaultAsync(p => p.Id == appUser.UserFile3Id);

                // store data in view model
                AccountViewModel vm = new AccountViewModel()
                {
                    Id = appUser.Id,
                    FirstName = appUser.FirstName,
                    LastName = appUser.LastName,
                    EmailAddress = appUser.Email,
                    UserFile1 = appUser.UserFile1,
                    UserFile2 = appUser.UserFile2,
                    UserFile3 = appUser.UserFile3
                };

                return vm;
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return null;
        }

        /// <summary>
        /// Sets account information given user id and account view model.
        /// </summary>
        /// <param name="user"></param>
        /// <param name="model"></param>
        /// <returns>Returns account view mode on success and null on falure</returns>
        public async Task<AccountViewModel> SetAccountInformation(ClaimsPrincipal user, AccountViewModel model)
        {
            try
            {
                // Get application user
                ApplicationUser appUser = await userManager.GetUserAsync(user);

                // overwrite information in application user from view model
                appUser = context.Users.Include("UserFile1").Include("UserFile2").Include("UserFile3").SingleOrDefault(p => p.Id == appUser.Id);
                appUser.FirstName = model.FirstName;
                appUser.LastName = model.LastName;
                appUser.Email = model.EmailAddress;

                // password change
                if(model.Password != null && model.Password == model.PasswordConfirm)
                {
                    var token = await userManager.GeneratePasswordResetTokenAsync(appUser);
                    await userManager.ResetPasswordAsync(appUser, token, model.Password);
                }

                // file upload
                using (var dataStream = new MemoryStream())
                {

                    dataStream.Flush();
                    dataStream.Position = 0;
                    dataStream.SetLength(0);
                    if (model.FileInput1 != null)
                    {
                        await model.FileInput1.CopyToAsync(dataStream);
                        if (appUser.UserFile1Id != null)
                        {
                            appUser.UserFile1.Name = Path.GetFileNameWithoutExtension(model.FileInput1.FileName);
                            appUser.UserFile1.Extension = Path.GetExtension(model.FileInput1.FileName);
                            appUser.UserFile1.CreatedOn = DateTime.Now;
                            appUser.UserFile1.FileType = model.FileInput1.ContentType;
                            appUser.UserFile1.Data = dataStream.ToArray();
                         
                        }
                        else
                        {
                            appUser.UserFile1 = new UserFile
                            {
                                Name = Path.GetFileNameWithoutExtension(model.FileInput1.FileName),
                                Extension = Path.GetExtension(model.FileInput1.FileName),
                                CreatedOn = DateTime.Now,
                                FileType = model.FileInput1.ContentType,
                                Data = dataStream.ToArray()
                            };
                        }
                    }


                    dataStream.Flush();
                    dataStream.Position = 0;
                    dataStream.SetLength(0);
                    if (model.FileInput2 != null)
                    {
                        await model.FileInput2.CopyToAsync(dataStream);
                        if (appUser.UserFile2Id != null)
                        {
                            appUser.UserFile2.Name = Path.GetFileNameWithoutExtension(model.FileInput2.FileName);
                            appUser.UserFile2.Extension = Path.GetExtension(model.FileInput2.FileName);
                            appUser.UserFile2.CreatedOn = DateTime.Now;
                            appUser.UserFile2.FileType = model.FileInput2.ContentType;
                            appUser.UserFile2.Data = dataStream.ToArray();
                            
                        }
                        else
                        {
                            appUser.UserFile2 = new UserFile
                            {
                                Name = Path.GetFileNameWithoutExtension(model.FileInput2.FileName),
                                Extension = Path.GetExtension(model.FileInput2.FileName),
                                CreatedOn = DateTime.Now,
                                FileType = model.FileInput2.ContentType,
                                Data = dataStream.ToArray()
                            };
                        }
                    }


                    dataStream.Flush();
                    dataStream.Position = 0;
                    dataStream.SetLength(0);
                    if (model.FileInput3 != null)
                    {
                        await model.FileInput3.CopyToAsync(dataStream);
                        if (appUser.UserFile3Id != null)
                        {
                            appUser.UserFile3.Name = Path.GetFileNameWithoutExtension(model.FileInput3.FileName);
                            appUser.UserFile3.Extension = Path.GetExtension(model.FileInput3.FileName);
                            appUser.UserFile3.CreatedOn = DateTime.Now;
                            appUser.UserFile3.FileType = model.FileInput3.ContentType;
                            appUser.UserFile3.Data = dataStream.ToArray();
                           
                        }
                        else
                        {
                            appUser.UserFile3 = new UserFile
                            {
                                Name = Path.GetFileNameWithoutExtension(model.FileInput3.FileName),
                                Extension = Path.GetExtension(model.FileInput3.FileName),
                                CreatedOn = DateTime.Now,
                                FileType = model.FileInput3.ContentType,
                                Data = dataStream.ToArray()
                            };
                        }
                    }
                }

                await userManager.UpdateAsync(appUser);

                return model;
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return null;
        }
    }
}
