import { ImCross } from "react-icons/im";

const Appointment = ({ appointment, cancelAppointment }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button
        type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => cancelAppointment(appointment.id)}
      >
        <ImCross />
      </button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {appointment["student-name"]}
          </span>
          <span className="flex-grow text-right">
            {appointment["date-time"]}
          </span>
        </div>
        <div>
          <b className="font-bold text-blue-500">Parent:</b>{" "}
          {appointment["parent-name"]}
        </div>
        <div className="leading-tight">{appointment["memo"]}</div>
      </div>
    </li>
  );
};
export default Appointment;
