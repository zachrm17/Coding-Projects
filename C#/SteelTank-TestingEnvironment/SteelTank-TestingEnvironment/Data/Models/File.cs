using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Data.Models
{
    public class File
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string FileType { get; set; }

        [Required]
        public string Extension { get; set; }

        [Required]
        public DateTime? CreatedOn { get; set; }

        [Required]
        public byte[] Data { get; set; }
    }

    public class ImageFile : File
    {
        [ForeignKey("QuestionGroup")]
        public int QuestionGroupId { get; set; }

        public QuestionGroup QuestionGroup { get; set; }
    }

    public class UserFile : File
    {
    }
}
