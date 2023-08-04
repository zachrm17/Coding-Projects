using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Models
{
    public class ExamViewModels
    {
        public int ExamId { get; set; }
        public string Name { get; set; }
        public List<QuestionViewModels> Questions { get; set; }
    }

    public class QuestionViewModels
    {
        public int QuestionId { get; set; }
        public string Text { get; set; }
        [Required]
        public int SelectedChoice { get; set; }
        public List<ChoiceViewModels> Choices { get; set; }
    }

    public class ChoiceViewModels
    {
        public int ChoiceId { get; set; }
        public string Text { get; set; }
    }
}
