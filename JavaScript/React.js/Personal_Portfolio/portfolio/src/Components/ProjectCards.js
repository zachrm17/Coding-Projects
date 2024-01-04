import React from "react";
import ProjectCardItem from "./ProjectCardItem";
import "./ProjectCardItem.css";

function ProjectCards() {
  return (
    <>
      <div className="cards-wrapper">
        <div className="header">
          <h1>Recent Projects</h1>
        </div>
        <ProjectCardItem
          className="blog-card"
          imageUrl="https://s100.iracing.com/wp-content/uploads/2023/05/20230509-WoOGameSuccess-V2.jpg"
          title="WOO Community Website"
          subtitle="React.js, HTML, CSS"
          content="This is where I'll describe the website right here and talk about it in some detail"
          viewProjectLink="https://wooxboxcommunity.netlify.app/"
        />
        <ProjectCardItem
          className="blog-card alt"
          imageUrl="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
          title="E-Commerce Application"
          subtitle="Next.js, Stripe, Sanity"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
          viewProjectLink="https://github.com/zachrm17/Coding-Projects/tree/main/JavaScript/Next.js"
        />
        <ProjectCardItem
          className="blog-card"
          imageUrl="https://previews.123rf.com/images/vectorhome/vectorhome1902/vectorhome190200502/121669441-multithreading-icon-vector-illustration.jpg"
          title="Multithreaded Currency Converter"
          subtitle="Java"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
          viewProjectLink="https://github.com/zachrm17/Coding-Projects/tree/main/Java/Multithreading_CurrencyConverter"
        />
        <ProjectCardItem
          className="blog-card alt"
          imageUrl="https://ryanbrennerrecipes.netlify.app/images/spaghetti.jpg"
          title="Recipe Website"
          subtitle="React.js, HTML, CSS"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
          viewProjectLink="https://ryanbrennerrecipes.netlify.app/"
        />
      </div>
    </>
  );
}

export default ProjectCards;
