import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
// import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState(" ");
  // const user = JSON.parse(localStorage.getItem("PatientInfo"));
  // const reviewData = {
  //   rating,
  //   reviewText,
  //   user: user._id,
  //   doctor: details._id,
  // };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    //   if (rating === 0) {
    //     console.log("hASGhj");
    //     toast.error("Please provide a rating");
    //     return;
    //   }

    //   // Validate reviewText
    //   if (reviewText.trim() === "" || reviewText.length > 200) {
    //     toast.error("Review text must be between 1 and 200 characters");
    //     return;
    //   }

    //   try {
    //     const res = await fetch(`${BASE_URL}/reviews/createReview`, {
    //       method: "post",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ review: reviewData }),
    //     });

    //     let result = await res.json();

    //     if (!res.ok) {
    //       throw new Error(result.message);
    //     }

    //     setshowFeedbackForm(false);

    //     toast.success(result.message);
    //   } catch (error) {
    //     console.log(error);
    //     toast.error(result.message);
    //   }
  };
  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${index <= ((rating && hover) || hover)
                  ? "text-yellowColor animate-blink"
                  : "text-gray-400"
                  }bg-transperant border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback and suggestions
        </h3>
        <textarea
          className="border border-solid border-[#0066f34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md "
          rows="5"
          placeholder="write your comment"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn" onClick={handleSubmitReview}>
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
