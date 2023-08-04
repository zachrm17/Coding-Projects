using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Data.Models
{
    public class Registration
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Exam")]
        [Required]
        public int ExamId { get; set; }

        public virtual Exam Exam { get; set; }

        [ForeignKey("ApplicationUser")]
        [Required]
        public string ApplicationUserId { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }

        public DateTime ExpireDate { get; set; }

        public DateTime? StartDate { get; set; }

        public int? Score { get; set; }

        [Required]
        public int Seed { get; set; }

        public virtual ICollection<UserAnswer> UserAnswers { get; set; }

        public bool IsValid()
        {
            if (ExpireDate <= DateTime.Now)
                return false;

            if (Score != null)
                return false;

            if (StartDate != null && DateTime.Now - StartDate > TimeSpan.FromMinutes(Exam.Minutes))
                return false;

            return true;
        }
    }
}
