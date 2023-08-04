using Microsoft.EntityFrameworkCore.Migrations;

namespace SteelTank_TestingEnvironment.Migrations
{
    public partial class RenameFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AccountCompany",
                table: "AspNetUsers",
                newName: "Company");

            migrationBuilder.RenameColumn(
                name: "AccountAddress2",
                table: "AspNetUsers",
                newName: "Address2");

            migrationBuilder.RenameColumn(
                name: "AccountAddress1",
                table: "AspNetUsers",
                newName: "Address1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Company",
                table: "AspNetUsers",
                newName: "AccountCompany");

            migrationBuilder.RenameColumn(
                name: "Address2",
                table: "AspNetUsers",
                newName: "AccountAddress2");

            migrationBuilder.RenameColumn(
                name: "Address1",
                table: "AspNetUsers",
                newName: "AccountAddress1");
        }
    }
}
