using Microsoft.EntityFrameworkCore.Migrations;

namespace SteelTank_TestingEnvironment.Migrations
{
    public partial class ApplicationUsersUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "PaymentReceived",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "SiteInformationApproved",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "SiteInformationReceived",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaymentReceived",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SiteInformationApproved",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "SiteInformationReceived",
                table: "AspNetUsers");
        }
    }
}
