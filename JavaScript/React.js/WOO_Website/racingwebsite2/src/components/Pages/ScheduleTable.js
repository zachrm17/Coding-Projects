import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./Schedules.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function ScheduleTable({ events }) {
  return (
    <>
      <h1>Composite League Schedules</h1>
      <br></br>

      <h3>
        <a href="/Schedules_Dec">December 2023 Schedule</a> -{" "}
        <a href="/Schedules_Jan">January 2024 Schedule</a> -{" "}
        <a href="/Schedules_Feb">February 2024 Schedule</a>
      </h3>
      <br></br>

      <p>
        To search for a specific league, track, or class, use the 'find' option
        in your browser.
      </p>

      <div className="table-container">
        <Table>
          <Thead>
            <Tr>
              <Th>League</Th>
              <Th>Date</Th>
              <Th>Time (EST.)</Th>
              <Th>Class</Th>
              <Th>Track</Th>
            </Tr>
          </Thead>
          <Tbody>
            {events.map((event, index) => (
              <Tr key={index}>
                <Td>{event.league}</Td>
                <Td>{event.date}</Td>
                <Td>{event.time}</Td>
                <Td>{event.class}</Td>
                <Td>{event.track}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
      <p>Schedules put together by: Chris Murphy (Mod05)</p>
      {/* Add your Footer component here */}
    </>
  );
}

export default ScheduleTable;
