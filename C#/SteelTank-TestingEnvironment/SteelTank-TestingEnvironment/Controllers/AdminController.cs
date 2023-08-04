using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SteelTank_TestingEnvironment.Data;
using SteelTank_TestingEnvironment.Data.Models;
using SteelTank_TestingEnvironment.Models;
using SteelTank_TestingEnvironment.Models.ViewModels;
using SteelTank_TestingEnvironment.Services;

namespace SteelTank_TestingEnvironment.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        // Class Variables
        private readonly ILogger logger;
        private readonly AppDbContext context;

        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly UserManager<ApplicationUser> userManager;

        /// <summary>
        /// Constructor for service dependency injection. We want to be able to use the following services in the
        /// class methods.
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="context"></param>
        /// <param name="signInManager"></param>
        /// <param name="userManager"></param>
        public AdminController(ILogger<AdminController> logger, AppDbContext context, SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            this.logger = logger;
            this.context = context;
            this.signInManager = signInManager;
            this.userManager = userManager;
        }

        /// <summary>
        /// </summary>
        /// <returns>[GET] Returns the Admin razor view.</returns>
        [HttpGet]
        public IActionResult Admin()
        {            
            return View();
        }

        //
        // EXAMS
        //

        /// <summary>
        /// Gets the EditExams page and passes it a list containing all the exams in the database.
        /// </summary>
        /// <returns>[GET] Returns the EditExams razor view.</returns>
        [HttpGet]
        public async Task<IActionResult> EditExams()
        {
            try
            {
                // Grab all exams in the database.
                var exams = await context.Exams.ToListAsync();
                ViewData["exams"] = exams;
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return View();
        }

        /// <summary>
        /// This get method is used to delete an exam out of the database. Accepts a single URL parameter, an exam id,
        /// which it uses to search up the exam to remove.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>[GET] Redirects and returns EditExams razor view.</returns>
        [HttpGet]
        public async Task<IActionResult> DeleteExam(int id)
        {
            try
            {
                // Get exam if it exists
                var exam = await context.Exams.Where(p => p.Id == id).SingleOrDefaultAsync();

                if (exam is Exam)
                {
                    // Remove all user answers. SQL cascade delete has a unfixed bug. Need to delete associated user answers first.
                    context.UserAnswers.RemoveRange(context.UserAnswers.Where(p => p.Registration.Exam.Id == id));
                    context.SaveChanges();

                    // Remove the exam
                    context.Remove(exam);
                    context.SaveChanges();
                }
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return RedirectToAction("EditExams", "Admin");
        }

        //
        // EXAM
        //

        /// <summary>
        /// Gets the EditExam razor view and queries exam data for the given exam Id. Exam data populates the form
        /// for this page.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>[GET] Returns the EditExam razor view.</returns>
        [HttpGet]
        public async Task<IActionResult> EditExam(int? id)
        {
            // Create a empty view model
            ExamViewModel vm = new ExamViewModel();

            try
            {
                if (id != null)
                {
                    // If an id was provided search for possible exam
                    Exam exam = await context.Exams.SingleOrDefaultAsync(p => p.Id == id);
                    if (exam is Exam)
                    {
                        // If exam exists than populate view model data
                        vm.Id = exam.Id;
                        vm.Name = exam.Name;
                        vm.Description = exam.Description;
                        vm.Time = exam.Minutes;

                        // Get all questiongroups as list within the exam
                        ViewData["QuestionGroups"] = await context.QuestionGroups.Where(p => p.Exam.Id == id).ToListAsync();
                    }
                }
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return View(vm);
        }

        /// <summary>
        /// Post the EditExam view model data to the sql database. If an exam does not exist a new exam is inserted with the appropriate data. If an already exists within the database
        /// overwrite that database entry.
        /// </summary>
        /// <param name="vm"></param>
        /// <returns>[POST] Return the EditExam razor view.</returns>
        [HttpPost]
        public async Task<IActionResult> EditExam(ExamViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    // Get exam with the id that was submitted.
                    Exam exam = await context.Exams.SingleOrDefaultAsync(p => p.Id == vm.Id);
                    if (exam is Exam)
                    {
                        // If an exam exists overwrite the data entry.
                        exam.Name = vm.Name;
                        exam.Description = vm.Description;
                        exam.Minutes = vm.Time;
                        await context.SaveChangesAsync();
                    }
                    else
                    {
                        // If an exam does not exist, create a new data entry.
                        Exam newExam = new Exam();
                        newExam.Name = vm.Name;
                        newExam.Description = vm.Description;
                        newExam.Minutes = vm.Time;

                        await context.Exams.AddAsync(newExam);
                        await context.SaveChangesAsync();

                        vm.Id = newExam.Id;
                    }

                    // Get all questiongroups as list within the exam
                    ViewData["QuestionGroups"] = await context.QuestionGroups.Where(p => p.Exam.Id == vm.Id).ToListAsync();
                }
            }
            catch (Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return View(vm);
        }

        //
        // QUESTION GROUP
        //

        /// <summary>
        /// Gets the EditQuestion razor view and queries questionGroup for the given questioGroup Id. QuestionGroup data populates the form
        /// for this page.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="examId"></param>
        /// <returns>[GET] Returns the EditQuestion razor view.</returns>
        [HttpGet]
        public async Task<IActionResult> EditQuestion(int ? id, int examId)
        {
            // Create a empty question view model.
            QuestionViewModel question = new QuestionViewModel();

            try
            {
                question.ExamId = examId;

                if (id != null)
                {
                    // If questiongroup was passed an id try to query the question group
                    QuestionGroup questionGroup = await context.QuestionGroups.SingleOrDefaultAsync(p => p.Id == id);
                    if(questionGroup is QuestionGroup)
                    {
                        // Overwrite questiongroup view model with question group data entry
                        question.QuestionGroup.GroupId = questionGroup.Id;
                        question.QuestionGroup.Text = questionGroup.Text;

                        // Query the related question parts and question images
                        ViewData["QuestionParts"] = await context.Questions.Include(p => p.Answers).Where(p => p.QuestionGroupId == id).ToListAsync();
                        ViewData["QuestionImages"] = await context.ImageFiles.Where(p => p.QuestionGroupId == id).Select(p => new ImageFile { Id = p.Id, Name = p.Name }).ToListAsync();
                    }
                }
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return View(question);
        }

        /// <summary>
        /// Save QuestionGroup data to the sql database or create new QuestionGroup entry if one does not exists.
        /// </summary>
        /// <param name="editQuestion"></param>
        /// <returns>[POST] Returns a redirect to the EditQuestion razor view.</returns>
        [HttpPost]
        public async Task<IActionResult> SaveQuestion(QuestionViewModel editQuestion)
        {
            try
            {
                if (true)
                {
                    // Get QuestionGroup if it exists.
                    QuestionGroup questionGroup = await context.QuestionGroups.SingleOrDefaultAsync(p => p.Id == editQuestion.QuestionGroup.GroupId);
                    if (questionGroup is QuestionGroup)
                    {
                        // If question group exists we overwrite the data for that questiongroup
                        questionGroup.Text = editQuestion.QuestionGroup.Text;

                        // Remove old associated images from question group
                        context.ImageFiles.RemoveRange(context.ImageFiles.Where(p => p.QuestionGroupId == editQuestion.QuestionGroup.GroupId));
                        await context.SaveChangesAsync();

                        // Add all new images to question group
                        using (var dataStream = new MemoryStream())
                        {
                            foreach (var file in editQuestion.QuestionGroup.Files)
                            {
                                var fileName = Path.GetFileNameWithoutExtension(file.FileName);
                                var extension = Path.GetExtension(file.FileName);

                                // Clear the databuffer for the file memory
                                dataStream.Flush();
                                dataStream.Position = 0;
                                dataStream.SetLength(0);
                                await file.CopyToAsync(dataStream);

                                ImageFile imageFile = new ImageFile();
                                imageFile.QuestionGroupId = questionGroup.Id;
                                imageFile.CreatedOn = DateTime.Now;
                                imageFile.FileType = file.ContentType;
                                imageFile.Extension = extension;
                                imageFile.Name = fileName;
                                imageFile.Data = dataStream.ToArray();

                                await context.ImageFiles.AddAsync(imageFile);
                            }
                        }

                        await context.SaveChangesAsync();
                    }
                    else
                    {
                        // No questiongroup exists, create a new questiongroup.
                        QuestionGroup newQuestionGroup = new QuestionGroup();
                        newQuestionGroup.Text = editQuestion.QuestionGroup.Text;
                        newQuestionGroup.ExamId = editQuestion.ExamId;

                        await context.QuestionGroups.AddAsync(newQuestionGroup);
                        await context.SaveChangesAsync();

                        using (var dataStream = new MemoryStream())
                        {
                            foreach (var file in editQuestion.QuestionGroup.Files)
                            {
                                var fileName = Path.GetFileNameWithoutExtension(file.FileName);
                                var extension = Path.GetExtension(file.FileName);

                                // Clear the databuffer for the file memory
                                dataStream.Flush();
                                dataStream.Position = 0;
                                dataStream.SetLength(0);
                                await file.CopyToAsync(dataStream);

                                ImageFile imageFile = new ImageFile();
                                imageFile.QuestionGroupId = newQuestionGroup.Id;
                                imageFile.CreatedOn = DateTime.Now;
                                imageFile.FileType = file.ContentType;
                                imageFile.Extension = extension;
                                imageFile.Name = fileName;
                                imageFile.Data = dataStream.ToArray();

                                await context.ImageFiles.AddAsync(imageFile);
                            }
                        }

                        await context.SaveChangesAsync();
                        editQuestion.QuestionGroup.GroupId = newQuestionGroup.Id;
                    }

                    // Get all the question parts
                    ViewData["QuestionParts"] = await context.Questions.Include(p => p.Answers).Where(p => p.QuestionGroupId == editQuestion.QuestionGroup.GroupId).ToListAsync();
                }
            }
            catch (Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return RedirectToAction("EditQuestion", "Admin", new { id = editQuestion.QuestionGroup.GroupId, examId = editQuestion.ExamId});
        }

        /// <summary>
        /// Create new questionpart entry in the database. This is the actual question.
        /// </summary>
        /// <param name="editQuestion"></param>
        /// <returns>[POST] Returns a redirect to the EditQuestion razor view.</returns>
        [HttpPost]
        public async Task<IActionResult> EditQuestionPart(QuestionViewModel editQuestion)
        {
            try
            {
                // Create new Question with data from view model
                Question question = new Question();
                question.Text = editQuestion.QuestionPart.Text;
                question.QuestionGroupId = editQuestion.QuestionGroup.GroupId;
                question.Points = editQuestion.QuestionPart.Score;
                question.IsTextEntry = (editQuestion.QuestionPart.SelectedChoice == 2) ? true : false;

                await context.Questions.AddAsync(question);
                await context.SaveChangesAsync();

                Answer choiceA = new Answer();
                choiceA.Text = editQuestion.QuestionPart.ChoiceA;
                choiceA.QuestionId = question.Id;

                await context.Answers.AddAsync(choiceA);
                await context.SaveChangesAsync();

                if (!question.IsTextEntry)
                {
                    if (editQuestion.QuestionPart.ChoiceB != null)
                    {
                        var choiceB = new Answer();
                        choiceB.Text = editQuestion.QuestionPart.ChoiceB;
                        choiceB.QuestionId = question.Id;
                        context.Answers.Add(choiceB);
                    }

                    if (editQuestion.QuestionPart.ChoiceC != null)
                    {
                        var choiceC = new Answer();
                        choiceC.Text = editQuestion.QuestionPart.ChoiceC;
                        choiceC.QuestionId = question.Id;
                        context.Answers.Add(choiceC);
                    }

                    if (editQuestion.QuestionPart.ChoiceD != null)
                    {
                        var choiceD = new Answer();
                        choiceD.Text = editQuestion.QuestionPart.ChoiceD;
                        choiceD.QuestionId = question.Id;
                        context.Answers.Add(choiceD);
                    }
                }
                else
                {
                    // Assign text box answer.
                    question.AnswerText = editQuestion.QuestionPart.ChoiceA;
                }
                // Assign question answer
                question.AnswerId = choiceA.Id;
                await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return RedirectToAction("EditQuestion", new { id = editQuestion.QuestionGroup.GroupId, examId = editQuestion.ExamId });
        }


        ///////////////////////////////////////////////////////////////////////////
        /// <summary>
        /// Gets the EditUsers page. URL parameters support paging. Queries database user table with appropriate search filters from URL parameters.
        /// </summary>
        /// <param name="page"></param>
        /// <param name="search"></param>
        /// <param name="filter"></param>
        /// <returns>[GET] Returns EditUsers razor view</returns>
        [HttpGet]
        public async Task<IActionResult> EditUsers(int ? page, string search, string filter)
        {
            // Paginging information
            int pageIndex = (page ?? 1);
            int pageCount = 25;

            // Paginging query for search bar
            var query = context.Users.OrderBy(p => p.LastName);
            if(!String.IsNullOrEmpty(filter))
            {
                if(filter == "email")
                {
                    if (!String.IsNullOrEmpty(search))
                    {
                        query = context.Users.Where(p => p.Email.ToLower().Contains(search.ToLower())).OrderBy(p => p.LastName);
                    }
                }
                else if(filter == "last")
                {
                    if (!String.IsNullOrEmpty(search))
                    {
                        query = context.Users.Where(p => p.LastName.ToLower().Contains(search.ToLower())).OrderBy(p => p.LastName);
                    }
                }
                else if(filter == "first")
                {
                    if (!String.IsNullOrEmpty(search))
                    {
                        query = context.Users.Where(p => p.FirstName.ToLower().Contains(search.ToLower())).OrderBy(p => p.LastName);
                    }
                }
            }

            // Paging query for individual page
            var recordCount = await query.CountAsync();
            var pageItems = await query.Skip((pageIndex - 1) * pageCount).Take(pageCount).ToListAsync();

            // Paging View Model
            PageList<ApplicationUser> pages = new PageList<ApplicationUser>();
            pages.PageItems = pageItems;
            pages.PageIndex = pageIndex;
            pages.PageCount = Convert.ToInt32(Math.Ceiling(Convert.ToDecimal(recordCount) / Convert.ToDecimal(pageCount)));

            // filters
            ViewData["Users"] = pages;
            ViewData["Search"] = search;
            ViewData["Filter"] = filter;

            return View();
        }

        /// <summary>
        /// Downloads and displays the user file image.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Returns a file formed from the bytes and associated information stored in the sql database.</returns>
        public FileResult DownloadUserImage(int id)
        {
            var fileToRetrieve = context.UserFiles.FirstOrDefault(p => p.Id == id);
            return File(fileToRetrieve.Data, fileToRetrieve.FileType);
        }

        /// <summary>
        /// Gets Edit user page and populates account view model.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>[GET] Returns EditUser razor view</returns>
        [HttpGet]
        public async Task<IActionResult> EditUser(string id)
        {
            // Create empty account view model
            AccountViewModel model = new AccountViewModel();

            try
            {
                if (id != null)
                {
                    // Get application user if it exists
                    ApplicationUser user = await context.Users.SingleOrDefaultAsync(p => p.Id == id);
                    if (user != null)
                    {
                        // Fille in account view model with application user data.
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
            }
            catch (Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return View(model);
        }

        /// <summary>
        /// Overwrite or create new Application user entry in sql database.
        /// </summary>
        /// <param name="model"></param>
        /// <returns>[POST] Returns EditUser razor view</returns>
        [HttpPost]
        public async Task<IActionResult> EditUser(AccountViewModel model)
        {
            if (true)
            {
                try
                {
                    ApplicationUser user = await userManager.FindByIdAsync(model.Id);

                    if (user == null)
                    {
                        // check that new user password is not null
                        if(model.Password == null)
                        {
                            ViewData["error"] = "New Accounts Require Passwords";
                            return View(model);
                        }

                        // check that passwords match
                        if (model.Password != model.PasswordConfirm)
                        {
                            ViewData["error"] = "Passwords do not Match";
                            return View(model);
                        }

                        // new user entry
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
                    else
                    {
                        // if password is being changed...
                        if (model.Password != null )
                        {
                            if(model.Password == model.PasswordConfirm)
                            {
                                var token = await userManager.GeneratePasswordResetTokenAsync(user);
                                await userManager.ResetPasswordAsync(user, token, model.Password);
                            }
                            else
                            {
                                ViewData["error"] = "Passwords do not Match";
                                return View(model);
                            }
                        }

                        // overwrite user information
                        user.UserName = model.EmailAddress;
                        user.Email = model.EmailAddress;
                        user.FirstName = model.FirstName;
                        user.LastName = model.LastName;
                        user.PhoneNumber = model.PhoneNumber;
                        user.Address1 = model.Address1;
                        user.Address2 = model.Address2;
                        user.City = model.City;
                        user.State = model.State;
                        user.Zip = model.Zip;
                        user.FaxNumber = model.FaxNumber;
                        user.Company = model.Company;
                        user.CertificationNumber = model.CertificationNumber;

                        await userManager.UpdateAsync(user);
                    }

                    // add/remove roles
                    if (model.AccountRole == false)
                        await userManager.RemoveFromRoleAsync(user, "Admin");
                    else
                        await userManager.AddToRoleAsync(user, "Admin");
                }
                catch (Exception ex)
                {
                    logger.LogWarning(ex.Message);
                }
            }

            return View(model);
        }

        /// <summary>
        /// Deletes a user from the sql database
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> DeleteUser(string id)
        {
            try
            {
                var user = await userManager.FindByIdAsync(id);
                if(user != null)
                {
                    context.UserAnswers.RemoveRange(context.UserAnswers.Where(p => p.Registration.ApplicationUser.Id == id));
                    await context.SaveChangesAsync();

                    await userManager.DeleteAsync(user);
                }
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return RedirectToAction("EditUsers", "Admin");
        }

        //
        // PROCESS
        //

        /// <summary>
        /// Get EditProces page for a specific user as well as associated information.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>[GET] Returns EditProcess razor view with user model</returns>
        [HttpGet]
        public async Task<IActionResult> EditProcess(string id)
        {
            ApplicationUser user = await userManager.Users.Include(p => p.UserFile1).Include(p => p.UserFile2).Include(p => p.UserFile3).FirstOrDefaultAsync(p => p.Id == id);

            try
            {
                // Get previous, current registraitons.
                ViewData["Previous"] = context.Registrations.Where(p => p.ApplicationUserId == id).Include("Exam").AsEnumerable().Where(p => !p.IsValid()).ToList();
                ViewData["Pending"] = context.Registrations.Where(p => p.ApplicationUserId == id).Include("Exam").AsEnumerable().Where(p => p.IsValid()).ToList();
                
                // Get list of possible exams to register.
                ViewData["Exams"] = context.Exams.ToList();

                // Get all the user files if they exist.
                ViewData["file1"] = user.UserFile1;
                ViewData["file2"] = user.UserFile2;
                ViewData["file3"] = user.UserFile3;
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return View(user);
        }

        /// <summary>
        /// Post data for edit process to the database.
        /// </summary>
        /// <param name="button"></param>
        /// <param name="model"></param>
        /// <returns>[POST] Returnh redirect to EditProcess razor view</returns>
        [HttpPost]
        public async Task<IActionResult> EditProcess(string button, ApplicationUser model)
        {
            ApplicationUser user = await userManager.Users.Include(p => p.UserFile1).Include(p => p.UserFile2).Include(p => p.UserFile3).FirstOrDefaultAsync(p => p.Id == model.Id);

            try
            {
                if (button == "save")
                {
                    // Update process checkboxes
                    user.SiteInformationApproved = model.SiteInformationApproved;
                    user.SiteInformationReceived = model.SiteInformationReceived;
                    user.PaymentReceived = model.PaymentReceived;
                    await userManager.UpdateAsync(user);
                }
                if (button == "reset")
                {
                    // reset process checkboxes
                    user.SiteInformationApproved = false;
                    user.SiteInformationReceived = false;
                    user.PaymentReceived = false;
                    await userManager.UpdateAsync(user);
                    return RedirectToAction("EditUsers", "Admin");
                }

                // Get user files
                ViewData["file1"] = user.UserFile1;
                ViewData["file2"] = user.UserFile2;
                ViewData["file3"] = user.UserFile3;
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return RedirectToAction("EditProcess", "Admin", new {id = user.Id });
        }

        /// <summary>
        /// Register a user for an exam given a user id, exam id, and an expiration date.
        /// </summary>
        /// <param name="user"></param>
        /// <param name="exam"></param>
        /// <param name="expirationDate"></param>
        /// <returns>[POST] Returns EditProcess razor view.</returns>
        [HttpPost]
        public async Task<IActionResult> EditRegistration(string user,int exam, DateTime expirationDate )
        {
            try
            {
                // Get user if it exists.
                ApplicationUser appUser = await userManager.FindByIdAsync(user);
                Exam ex = await context.Exams.SingleOrDefaultAsync(p => p.Id == exam);
                if (ex == null)
                {
                    // if exam does not exists or not selected.
                    TempData["dateError"] = "Need to select an exam";
                    return RedirectToAction("EditProcess", "Admin", new { id = user });
                }

                Registration registration = new Registration();
                registration.ExamId = exam;
                registration.ApplicationUserId = user;
                registration.ExpireDate = expirationDate;
                if (registration.ExpireDate < DateTime.Now)
                {
                    // Check that the expiredate is valid
                    TempData["dateError"] = "Need a valid registration date";
                    return RedirectToAction("EditProcess", "Admin", new { id = user });
                }
                registration.Seed = 0;
                context.Registrations.Add(registration);
                context.SaveChanges();
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return RedirectToAction("EditProcess", "Admin", new {id = user });
        }

        /// <summary>
        /// Deletes questionpart from the sql database for the given questionpart id, questiongroup id, and exam id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="questionGroupId"></param>
        /// <param name="examId"></param>
        /// <returns>[GET] Returns redirect to EditQuestion razor page.</returns>
        [HttpGet]
        public IActionResult DeleteQuestionPart(int id, int questionGroupId, int examId)
        {
            try
            {
                // Get queestionpart if it exist.
                var question = context.Questions.Where(p => p.Id == id).FirstOrDefault();
                if (question is Question)
                {
                    //Removes user answers related to the question part.
                    context.UserAnswers.RemoveRange(context.UserAnswers.Where(p => p.Question.Id == id));
                    context.SaveChanges();

                    // Remove the question part
                    context.Remove(question);
                    context.SaveChanges();
                }
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return RedirectToAction("EditQuestion", "Admin", new{ id = questionGroupId, examId = examId});
        }

        /// <summary>
        /// Deletes questiongroup from the sql database for the given questiongroupid and the exam id.
        /// </summary>
        /// <param name="id"></param>
        /// <param name="examId"></param>
        /// <returns>[GET] Returns redirect to EditExam razor view.</returns>
        [HttpGet]
        public IActionResult DeleteQuestionGroups(int id, int examId)
        {
            try
            {
                // Get questiongroup if it exist
                var questionGroup = context.QuestionGroups.Where(p => p.Id == id).FirstOrDefault();
                if (questionGroup is QuestionGroup)
                {
                    // Remove user answers related to the question group
                    context.UserAnswers.RemoveRange(context.UserAnswers.Where(p => p.Question.QuestionGroup.Id == id));
                    context.SaveChanges();

                    // Remove the question group
                    context.Remove(questionGroup);
                    context.SaveChanges();
                }
            }
            catch(Exception ex)
            {
                logger.LogWarning(ex.Message);
            }

            return RedirectToAction("EditExam", "Admin", new { id = examId });
        }
    }
}
