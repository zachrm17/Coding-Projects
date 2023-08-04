using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SteelTank_TestingEnvironment.Data;
using SteelTank_TestingEnvironment.Data.Models;
using SteelTank_TestingEnvironment.Models;
using SteelTank_TestingEnvironment.Models.ViewModels;
using SteelTank_TestingEnvironment.Services;

namespace SteelTank_TestingEnvironment.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly AccountService accountService;

        /// <summary>
        /// Dependency injection for services used within the controller methods
        /// </summary>
        /// <param name="accountService"></param>
        public HomeController(AccountService accountService)
        {
            this.accountService = accountService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>[GET] Return Index razor view</returns>
        public async Task<IActionResult> Index()
        {
            // Get previous and razor view
            ViewData["CurrentExams"] = await accountService.GetCurrentRegistrations(User);
            ViewData["PreviousExams"] = await accountService.GetPreviousRegistrations(User);

            return View();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>[GET] Return Profile razor view</returns>
        [HttpGet]
        public async Task<IActionResult> Profile()
        {
            // Get account view model if it exists
            AccountViewModel user = await accountService.GetAccountInformation(User);

            if (user == null)
                return RedirectToAction("Index", "Home"); // if user does not exist go to index page.

            return View(user);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns>[POST] Return Profile razor view and index razor view on failure</returns>
        [HttpPost]
        public async Task<IActionResult> Profile(AccountViewModel model)
        {
            // if modelstate is valid for account view model
            if (ModelState.IsValid)
            {
                // set account information if valid
                AccountViewModel user = await accountService.SetAccountInformation(User, model);

                if (user == null)
                    return RedirectToAction("Index", "Home"); // on failure go to index razor view
                else
                    return RedirectToAction("Profile", "Home");
            }
            else
                return View(model);
        }
    }
}
