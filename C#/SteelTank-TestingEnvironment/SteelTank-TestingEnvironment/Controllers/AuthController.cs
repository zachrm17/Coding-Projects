using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SteelTank_TestingEnvironment.Data.Models;
using SteelTank_TestingEnvironment.Models;
using SteelTank_TestingEnvironment.Models.ViewModels;
using SteelTank_TestingEnvironment.Services;

namespace SteelTank_TestingEnvironment.Controllers
{
    public class AuthController : Controller
    {
        private readonly AccountService accountService;

        /// <summary>
        /// Dependency injection for services.
        /// </summary>
        /// <param name="accountService"></param>
        public AuthController(AccountService accountService)
        {
            this.accountService = accountService;
        }

        /// <summary>
        /// </summary>
        /// <returns>[GET] Return Login razor view</returns>
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="loginModel"></param>
        /// <returns>[POST] Return login razor view on fail else redirect return to Index razor view</returns>
        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel loginModel)
        {
            // chech that model is valid.
            if(ModelState.IsValid)
            {
                bool attemptSignIn = await accountService.SignInAccount(loginModel);

                if (attemptSignIn)
                    return RedirectToAction("Index", "Home");
            }

            return View();
        }

        /// <summary>
        /// Logout user
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await accountService.SignOutAccount();
            return RedirectToAction("Login");
        }
    }
}
