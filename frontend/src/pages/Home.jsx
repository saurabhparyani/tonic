import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import heroImg01 from "../assets/images/Doctor1.png";
import heroImg02 from "../assets/images/glob.jpg";
import heroImg03 from "../assets/images/glob3.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/doctor-img02.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
// import ShuffleHero from "../components/Slider/ShuffleHero";
import ServiceList from "../components/Services/ServiceList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import DoctorList from "../components/Doctors/DoctorList";
// import { Carousel } from "@material-tailwind/react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
    return (
        <>
            <section className="hero__section">
                {/* ====== hero section ====== */}
                <section className='pt-[60px] 2xl:h-[800px]'>
                    <div className='container'>
                        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                            {/* ======= hero content ======== */}
                            <div>
                                <div className='lg:w-[570px]'>
                                    <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                                        Quality Healthcare Made Simple.
                                    </h1>
                                    <p className='text__para'>
                                        Connect with trusted doctors and build a lasting relationship for your ongoing health needs. Get same-day appointments without leaving the comfort of your home.
                                    </p>
                                    <button className='btn font-[600]'>Request an Appointment</button>
                                </div>

                                {/* ===== hero counter ===== */}
                                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                                    <div>
                                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                            30+
                                        </h2>
                                        <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-140x] "></span>
                                        <p className="text__para">Years of Experience</p>
                                    </div>
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                            15+
                                        </h2>
                                        <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-140x] "></span>
                                        <p className="text__para">Clinic locations</p>
                                    </div>
                                    <div>
                                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                            100%
                                        </h2>
                                        <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-140x] "></span>
                                        <p className="text__para">Patient Satisfication</p>
                                    </div>
                                </div>

                            </div>
                            {/* ======= hero content ======== */}
                            <div className="flex justify-end ">
                                <div>
                                    <img
                                        className="width-full  h-full object-cover"
                                        src={heroImg03}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        className="width-full   object-cover"
                                        src={heroImg02}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* =========== hero section end ========== */}

                <section>
                    <div className="container">
                        <div className="lg:w-[470px] mx-auto ">
                            <h2 className="heading text-center">
                                Compassionate Care, Tailored to You
                            </h2>
                            <p className="text__para text-center">
                                Experience the benefits of our compassionate care: faster appointments, personalized treatment plans, and ongoing support.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon01} alt="" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                        Our Doctors
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Meet the team dedicated to your health and wellbeing.
                                    </p>
                                    <Link
                                        to="/doctors"
                                        className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex  items-center justify-center group  hover:bg-primaryColor hover:border-none"
                                    >
                                        <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                                    </Link>
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon02} alt="" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-heaadingColor font-[700] text-center">
                                        Locations and Directions
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Quality care close to home.
                                        Find a location near you.
                                    </p>
                                    <Link
                                        to="/doctors"
                                        className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex  items-center justify-center group  hover:bg-primaryColor hover:border-none"
                                    >
                                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="py-[30px] px-5">
                                <div className="flex items-center justify-center">
                                    <img src={icon03} alt="" />
                                </div>
                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-heaadingColor font-[700] text-center">
                                        Appointments
                                    </h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        Skip the waiting room. Book your appointment online.
                                    </p>
                                    <Link
                                        to="/doctors"
                                        className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex  items-center justify-center group  hover:bg-primaryColor hover:border-none"
                                    >
                                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <About />

                {/* ========== services section start ========== */}
                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center"> Our Medical Services</h2>
                            <p className="text__para text-center">
                                Tonic offers a comprehensive range of medical services designed to meet your diverse healthcare needs. Our expert teams provide personalized care across a wide variety of specialties.
                            </p>
                        </div>
                        <ServiceList />
                    </div>
                </section>
                {/* ========== services section end   ==========*/}

                {/* ========== feature section start ========== */}
                <section>
                    <div className="container">
                        <div className="flex items-center justify-between flex-col lg:flex-row ">
                            {/*======Feature Content========= */}
                            <div className="xl:w-[670px]">
                                <h2 className="heading">
                                    24/7 Virtual Care <br />
                                    Get Treatment Whenever You Need It
                                </h2>
                                <ul className="pl-4">
                                    <li className="text__para">
                                        1. Search for Your Doctor and Schedule.
                                    </li>
                                    <li className="text__para">
                                        2. Browse Available Doctors and <br />
                                        use the Online Scheduling Tool to select an appointment time.
                                    </li>
                                    <li className="text__para">
                                        3. Book Your Appointment Instantly.
                                    </li>
                                </ul>

                            </div>
                            {/** ==========feature image=============== */}
                            <div className="relative z-10 xl:w-[770px] flex justify-end  mt-[50px] lg:mt-0">
                                <img src={featureImg} className="w-3/4" alt="" />
                                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3  lg:pt-4 lg:px-4  lg:pb-[26px] rounded-[10px]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-[6px] lg:gap-3 ">
                                            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400] ">
                                                Tue, 24th February
                                            </p>
                                            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400] ">
                                                9:00AM
                                            </p>
                                        </div>
                                        <span className="w-5 h-5 lg:w-[35px] lg:h-[34px] flex items-center  justify-center  bg-yellowColor rounded py-1 ml-2 px-[6px]  lg:px-[9px] ">
                                            <img src={videoIcon} />
                                        </span>
                                    </div>

                                    <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3 ]  py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor  font-[500] mt-2 lg:mt-4 rounded-full">
                                        Online consultation - Tonic
                                    </div>

                                    <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                        <img src={avatarIcon} />
                                        <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                                            {" "}
                                            Wayne Collins
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========== feature section end ========== */}

                {/* ========== doctor section start ========== */}
                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center">Find the Right Doctor for You</h2>
                            <p className="text__para text-center">
                                Discover our team of experienced physicians passionate about delivering personalized healthcare solutions.
                            </p>
                        </div>
                        <DoctorList />
                    </div>
                </section>
                {/* ========== doctor section end ========== */}

                {/* ========== faq section start ========== */}
                <section>
                    <div className="container">
                        <div className="flex justify-between gap-[50px] lg:gap-0">
                            <div className="w-1/2 hidden md:block ">
                                <img src={faqImg} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="heading">
                                    Most questions by our beloved patients
                                </h2>
                                <FaqList />
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========== faq section end ========== */}

                {/*===============Testimonial section start================ */}

                <section>
                    <div className="container">
                        <div className="xl:w-[470px] mx-auto">
                            <h2 className="heading text-center">See the Difference We Make</h2>
                            <p className="text__para text-center">
                                Hear directly from our patients about how our exceptional care improved their health and well-being.
                            </p>
                        </div>
                        <Testimonial />
                    </div>
                </section>
                {/*===============Testimonia section end================ */}

            </section>
        </>
    )
}

export default Home