import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function HomeCards() {
  return (
    <div className="cards">
      <h1>Check out ALL this content!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/latemodel.jpg"
              text="Explore many leagues that the Xbox Community has to offer!"
              label="League Racing"
              path="/Leagues"
            />
            <CardItem
              src="images/money.jpg"
              text="Think you're fast enough? Test your luck in Special Events!"
              label="Special Events"
              path="/SpecialEvents"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/calendar.jpg"
              text="View a composite schedule of the most popular leagues!"
              label="Composite Schedule"
              path="/Schedules"
            />
            <CardItem
              src="images/umpmod.webp"
              text="Want custom content? Check out these creators!"
              label="Content Creators"
              path="/ContentCreators"
            />
            {/* <CardItem
              src="images/discord.png"
              text="Join leagues by browsing invite links here!"
              label="Discord Links"
              path="/Discord"
            /> */}
          </ul>
        </div>
      </div>
    </div>
    // <div className="cards">
    //   <div className="row">
    //     <div className="column">
    //       <h1>Creators</h1>
    //       <div className="cards__container">
    //         <div className="cards__wrapper">
    //           <ul className="cards__items">
    //             <CardItem
    //               src="images/jdubbsgraphics.png"
    //               text="Jdubbs Graphics"
    //               label="Driver Cards & Posters"
    //               path="/"
    //             />
    //           </ul>
    //           <ul className="cards__items">
    //             <CardItem
    //               src="images/ex1.png"
    //               text="Creator_2"
    //               label="descriptions"
    //               path="/"
    //             />
    //           </ul>
    //           <h4>View all Creators</h4>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="column">
    //       <h1>Leagues</h1>
    //       <div className="cards__container">
    //         <div className="cards__wrapper">
    //           <ul className="cards__items">
    //             <CardItem
    //               src="images/FCL_Logo.png"
    //               text="FCL Racing League"
    //               label="Sundays & Thursdays"
    //               path="/FCL"
    //             />
    //           </ul>
    //           <ul className="cards__items">
    //             <CardItem
    //               src="images/scra.png"
    //               text="SCRA"
    //               label="Monday-Wednesday"
    //               path="/SCRA"
    //             />
    //           </ul>
    //           <h4>
    //             <a href="/Leagues">View Xbox Leagues</a>
    //           </h4>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="column">
    //       <h1>Specials</h1>
    //       <div className="cards__container">
    //         <div className="cards__wrapper">
    //           <ul className="cards__items">
    //             <CardItem
    //               src="images/luau.jpg"
    //               text="Lu'au at Limaland"
    //               label="December 4th-6th"
    //               path="/"
    //             />
    //           </ul>
    //           <ul className="cards__items">
    //             <CardItem
    //               src="images/nightmare.jpg"
    //               text="Nightmare on Elm Creek"
    //               label="October 27th"
    //               path="/"
    //             />
    //           </ul>
    //           <h4>
    //             <a href="/SpecialEvents">View all Specials</a>
    //           </h4>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HomeCards;
