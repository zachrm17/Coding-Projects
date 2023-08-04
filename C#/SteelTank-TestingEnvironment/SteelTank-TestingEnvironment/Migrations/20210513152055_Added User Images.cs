using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SteelTank_TestingEnvironment.Migrations
{
    public partial class AddedUserImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserFile1Id",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserFile2Id",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserFile3Id",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "UserFiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Extension = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Data = table.Column<byte[]>(type: "varbinary(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserFiles", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserFile1Id",
                table: "AspNetUsers",
                column: "UserFile1Id");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserFile2Id",
                table: "AspNetUsers",
                column: "UserFile2Id");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserFile3Id",
                table: "AspNetUsers",
                column: "UserFile3Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserFiles_UserFile1Id",
                table: "AspNetUsers",
                column: "UserFile1Id",
                principalTable: "UserFiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserFiles_UserFile2Id",
                table: "AspNetUsers",
                column: "UserFile2Id",
                principalTable: "UserFiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserFiles_UserFile3Id",
                table: "AspNetUsers",
                column: "UserFile3Id",
                principalTable: "UserFiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserFiles_UserFile1Id",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserFiles_UserFile2Id",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserFiles_UserFile3Id",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "UserFiles");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_UserFile1Id",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_UserFile2Id",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_UserFile3Id",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "UserFile1Id",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "UserFile2Id",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "UserFile3Id",
                table: "AspNetUsers");
        }
    }
}
