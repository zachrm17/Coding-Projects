using Microsoft.AspNetCore.Http;
using SteelTank_TestingEnvironment.Data.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Models
{
    public class QuestionViewModel
    {
        public QuestionViewModel()
        {
            QuestionGroup = new QuestionGroupViewModel();
            QuestionPart = new QuestionPartViewModel();
        }

        [Required]
        public int ExamId { get; set; }

        public  QuestionGroupViewModel QuestionGroup { get; set; }

        public QuestionPartViewModel QuestionPart { get; set; }
    }

    public class QuestionGroupViewModel
    {
        public QuestionGroupViewModel()
        {
            Files = new List<IFormFile>();
        }

        [Required]
        public int  GroupId { get; set; }

        [Required]
        public string Text { get; set; }

        [AllowedExtensions(new string[] { ".jpg", ".jpeg", ".png" })]
        public List<IFormFile> Files { get; set; }
    }

    public class QuestionPartViewModel
    {
        public QuestionPartViewModel()
        {
            Choices = new List<QuestionTypeViewModel>();
            Choices.Add(new QuestionTypeViewModel() {choiceId = 1, text = "Multiple Choice" });
            Choices.Add(new QuestionTypeViewModel() { choiceId = 2, text = "Text Box" });
        }

        [Required]
        public int PartId { get; set; }

        [Required]
        public string Text { get; set; }

        public int SelectedChoice { get; set; }

        public List<QuestionTypeViewModel> Choices { get; set; }

        public string ChoiceA { get; set; }
        public string ChoiceB { get; set; }
        public string ChoiceC { get; set; }
        public string ChoiceD { get; set; }
        [Required]
        public int Score { get; set; }

    }

    public class QuestionTypeViewModel
    {
        public int choiceId { get; set; }

        public string text { get; set; }
    }
}
