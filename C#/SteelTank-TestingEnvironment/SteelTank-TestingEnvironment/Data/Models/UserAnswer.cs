using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Data.Models
{
    public class UserAnswer
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Question")]
        [Required]
        public int QuestionId { get; set; }

        public virtual Question Question { get; set; }

        [ForeignKey("Registration")]
        [Required]
        public int RegistrationId { get; set; }

        public virtual Registration Registration { get; set; }

        [Required]
        public bool IsTextEntry { get; set; }

        [ForeignKey("Answer")]
        public int? AnswerId { get; set; }

        public virtual Answer Answer { get; set; }

        public string AnswerText { get; set; }
    }
}
