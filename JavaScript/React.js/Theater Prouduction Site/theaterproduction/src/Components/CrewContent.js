import React from "react";
import "./AboutContent.css";

function CrewContent() {
  return (
    <>
      <section className="hero">
        <div className="heading">
          <h1>Staff</h1>
        </div>
      </section>
      <br></br>
      <div className="container">
        <div className="hero-content">
          <h2>Ryan Coleman</h2>
          <h3>Writer/Director</h3>
          <p>
            Ryan Coleman grew up immersed in the world of theater, but it wasn’t
            until he began taking acting classes at Second City that he
            rediscovered his passion for comedy and the performing arts. Through
            the connections made, Ryan went on to write and produce sketch
            comedy shows, perform in improv groups, and book performances at
            theaters across Chicago. Now, he’s dedicated to helping others do
            the same.
          </p>
          <p>
            Don’t Quit Productions was founded with the mission of guiding
            creatives from concept to stage. Ryan's goal is to support those
            with sketch or show ideas, helping them navigate the business side
            of show production. Ultimately, Don’t Quit Productions aims to be
            recognized as a premier name in Chicago comedy, with its stamp on
            show posters signifying top-tier performances, eventually expanding
            into film and more.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="images/ryan_headshot.jpg"
            className="headshot"
            alt="Ryan Coleman Headshot"
          />
        </div>
      </div>
      <br></br>
      <div className="container reverse-order">
        <div className="hero-image-left">
          <img
            src="images/kitty_headshot.jpg"
            className="headshot"
            alt="Kitty Clark Headshot"
          />
        </div>
        <div className="hero-content">
          <h2>Kitty Clark</h2>
          <h3>Artistic Director</h3>
          <p>
            Kitty Clark grew up performing in the musical world. She
            participated in singing competitions throughout the years and
            eventually studied vocal performance at Western Michigan University
            before switching majors to study Communications. After taking a
            break from performing, Kitty threw herself back into it after moving
            to Chicago in August 2023. Through the programs at The Second City,
            Kitty began writing and producing sketch comedy shows, performing in
            various improv groups across Chicago, and rediscovering her love for
            performing.
          </p>
          <p>
            As artistic director, Kitty is excited for Don’t Quit Productions to
            allow artists to explore their passions and focus on their craft.
            Her ultimate goal with DQP is to help beginning creatives find their
            grounding to flourish.
          </p>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="hero-content">
          <h2>Dan Segun</h2>
          <h3>Technical Director</h3>
          <p>
            Dan Seguin started his big city comedy journey in 2023 after moving
            to Chicago from rural Ontario. While Dan’s background is more
            technical than theatrical, he has made his mark on Chicago’s comedy
            scene as an actor, writer, director, and producer since his move.
            Dan’s combination of corporate acumen and Canadian charm helps make
            every show at Don’t Quit Productions run as smoothly as possible.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="images/dan_headshot.jpg"
            className="headshot"
            alt="Ryan Coleman Headshot"
          />
        </div>
      </div>
    </>
  );
}

export default CrewContent;
