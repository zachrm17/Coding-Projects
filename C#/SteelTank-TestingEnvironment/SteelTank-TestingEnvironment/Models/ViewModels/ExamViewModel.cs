using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Models.ViewModels
{
    public class ExamViewModel
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string Description { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public int Hours { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public int Minutes { get; set; }

        public int Time
        {
            get
            {
                return (Hours * 60) + Minutes;
            }

            set
            {
                Hours = value / 60;
                Minutes = value % 60;
            }
        }
    }
}
