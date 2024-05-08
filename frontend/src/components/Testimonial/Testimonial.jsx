import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
import patientav1 from '../../assets/images/patientav1.png'
import patientav2 from '../../assets/images/patientav2.png'
import patientav3 from '../../assets/images/patientav3.png'
import patientav4 from '../../assets/images/patientav4.png'
import patientav5 from '../../assets/images/patientav5.png'
import patientav6 from '../../assets/images/patientav6.png'


const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex item-center gap-[13px]">
              <img className="h-14 w-16 rounded-md" src={patientav1} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Sameul Thompson
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />

                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I'm a busy professional, who relies heavily on efficient healthcare services. Tonic has been a game-changer for me. Booking appointments with Dr. William Evans, a neurologist, was seamless and quick. The platform's user-friendly interface made it easy for me to find a suitable time slot that fit my hectic schedule. However, I would appreciate more options for specialist doctors in my area."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex item-center gap-[13px]">
              <img className="h-14 w-16 rounded-md" src={patientav2} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Priya Patel
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "As a working woman juggling multiple responsibilities, time is of the essence for me. Tonic has been a lifesaver when it comes to managing my health appointments. Booking a surgery consultation with Dr. Amelia Rose was surprisingly easy and stress-free. However, I noticed that there's room for improvement in terms of the app's notification system. Sometimes, appointment reminders don't come through on time."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex item-center gap-[13px]">
              <img className="h-14 w-16 rounded-md" src={patientav5} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Michael Pete
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have been using Tonic for a while now, and I can confidently say it's one of the best healthcare booking apps out there. Recently, I needed to consult with a dermatologist, and Tonic connected me with Dr. Claire Dupont. The whole process, from booking the appointment to the actual consultation, was smooth and efficient. I highly recommend Tonic to anyone looking for convenient healthcare services."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex item-center gap-[13px]">
              <img className="h-14 w-16 rounded-md" src={patientav3} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Margaret Hamilton
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "As a senior citizen, I value simplicity and reliability when it comes to healthcare services. Tonic has exceeded my expectations in this regard. Booking appointments with specialists like Dr. William Evans has never been easier. The platform's intuitive design caters to users of all ages. My only suggestion for improvement would be to include more information about doctors' credentials and patient reviews on the app."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
