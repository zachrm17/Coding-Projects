using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SteelTank_TestingEnvironment.Data;
using SteelTank_TestingEnvironment.Data.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Services
{
    public class ExamService
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
        public ExamService(
            ILogger<ExamService> logger,
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
        /// Gets regustration info given a user id. 
        /// </summary>
        /// <param name="user"></param>
        /// <param name="registrationId"></param>
        /// <returns>Returns Regstration on success or null on failure</returns>
        public async Task<Registration> GetRegistrationInfo(ClaimsPrincipal user, int registrationId)
        {
            try
            {
                Registration registration = await context.Registrations.Include(p => p.Exam).ThenInclude(p => p.QuestionGroups).ThenInclude(p => p.Questions).Include(p => p.UserAnswers).SingleOrDefaultAsync(p => p.Id == registrationId);
                if (registration == null)
                    return null;

                ApplicationUser appUser = await userManager.GetUserAsync(user);
                if (appUser == null)
                    return null;

                if (registration.ApplicationUserId != appUser.Id)
                    return null;
                else
                    return registration;
            }
            catch (Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return null;
        }

        /// <summary>
        /// Gets exam data.
        /// </summary>
        /// <param name="user"></param>
        /// <param name="registrationId"></param>
        /// <returns>Gets a grouped list of user answers on success or null on false</returns>
        public async Task<List<List<UserAnswer>>> GetExamData(ClaimsPrincipal user, int registrationId)
        {
            try
            {
                // Check If Regisration Is Valid.
                Registration registrationInfo = await GetRegistrationInfo(user, registrationId);
                if (registrationInfo == null) // true is isValid()??!
                    return null;

                // Initialize Registration and Exam Answers If Not Already.
                if (registrationInfo.StartDate == null)
                {
                    Random tmpRand = new Random();

                    registrationInfo.StartDate = DateTime.Now;
                    registrationInfo.Seed = tmpRand.Next();

                    foreach(var questionGroup in registrationInfo.Exam.QuestionGroups)
                    {
                        foreach (var question in questionGroup.Questions)
                        {
                            UserAnswer answer = new UserAnswer();

                            answer.RegistrationId = registrationInfo.Id;
                            answer.QuestionId = question.Id;

                            if(question.IsTextEntry)
                                answer.IsTextEntry = true;

                            await context.UserAnswers.AddAsync(answer);
                        }
                    }

                    await context.SaveChangesAsync();
                }

                // Get List of User Answers.
                Random rand = new Random(registrationInfo.Seed);
                var userAnswers = await context.UserAnswers
                    .Include(p => p.Question).ThenInclude(p => p.QuestionGroup)
                    .Include(p => p.Question).ThenInclude(p => p.Answers)
                    .Where(p => p.RegistrationId == registrationInfo.Id).ToListAsync();
               


                var groupedUserAnswers = userAnswers.GroupBy(p => p.Question.QuestionGroupId).Select(grp => grp.ToList()).ToList();

                // Shuffle List of User Answers.
                groupedUserAnswers = groupedUserAnswers.OrderBy(p => rand.Next()).ToList();

                



                return groupedUserAnswers;
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return null;
        }

        /// <summary>
        /// Saves user answers to the sql database.
        /// </summary>
        /// <param name="user"></param>
        /// <param name="answers"></param>
        /// <returns></returns>
        public async Task SaveExam(ClaimsPrincipal user, List<List<UserAnswer>> answers)
        {
            try
            {
                ApplicationUser appUser = await userManager.GetUserAsync(user);
                if (appUser == null)
                    return;

                foreach (var questionGroup in answers)
                {
                    foreach (var question in questionGroup)
                    {
                        UserAnswer answer = await context.UserAnswers.SingleOrDefaultAsync(p => p.Id == question.Id && p.Registration.ApplicationUserId == appUser.Id);

                        if(answer != null)
                        {
                            if (answer.IsTextEntry)
                                answer.AnswerText = question.AnswerText;
                            else
                                answer.AnswerId = question.AnswerId;
                        }
                    }
                }

                await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }
        }

        /// <summary>
        /// Submit the exam for grading
        /// </summary>
        /// <param name="user"></param>
        /// <param name="registrationId"></param>
        /// <param name="answers"></param>
        /// <returns></returns>
        public async Task SubmitExam(ClaimsPrincipal user, int registrationId, List<List<UserAnswer>> answers)
        {
            try
            {
                // check if appropriate user
                // check if exam has not expired.

                Registration registration = await context.Registrations.SingleOrDefaultAsync(p => p.Id == registrationId);

                // i registration does not exist or already graded
                if (registration == null || registration.Score != null)
                    return;

                await SaveExam(user, answers);

                // calculate score
                int maxScore = await context.UserAnswers.Where(p => p.RegistrationId == registrationId).SumAsync(p => p.Question.Points);
                int userScore = await context.UserAnswers.Where(p => p.RegistrationId == registrationId && ((p.IsTextEntry) ? p.Question.AnswerText.ToLower() == p.AnswerText.ToLower() : p.Question.AnswerId == p.AnswerId)).SumAsync(p => p.Question.Points);
                if (maxScore == 0)
                {
                    registration.Score = 100;
                }
                else
                {
                    registration.Score = Convert.ToInt32(Convert.ToDouble(userScore) / Convert.ToDouble(maxScore) * 100);
                }

                await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }
        }
    }
}