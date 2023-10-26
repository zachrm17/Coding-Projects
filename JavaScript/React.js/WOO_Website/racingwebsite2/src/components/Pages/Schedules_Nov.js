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
      league: "FCL",
      date: "11/2/23",
      time: "7:30",
      class: "Super Late Models",
      track: "Sugarbush",
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
