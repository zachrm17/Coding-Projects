using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Data.Models
{
    public class QuestionGroup
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Text { get; set; }

        [ForeignKey("Exam")]
        [Required]
        public int ExamId { get; set; }

        public virtual Exam Exam { get; set; }

        public virtual ICollection<Question> Questions { get; set; }
        public virtual ICollection<ImageFile> ImageFiles { get; set; }
    }

    public class Question
    {
        [Key]
        public int Id { get; set; }

        public string Text { get; set; }
        
        [Required]
        public int Points { get; set; }

        [ForeignKey("QuestionGroup")]
        [Required]
        public int QuestionGroupId { get; set; }

        public virtual QuestionGroup QuestionGroup { get; set; }
        
        [Required]
        public bool IsTextEntry { get; set; }

        [ForeignKey("Answer")]
        public int? AnswerId { get; set; }

        public virtual Answer Answer { get; set; }

        public string AnswerText { get; set; }

        [InverseProperty("Question")]
        public virtual ICollection<Answer> Answers { get; set; }
    }
}