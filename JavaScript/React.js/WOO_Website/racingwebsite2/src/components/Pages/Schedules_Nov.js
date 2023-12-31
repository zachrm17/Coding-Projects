import React from "react";
import ScheduleTable from "./ScheduleTable";
import Footer from "../Footer";

function Schedules_Nov() {
  const events = [
    {
      league: "SCRA",
      date: "11/1/23",
      time: "8:15",
      class: "UMP Modifieds",
      track: "Limaland",
    },
    {
      league: "BCRL",
      date: "11/1/23",
      time: "9:30",
      class: "Super Late Models/Big Blocks",
      track: "Circle Lake",
    },
    {
      league: "Talent of WoO",
      date: "11/1/23",
      time: "10:00",
      class: "Super Late Models",
      track: "Diamond Grove",
    },
    {
      league: "Rip the Lip",
      date: "11/1/23",
      time: "10:15",
      class: "Super Late Models",
      track: "Kokomo/Volusia",
    },

    {
      league: "FCL",
      date: "11/2/23",
      time: "7:30",
      class: "Super Late Models",
      track: "Sugarbush",
    },
    {
      league: "NYDRL",
      date: "11/2/23",
      time: "8:00",
      class: "Super Late Models",
      track: "Eldora",
    },
    {
      league: "XORS",
      date: "11/2/23",
      time: "8:30",
      class: "410 Sprints/Super LMs/Midgets",
      track: "Knoxville",
    },
    {
      league: "BCRL",
      date: "11/3/23",
      time: "9:30",
      class: "360 Sprints/Midgets",
      track: "Sterling County",
    },
    {
      league: "5M Extreme Racing Series",
      date: "11/3/23",
      time: "TBD",
      class: "Super Late Models",
      track: "Lucas Oil",
    },
    {
      league: "2023 Pro LM Tour",
      date: "11/4/23",
      time: "8:30",
      class: "Pro Late Models",
      track: "Eldora",
    },
    {
      league: "NADSL",
      date: "11/5/23",
      time: "6:00",
      class: "410 Sprints",
      track: "Knoxville",
    },
    {
      league: "FCL",
      date: "11/5/23",
      time: "7:30",
      class: "UMP Modifieds",
      track: "Fairbury",
    },
    {
      league: "NYRDL",
      date: "11/5/23",
      time: "8:00",
      class: "410 Sprints",
      track: "Eldora",
    },
    {
      league: "TwoThree Racing",
      date: "11/5/23",
      time: "8:00",
      class: "Super Late Models",
      track: "Lincoln",
    },
    {
      league: "BCRL",
      date: "11/5/23",
      time: "9:30",
      class: "Pro Late Models/UMP Mods",
      track: "Lernerville",
    },
    {
      league: "5M Extreme Racing",
      date: "11/5/23",
      time: "TBD",
      class: "Street Stocks/Pro Late Models",
      track: "Lucas Oil",
    },
    {
      league: "Rip the Lip",
      date: "11/6/23",
      time: "10:15",
      class: "UMP Modifieds",
      track: "Kokomo/Jacobs County",
    },
    {
      league: "VOR Street Stocks",
      date: "11/7/23",
      time: "7:45",
      class: "Street Stocks",
      track: "Eldora",
    },
    {
      league: "SCRA",
      date: "11/7/23",
      time: "8:15",
      class: "Midgets",
      track: "Diamond Grove",
    },
    {
      league: "Cloud Nine Racing",
      date: "11/7/23",
      time: "9:30",
      class: "UMP Modifieds/Midgets",
      track: "Grant Park",
    },
    {
      league: "5M Extreme Racing",
      date: "11/7/23",
      time: "TBD",
      class: "UMP Modifieds",
      track: "Lucas Oil",
    },
    {
      league: "SCRA",
      date: "11/8/23",
      time: "8:15",
      class: "UMP Modifieds",
      track: "Texas",
    },
    {
      league: "Rip the Lip",
      date: "11/8/23",
      time: "10:15",
      class: "Super Late Models/Modifieds",
      track: "TBD/TBD",
    },
    {
      league: "Spare Parts",
      date: "11/9/23",
      time: "7:00",
      class: "360 Sprints",
      track: "Lernverville/Sugarbush",
    },
    {
      league: "Spare Parts",
      date: "11/9/23",
      time: "7:00",
      class: "UMP Modifieds",
      track: "Kenyon County/Straight River",
    },
    {
      league: "FCL",
      date: "11/9/23",
      time: "7:30",
      class: "Super Late Models",
      track: "Jacobs County",
    },
    {
      league: "XORS",
      date: "11/9/23",
      time: "8:30",
      class: "410 Sprints/Super Late Models/Midgets",
      track: "I-55",
    },
    {
      league: "Talent of WoO",
      date: "11/9/23",
      time: "10:00",
      class: "Super Late Models",
      track: "Norris County",
    },
    {
      league: "5M Extreme Racing",
      date: "11/10/23",
      time: "TBD",
      class: "Super Late Models",
      track: "Millstone",
    },
    {
      league: "2023 Pro Late Models Tour",
      date: "11/11/23",
      time: "8:30",
      class: "Pro Late Models",
      track: "Lernerville",
    },
    {
      league: "NADSL",
      date: "11/12/23",
      time: "6:00",
      class: "Pro Late Models",
      track: "Millstone",
    },
    {
      league: "FCL",
      date: "11/12/23",
      time: "7:30",
      class: "UMP Modifieds",
      track: "Cedar Lake",
    },
    {
      league: "NYDRL",
      date: "11/12/23",
      time: "8:00",
      class: "UMP Modifieds",
      track: "Jacobs County",
    },
    {
      league: "5M Extreme Racing",
      date: "11/12/23",
      time: "TBD",
      class: "Street Stocks/Pro Late Models",
      track: "Millstone",
    },
    {
      league: "VOR Street Stocks",
      date: "11/14/23",
      time: "7:45",
      class: "Street Stocks",
      track: "Fairbury",
    },
    {
      league: "SCRA",
      date: "11/14/23",
      time: "8:15",
      class: "Midgets",
      track: "I-19",
    },
    {
      league: "Cloud Nine Racing",
      date: "11/14/23",
      time: "9:30",
      class: "UMP Modifieds/Midgets",
      track: "Kenyon County",
    },
    {
      league: "5M Extreme Racing",
      date: "11/14/23",
      time: "TBD",
      class: "UMP Modifieds",
      track: "Millstone",
    },
    {
      league: "SCRA",
      date: "11/15/23",
      time: "8:15",
      class: "UMP Modifieds",
      track: "Cedar Lake",
    },
    {
      league: "Spare Parts",
      date: "11/16/23",
      time: "7:00",
      class: "305 Sprints",
      track: "Woodly/Lincoln",
    },
    {
      league: "Spare Parts",
      date: "11/16/23",
      time: "7:00",
      class: "Big Blocks",
      track: "Weedsport/Baxterville",
    },
    {
      league: "FCL",
      date: "11/16/23",
      time: "7:30",
      class: "Super Late Models",
      track: "Las Vegas",
    },
    {
      league: "XORS",
      date: "11/16/23",
      time: "8:30",
      class: "410 Sprints/Super Late Models/Midgets",
      track: "I-19",
    },
    {
      league: "5M Extreme Racing",
      date: "11/17/23",
      time: "TBD",
      class: "Super Late Models",
      track: "Five Forks",
    },
    {
      league: "SPECIAL: TwoThree Racing Turkey Grand Nationals",
      date: "11/17-11/18",
      time: "TBD",
      class: "TBD",
      track: "TBD",
    },
    {
      league: "2023 Pro Late Models Tour",
      date: "11/18/23",
      time: "8:30",
      class: "Pro Late Models",
      track: "Durango Park",
    },
    {
      league: "Talent of WoO",
      date: "11/18/23",
      time: "10:00",
      class: "Super Late Models",
      track: "Lincoln",
    },
    {
      league: "NADSL",
      date: "11/19/23",
      time: "6:00",
      class: "Midgets",
      track: "Grant Park",
    },
    {
      league: "FCL",
      date: "11/19/23",
      time: "7:30",
      class: "UMP Modifieds",
      track: "Limaland",
    },
    {
      league: "NYDRL",
      date: "11/19/23",
      time: "8:00",
      class: "410 Sprints",
      track: "Knoxville",
    },
    {
      league: "FCL",
      date: "11/19/23",
      time: "8:30",
      class: "Super Late Models",
      track: "Charlotte",
    },
    {
      league: "5M Extreme Racing",
      date: "11/19/23",
      time: "TBD",
      class: "Street Stocks/Pro Late Models",
      track: "Five Forks",
    },

    {
      league: "VOR Street Stocks",
      date: "11/21/23",
      time: "7:45",
      class: "Street Stocks",
      track: "I-55",
    },
    {
      league: "Cloud Nine Racing",
      date: "11/21/23",
      time: "9:30",
      class: "UMP Modifieds/Midgets",
      track: "Norris County",
    },
    {
      league: "5M Extreme Racing",
      date: "11/21/23",
      time: "TBD",
      class: "UMP Modifieds",
      track: "Five Forks",
    },
    {
      league: "NYDRL",
      date: "11/22/23",
      time: "8:00",
      class: "Super Late Models",
      track: "Charlotte",
    },
    {
      league: "XORS",
      date: "11/23/23",
      time: "8:30",
      class: "410 Sprints/Super Late Models/Midgets",
      track: "Cedar Lake",
    },
    {
      league: "5M Extreme Racing",
      date: "11/24/23",
      time: "TBD",
      class: "Super Late Models",
      track: "Texas",
    },
    {
      league: "2023 Pro Late Models Tour",
      date: "11/25/23",
      time: "8:30",
      class: "Pro Late Models",
      track: "I-55",
    },
    {
      league: "NADSL",
      date: "11/26/23",
      time: "6:00",
      class: "Big Blocks",
      track: "Eldora",
    },
    {
      league: "5M Extreme Racing",
      date: "11/26/23",
      time: "TBD",
      class: "Street Stocks/Pro Late Models",
      track: "Texas",
    },
    {
      league: "VOR Street Stocks",
      date: "11/28/23",
      time: "7:45",
      class: "Street Stocks",
      track: "Knoxville",
    },
    {
      league: "SCRA",
      date: "11/28/23",
      time: "8:15",
      class: "Midgets",
      track: "Limaland",
    },
    {
      league: "Cloud Nine Racing",
      date: "11/28/23",
      time: "9:30",
      class: "UMP Modifieds/Midgets",
      track: "I-55",
    },
    {
      league: "5M Extreme Racing",
      date: "11/28/23",
      time: "TBD",
      class: "UMP Modifieds",
      track: "Texas",
    },
    {
      league: "SCRA",
      date: "11/29/23",
      time: "8:15",
      class: "UMP Modifieds",
      track: "I-55",
    },
  ];

  return (
    <>
      <ScheduleTable events={events} />
      <Footer />
    </>
  );
}

export default Schedules_Nov;
