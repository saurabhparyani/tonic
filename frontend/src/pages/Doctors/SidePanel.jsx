import React, { useState } from "react";
// import { BASE_URL, token } from "../../config";
// import DatePicker from "react-datepicker";
// import PayButton from "../../components/PayButton/PayButton";
import { toast } from "react-toastify";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ doctorId, appointmentFee, timeSlots }) => {
  // const [date, setDate] = useState(new Date());
  // const [openDates, setOpenDates] = useState([]);
  // const [showSlots, setShowSlots] = useState(false);
  // const [slots, setSlots] = useState([]);
  // const [selectedTime, setSelectedTime] = useState("");

  // const getAvailableDates = async () => {
  //   const res = await fetch(
  //     `${BASE_URL}/users/getAvailableDates/${details.details._id}`,
  //     {
  //       method: "get",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   let result = await res.json();
  //   setOpenDates(result.data);
  // };

  // const parseBackendDates = (dates) => {
  //   return dates.map((dateStr) => new Date(dateStr));
  // };

  // const highlightDates = parseBackendDates(openDates);

  // const handleChange = (date) => {
  //   setDate(date);
  //   setShowSlots(false);
  // };

  // const searchSlots = async () => {
  //   try {
  //     const res = await fetch(
  //       `${BASE_URL}/users/getAvailableSlots?date=${date.toISOString()}&doctor=${
  //         details.details._id
  //       }`,
  //       {
  //         method: "get",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     let result = await res.json();
  //     console.log("resutl", result);

  //     const bookedSlotsRes = await fetch(
  //       `${BASE_URL}/users/getBookedSlots?date=${date.toISOString()}&doctor=${
  //         details.details._id
  //       }`,
  //       {
  //         method: "get",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const bookedSlotsResult = await bookedSlotsRes.json();
  //     const bookedSlots = bookedSlotsResult.data;
  //     const availableSlots = result.data.filter(
  //       (slot) => !bookedSlots.includes(slot)
  //     );
  //     setShowSlots(true);
  //     setSlots(availableSlots);
  //   } catch (error) {
  //     console.log("An Error Occured", error.message);
  //     toast.error(`Error:${error.message}`);
  //   }
  // };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5  rounded-md">
      <div className="flex items-center justify-between py-2">
        <p className="text__para mt-0 font-semibold"> Consultation Fee :</p>
        <span className="text-[16px]  leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold mr-9">
          {appointmentFee !== undefined ? `₹${appointmentFee}` : "Not added"}
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        {/* <DatePicker
          className="border border-solid-black"
          placeholderText="select a date "
          showIcon
          dateFormat="dd/MM/yyyy"
          selected={date}
          filterDate={(date) => date.getDay() !== 0}
          minDate={new Date()}
          onChange={handleChange}
          isClearable
          onFocus={() => getAvailableDates()}
          highlightDates={highlightDates}
        /> */}
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)} -{convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>

        {/* <button
          onClick={() => searchSlots()}
          className="mt-3 bg-teal-400 text-white rounded-md p-2 hover:scale-105 transition duration-100 ease-in-out cursor-pointer "
        >
          Search slots
        </button>
        {showSlots && slots?.length > 0 ? (
          <div className="grid grid-cols-2  gap-4 mt-12 w-[300px] text-center text-white">
            {slots.map((slot, index) => (
              <div
                onClick={() => setSelectedTime({ slot })}
                className={`${selectedTime.slot === slot
                  ? "bg-[#3160e1] border-[1.5px] border-blacl p-3 rounded-lg hover-bg-[#f72585] hover:scale-105  transition duration-100 ease-in-out  cursor-pointer relative"
                  : "p-3 rounded-lg bg-[#d32f2f] hover-bg-[#f72585] hover:scale-105 transition duration-100 ease-in-out cursor-pointer relative"
                  }`}
              >
                {slot}
              </div>
            ))}
          </div>
        ) : null} */}
      </div>
      <button className="btn px-2 w-full rounded-md font-semibold">
        Book Appointment
      </button>
      {/* <PayButton
        docDetails={details}
        date={date}
        slot={selectedTime.slot}
        disabled={!slots}
      /> */}
    </div>
  );
};

export default SidePanel;
