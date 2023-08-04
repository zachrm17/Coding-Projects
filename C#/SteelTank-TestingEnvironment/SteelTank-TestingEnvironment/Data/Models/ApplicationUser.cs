using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Column(TypeName = "Date")]
        public DateTime? DateCertified { get; set; }

        public string Address1 { get; set; } // Nullable https://stackoverflow.com/questions/22886405/set-a-string-column-to-nullable-in-ef6

        public string Address2 { get; set; } // Nullable

        public string City { get; set; } // Nullable

        public string State { get; set; } // Nullable

        public string Zip { get; set; } // Nullable

        public string Company { get; set; } // Nullable

        public string FaxNumber { get; set; } // Nullable

        public string CertificationNumber { get; set; } // Nullable

        public virtual ICollection<Registration> Registrations { get; set; }

        public bool PaymentReceived { get; set; }

        public bool SiteInformationReceived { get; set; }

        public bool SiteInformationApproved { get; set; }

        [ForeignKey("File1")]
        public int? UserFile1Id { get; set; }
        public UserFile UserFile1 { get; set; }

        [ForeignKey("File2")]
        public int? UserFile2Id { get; set; }
        public UserFile UserFile2 { get; set; }

        [ForeignKey("File3")]
        public int? UserFile3Id { get; set; }
        public UserFile UserFile3 { get; set; }
    }
}
