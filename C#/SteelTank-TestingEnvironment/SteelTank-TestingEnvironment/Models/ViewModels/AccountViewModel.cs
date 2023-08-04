using Microsoft.AspNetCore.Http;
using SteelTank_TestingEnvironment.Data.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Models.ViewModels
{
    public class AccountViewModel
    {
        [Required]
        public string Id { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        public string PasswordConfirm { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }

        public string Company { get; set; }

        public string FaxNumber { get; set; }

        public string CertificationNumber { get; set; }

        public bool AccountRole { get; set; }

        [AllowedExtensions(new string[] { ".pdf" })]
        public IFormFile FileInput1 { get; set; }

        [AllowedExtensions(new string[] { ".pdf" })]
        public IFormFile FileInput2 { get; set; }

        [AllowedExtensions(new string[] { ".pdf" })]
        public IFormFile FileInput3 { get; set; }

        public UserFile UserFile1 { get; set; }

        public UserFile UserFile2 { get; set; }

        public UserFile UserFile3 { get; set; }
    }
}
