import { React, useState } from "react"
import doctorImg from "../../assets/images/doctor3.jpg"
import starIcon from "../../assets/images/Star.png"
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {

    const [tab, setTab] = useState("about");

    return (
        <>
            <section className={`max-w-[1170px] px-5 mx-auto  `}>
                <div className="grid md:grid-cols-3 gap-[50px]">
                    <div className="md:col-span-2">
                        <div className="flex flex-col items-center gap-5 md:flex-row ">
                            <figure className="max-w-[300px] max-h-[200px]  ">
                                <img
                                    src={doctorImg}
                                    alt=""
                                    className="w-full rounded-lg "
                                />
                            </figure>
                            <div className="mt-28">
                                <span
                                    className="bg-[#CCF0F3] text-irisBlueColor py-1 lg:py-2 lg:px-6
                     text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded "
                                >
                                    Surgeon
                                </span>
                                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold ">
                                    Dr. Amelia Rose
                                </h3>
                                <div className="flex items-center gap-[6px] ">
                                    <span
                                        className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold 
                        text-headingColor  "
                                    >
                                        <img src={starIcon} alt="" />
                                        {/* <LiaCertificateSolid className="w-12 h-8 bg-blue-500" /> */}
                                        4.8
                                    </span>

                                    <span
                                        className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold 
                      text-textColor "
                                    >
                                        (272)
                                    </span>
                                </div>
                                {/* <div className="flex items-center gap-[6px] ">
                                    <div className="flex gap-1 mt-3 h-6">
                                        {[...Array(details.reviews).keys()].map((_, index) => (
                                            <AiFillStar
                                                key={index}
                                                className="text-2xl text-yellow-500"
                                            />
                                        ))}
                                    </div>
                                    <span
                                        className="text-[14px] leading-8 mt-3 lg:text-[16px] lg:leading-7 font-semibold 
                      text-textColor "
                                    >
                                        (
                                        {parseFloat(details.averageRating).toFixed(2)})
                                    </span>
                                </div> */}

                                <p className=" text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]  ">
                                    some description here
                                </p>
                            </div>
                        </div>

                        <div className="mt-[60px]  md:mt-[150px]  border-b border-solid border-[#0066ff43]  ">
                            <button
                                onClick={() => setTab("about")}
                                className={` ${tab === "about" &&
                                    "border-b border-solid border-primaryColor"
                                    } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}
                            >
                                About
                            </button>
                            <button
                                onClick={() => setTab("feedBack")}
                                className={` ${tab === "feedBack" &&
                                    "border-b border-solid border-primaryColor"
                                    } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}
                            >
                                Feedback
                            </button>
                        </div>

                        <div className="mt-[60px]">
                            {tab === "about" && <DoctorAbout />}
                            {tab === "feedBack" && <Feedback />}
                        </div>
                    </div>
                    <div>
                        <SidePanel />
                    </div>

                </div>
            </section >
        </>
    )
}

export default DoctorDetails