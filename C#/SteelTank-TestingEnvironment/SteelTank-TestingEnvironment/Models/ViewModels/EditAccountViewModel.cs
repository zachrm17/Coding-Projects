using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Models.ViewModels
{
    public class EditAccountViewModel
    {
        public EditAccountViewModel()
        {
            AccountRole = false;
        }

        public string AccountId { get; set; }

        [Required]
        public string AccountFirstName { get; set; }

        [Required]
        public string AccountLastName { get; set; }

        [Required]
        public string AccountEmailAddress { get; set; }

        public string AccountPhoneNumber { get; set; }

        public string AccountAddress1 { get; set; }

        public string AccountAddress2 { get; set; }

        public string AccountCity { get; set; }

        public string AccountState { get; set; }

        public string AccountZip { get; set; }

        public string AccountFax { get; set; }

        public string AccountCompany { get; set; }

        public string AccountCertificationNumber { get; set; }

        public string AccountNewPassword { get; set; }

        public bool AccountRole { get; set; }
    }
}
