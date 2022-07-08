import { useState } from "react";
import { v4 } from "uuid";
import { BiCalendarPlus } from "react-icons/bi";

const AddAppointment = ({ addAppointment }) => {
  let [toggleForm, setToggleForm] = useState(false);
  const formData = {
    studentName: "",
    parentName: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentNotes: "",
  };
  let [appointmentForm, setAppointmentForm] = useState(formData);
  function createAppointment() {
    const appointmentData = {
      id: v4(),
      "student-name": appointmentForm.studentName,
      "parent-name": appointmentForm.parentName,
      "date-time":
        appointmentForm.appointmentDate + " " + appointmentForm.appointmentTime,
      memo: appointmentForm.appointmentNotes,
    };
    addAppointment(appointmentData);
    setAppointmentForm(formData);
    setToggleForm(!toggleForm);
  }
  return (
    <div>
      <button
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={() => setToggleForm(!toggleForm)}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Appointment
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="studentName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Student Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="studentName"
                id="studentName"
                className="max-w-lg py-2 px-3 block w-full shadow-sm appearance-none text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={appointmentForm.studentName}
                onChange={(event) =>
                  setAppointmentForm({
                    ...appointmentForm,
                    studentName: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="parentName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Parent Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="parentName"
                id="parentName"
                className="max-w-lg py-2 px-3 block w-full shadow-sm appearance-none text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={appointmentForm.parentName}
                onChange={(event) =>
                  setAppointmentForm({
                    ...appointmentForm,
                    parentName: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                className="max-w-lg py-2 px-3 block w-full shadow-sm appearance-none text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={appointmentForm.appointmentDate}
                onChange={(event) =>
                  setAppointmentForm({
                    ...appointmentForm,
                    appointmentDate: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                name="aptTime"
                id="aptTime"
                className="max-w-lg py-2 px-3 block w-full shadow-sm appearance-none text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={appointmentForm.appointmentTime}
                onChange={(event) =>
                  setAppointmentForm({
                    ...appointmentForm,
                    appointmentTime: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                name="aptNotes"
                rows="3"
                placeholder="Detailed comments on the appointment"
                className="max-w-lg py-2 px-3 block w-full shadow-sm appearance-none text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={appointmentForm.appointmentNotes}
                onChange={(event) =>
                  setAppointmentForm({
                    ...appointmentForm,
                    appointmentNotes: event.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                onClick={createAppointment}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddAppointment;
