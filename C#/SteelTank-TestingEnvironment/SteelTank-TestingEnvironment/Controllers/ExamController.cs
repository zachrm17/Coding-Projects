using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SteelTank_TestingEnvironment.Data;
using SteelTank_TestingEnvironment.Data.Models;
using SteelTank_TestingEnvironment.Models;
using SteelTank_TestingEnvironment.Services;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Controllers
{
    [Authorize]
    public class ExamController : Controller
    {
        private readonly ExamService examService;

        /// <summary>
        /// Dependency inject services to controller to use in methods.
        /// </summary>
        /// <param name="examService"></param>
        public ExamController(ExamService examService)
        {
            this.examService = examService;
        }

        /// <summary>
        /// Gets the exam info screen with information relating to the exam and user registration.
        /// </summary>
        /// <param name="registrationId"></param>
        /// <returns>[GET] Return ExamInfo razor view</returns>
        [HttpGet]
        public async Task<IActionResult> ExamInfo(int registrationId)
        {
            // Get registraion if it exists
            Registration registration = await examService.GetRegistrationInfo(User, registrationId);
            
            // If the registration is invalid go to index
            if (registration == null)
                RedirectToAction("Index", "Home");

            // Calculate the remaining time
            int totalRemainingMinutes;
            int minutes;
            int hours;
            int days;

            if(registration.StartDate != null)
            {
                totalRemainingMinutes = registration.Exam.Minutes - (int)DateTime.Now.Subtract(registration.StartDate.Value).TotalMinutes;
                minutes = totalRemainingMinutes % 60;
                hours = totalRemainingMinutes / 60;
                days = totalRemainingMinutes / (24 * 60);
            }
            else
            {
                totalRemainingMinutes = registration.Exam.Minutes;

                if (totalRemainingMinutes == 0)
                    minutes = 0;
                else
                    minutes = totalRemainingMinutes % 60;

                hours = totalRemainingMinutes / 60;
                days = totalRemainingMinutes / (24 * 60);
            }

            // Store time information
            ViewData["minutes"] = minutes;
            ViewData["hours"] = hours;
            ViewData["days"] = days;

            return View(registration);
        }

        /// <summary>
        /// Get exam screen with questiongroups, question parts, and user answers.
        /// </summary>
        /// <param name="registrationId"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> Exam(int registrationId)
        {
            // Gets the exam for a specific user/registration combination
            var examData = await examService.GetExamData(User, registrationId);

            // If exam does not exists for combination, go to index
            if (examData == null)
                return RedirectToAction("Index", "Home");

            // Store related data
            ViewData["registrationId"] = registrationId;
            Registration registration = await examService.GetRegistrationInfo(User, registrationId);
            ViewData["remainingTime"] = registration.Exam.Minutes - (int)DateTime.Now.Subtract(registration.StartDate.Value).TotalMinutes; ;

            return View(examData);
        }

        /// <summary>
        /// Post the exam data to the server. Save user answers and/or submit user answeres.
        /// </summary>
        /// <param name="button"></param>
        /// <param name="registrationId"></param>
        /// <param name="model"></param>
        /// <returns>[POST] Returns redirect to Index razor view</returns>
        [HttpPost]
        public async Task<IActionResult> Exam(string button, int registrationId, List<List<UserAnswer>> model)
        {
            if(button == "save")
                await examService.SaveExam(User, model);

            if (button == "submit")
                await examService.SubmitExam(User, registrationId, model);

            return RedirectToAction("Index", "Home");
        }
    }    
}
