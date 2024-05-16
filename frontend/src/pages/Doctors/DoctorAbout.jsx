import React from "react";
import { FormateDate } from "../../utils/FormateDate";

const DoctorAbout = ({ name, about, qualifications, experience }) => {
  return (
    <div>
      <h3 className="text-[20px]  leading-[30px] text-headingColor font-bold  flex items-center   gap-2">
        About
        <span className="tex[20px] text-irisBlueColor  font-bold text-[24px] leading-9">
          Dr. {name}
        </span>
      </h3>
      <p className="text__para">{about}</p>
      <div className="mt-12 ">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
            >
              <div>
                <span className="text-irisBlueColor text-[15px]  leading-6 font-semibold">
                  {FormateDate(item.startingDate)} -{" "}
                  {FormateDate(item.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor ">
                  {item.degree}
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor ">
                {item.university}
              </p>
            </li>
          ))}

          {/* ))} */}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2  gap-[30px] p-4 md:p-5">
          {experience?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {FormateDate(item.startingDate)}- {FormateDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {item.position}
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor ">
                {item.hospital}
              </p>
            </li>
          ))}

          {/* ))} */}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
