using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SteelTank_TestingEnvironment.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Data
{

    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Exam> Exams { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionGroup> QuestionGroups { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Registration> Registrations { get; set; }
        public DbSet<UserAnswer> UserAnswers { get; set; }
        public DbSet<ImageFile> ImageFiles { get; set; }
        public DbSet<UserFile> UserFiles { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            /*
            builder.Entity<ApplicationUser>()
                .HasOne(p => p.UserFile1).WithOne().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<ApplicationUser>()
                .HasOne(p => p.UserFile2).WithOne().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<ApplicationUser>()
                .HasOne(p => p.UserFile3).WithOne().OnDelete(DeleteBehavior.Cascade);
            */

            /*
            builder.Entity<Registration>()
                .HasOne(p => p.ApplicationUser).WithMany(p => p.Registrations).OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Registration>()
                .HasOne(p => p.Exam).WithMany(p => p.Registrations).OnDelete(DeleteBehavior.Cascade);

            //
            builder.Entity<QuestionGroup>()
                .HasOne(p => p.Exam).WithMany(p => p.QuestionGroups).OnDelete(DeleteBehavior.Cascade);

            //
            builder.Entity<ImageFile>()
                .HasOne(p => p.QuestionGroup).WithMany(p => p.ImageFiles).OnDelete(DeleteBehavior.Cascade);

            //
            builder.Entity<Question>()
                .HasOne(p => p.QuestionGroup).WithMany(p => p.Questions).OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Question>()
                .HasOne(p => p.Answer).WithOne().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Question>()
                .HasMany(p => p.Answers).WithOne(p => p.Question).OnDelete(DeleteBehavior.Cascade);

            // User Answer
            builder.Entity<UserAnswer>()
                .HasOne(p => p.Question).WithMany().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserAnswer>()
                .HasOne(p => p.Registration).WithMany(p => p.UserAnswers).OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserAnswer>()
                .HasOne(p => p.Answer).WithMany().OnDelete(DeleteBehavior.NoAction);
            */

            builder.Entity<UserAnswer>()
                .HasOne(p => p.Question).WithMany().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserAnswer>()
                .HasOne(p => p.Registration).WithMany(p => p.UserAnswers).OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserAnswer>()
                .HasOne(p => p.Answer).WithMany().OnDelete(DeleteBehavior.NoAction);

            base.OnModelCreating(builder);
        }
    }
}
