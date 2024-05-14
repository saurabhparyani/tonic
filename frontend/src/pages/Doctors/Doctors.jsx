import React from 'react'
import DoctorCard from "../../components/Doctors/DoctorCard"
import { doctors } from "./../../assets/data/doctor"
import Testimonial from '../../components/Testimonial/Testimonial'

const Doctors = () => {
    return (
        <>
            <section className="bg-[#fff9ea] mt-0">
                <div className="container text-center">
                    <h2 className="heading pb-5"> Find a Doctor</h2>
                    <div className="max-w-[570px]  mx-auto bg-[#8eb1e42e] rounded-md items-center  flex justify-between">
                        <input
                            type="search"
                            //   onChange={handleSearch}
                            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none placeholder:text-textColor "
                            placeholder="Search Doctor"
                        />
                        <button className="btn  mt-0  ml-4 rounded-[0px] rounded-r-md ">
                            Search
                        </button>

                        <div className="ml-1"></div>

                        {/* Sort Bar */}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  lg:grid-cols-4">
                        {doctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))}
                    </div>
                </div>
            </section>

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

        </>
    )
}

export default Doctors