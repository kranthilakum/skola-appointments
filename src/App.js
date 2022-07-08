import { BiArchive } from "react-icons/bi";
import { useState, useEffect, useCallback } from "react";
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";
import "./App.css";
import Appointment from "./components/Appointment";

function App() {
  let [appointments, setAppointments] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("student-name");
  const fetchAppointments = useCallback(() => {
    fetch("./data.json")
      .then((resp) => resp.json())
      .then((data) => setAppointments(data));
  }, []);
  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);
  const filteredAppointments = appointments
    .filter((appointment) => {
      let studentName = appointment["student-name"].toLowerCase();
      return studentName.includes(query.toLowerCase());
    })
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-5">
        <BiArchive className="inline-block text-red-400 align-top" />
        Skola appointments
      </h1>
      <AddAppointment
        addAppointment={(appointment) =>
          setAppointments([...appointments, appointment])
        }
      />
      <Search
        query={query}
        findAppointment={(myQuery) => setQuery(myQuery)}
        sortBy={sortBy}
        onSortByChange={(sortBy) => setSortBy(sortBy)}
      />
      <ul className="divide-y divide-gray-200">
        {filteredAppointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            cancelAppointment={(appointmentId) => {
              setAppointments(
                appointments.filter(
                  (appointment) => appointmentId !== appointment.id
                )
              );
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
