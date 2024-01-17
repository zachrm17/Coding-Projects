import React from "react";
import ProjectCardItem from "./ProjectCardItem";
import "./ProjectCardItem.css";

function ProjectCards() {
  return (
    <>
      <img className="background-image" alt="background" loading="eager" />

      <div className="cards-wrapper">
        <div className="header">
          <h1>Recent Projects</h1>
        </div>
        <ProjectCardItem
          className="blog-card"
          imageUrl="https://s100.iracing.com/wp-content/uploads/2023/05/20230509-WoOGameSuccess-V2.jpg"
          title="WOO Community Website"
          subtitle="React.js, HTML, CSS"
          content="Community Website developed for the Xbox verison of 'World of Outlaws: Dirt Racing'. This site is used as a central hub for the sim racing community
          and includes a list of racing leagues, content creators, upcoming special events, and a composite monthly schedule for all leagues! Site is updated every few weeks."
          viewProjectLink="https://wooxboxcommunity.netlify.app/"
        />
        <ProjectCardItem
          className="blog-card alt"
          imageUrl="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
          title="E-Commerce Application"
          subtitle="Next.js, Stripe, Sanity"
          content="E-Commerce application that was devloped using Next.js, Stripe, and Sanity. Stripe is used to handle online payments in which custom pricing and shipping can be setup while Sanity
          acts as the database which holds all of the products and their respective information. This website is designed to be a Video Game Console store."
          viewProjectLink="https://github.com/zachrm17/Coding-Projects/tree/main/JavaScript/Next.js"
        />
        <ProjectCardItem
          className="blog-card"
          imageUrl="https://previews.123rf.com/images/vectorhome/vectorhome1902/vectorhome190200502/121669441-multithreading-icon-vector-illustration.jpg"
          title="Multithreaded Currency Converter"
          subtitle="Java"
          content="Java program that is designed to convert inputted currency to a selected currency. This program was developed using Multithreading model in which multiple threads can execute the program.
          The program is setup so however many input files there are, the respective number are threads are then created. This program was built to handle massive file sizes and to be completed in good time!"
          viewProjectLink="https://github.com/zachrm17/Coding-Projects/tree/main/Java/Multithreading_CurrencyConverter"
        />
        <ProjectCardItem
          className="blog-card alt"
          imageUrl="https://ryanbrennerrecipes.netlify.app/images/spaghetti.jpg"
          title="Recipe Website"
          subtitle="React.js, HTML, CSS"
          content="Personal website developed for a friend of mine, this site is a healthy/high protein recipe site which includes sample recipes, links to recipe books to purchase, affiliates and affiliate codes to use, and
          an about me page for my friend. This was developed as practice for me and something my buddy can use if he ever wants/needs it!"
          viewProjectLink="https://ryanbrennerrecipes.netlify.app/"
        />
      </div>
    </>
  );
}

export default ProjectCards;
