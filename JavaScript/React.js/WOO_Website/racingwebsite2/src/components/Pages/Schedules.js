import React from "react";
import ScheduleTable from "./ScheduleTable";
import Footer from "../Footer";

function Schedules() {
  const events = [
    {
      league: "North American Dirt Sliders League",
      date: "10/22/23",
      time: "6:00",
      class: "Pro Late Models",
      track: "Sugarbush",
    },
    {
      league: "FCL",
      date: "10/22/23",
      time: "7:30",
      class: "UMP Modifieds",
      track: "Volusia",
    },
    {
      league: "Not Your Daddy's Racing Leauge",
      date: "10/22/23",
      time: "8:00",
      class: "410 Sprints",
      track: "Williamsgrove",
    },
    {
      league: "TwoThree Racing",
      date: "10/22/23",
      time: "8:00",
      class: "Super Late Models",
      track: "Knoxville",
    },
    {
      league: "Elite Dirt Series",
      date: "10/22/23",
      time: "9:00",
      class: "Midgets",
      track: "Diamond Grove",
    },
    {
      league: "Banging Cushions Racing League",
      date: "10/22/23",
      time: "9:30",
      class: "Pro Late Models/UMP Modifieds",
      track: "Durango Park",
    },
    {
      league: "SCRA",
      date: "10/24/23",
      time: "8:15",
      class: "Midgets",
      track: "Old Mill",
    },
    {
      league: "WOODS",
      date: "10/24/23",
      time: "9:00",
      class: "Super Late Models",
      track: "Arrowwood",
    },
    {
      league: "Cloud Nine Racing",
      date: "10/24/23",
      time: "9:30",
      class: "UMP Modifieds/Midgets",
      track: "I-19",
    },
    {
      league: "Not Your Daddy's Racing Leauge",
      date: "10/25/23",
      time: "8:00",
      class: "Big Blocks",
      track: "Charlotte",
    },
    {
      league: "SCRA",
      date: "10/25/23",
      time: "8:15",
      class: "UMP Modifieds",
      track: "Straight River",
    },
    {
      league: "WOODS",
      date: "10/25/23",
      time: "9:00",
      class: "Midgets",
      track: "Lernerville",
    },
    {
      league: "Banging Cushions Racing League",
      date: "10/25/23",
      time: "9:30",
      class: "Super Late Models/Big Blocks",
      track: "Roper Mountain",
    },
    {
      league: "FCL",
      date: "10/26/23",
      time: "7:30",
      class: "Super Late Models",
      track: "Desert Rock",
    },
    {
      league: "WOODS",
      date: "10/26/23",
      time: "9:00",
      class: "Pro Late Models",
      track: "Lernerville",
    },
    {
      league: "*SPECIAL*: WOODS",
      date: "10/27/23",
      time: "8:00",
      class: "Midgets",
      track: "Elm Creek",
    },
    {
      league: "Banging Cushions Racing League",
      date: "10/27/23",
      time: "9:30",
      class: "360 Sprints/Midgets",
      track: "Baxterville/Prairie View",
    },
    {
      league: "North American Dirt Sliders League",
      date: "10/29/23",
      time: "6:00",
      class: "Big Blocks",
      track: "Jacobs County",
    },
    {
      league: "FCL",
      date: "10/29/23",
      time: "7:30",
      class: "UMP Modifieds",
      track: "Durango Park",
    },
    {
      league: "Not Your Daddy's Racing Leauge",
      date: "10/29/23",
      time: "8:00",
      class: "UMP Modifieds",
      track: "Kenyon County",
    },
    {
      league: "TwoThree Racing",
      date: "10/29/23",
      time: "8:00",
      class: "Super Late Models",
      track: "Kenyon County",
    },
    {
      league: "Elite Dirt Series",
      date: "10/29/23",
      time: "9:00",
      class: "UMP Modifieds",
      track: "Kenyon County",
    },
    {
      league: "Banging Cushions Racing League",
      date: "10/29/23",
      time: "9:30",
      class: "Pro Late Models/UMP Modifieds",
      track: "Sheep Mountain",
    },
    {
      league: "SCRA",
      date: "10/31/23",
      time: "8:15",
      class: "Midgets",
      track: "I-55",
    },
    {
      league: "Cloud Nine Racing",
      date: "10/31/23",
      time: "9:30",
      class: "UMP Modifieds/Midgets",
      track: "Straight River",
    },

    /*
    Template
    {
    league: '',
      date: '',
      time: '',
      class: '',
      track: '',
    },
      */
  ];

  return (
    <>
      <ScheduleTable events={events} />
      <Footer />
    </>
  );
}

export default Schedules;
