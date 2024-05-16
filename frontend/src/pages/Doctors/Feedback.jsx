import React, { useEffect, useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { FormateDate } from "../../utils/FormateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
// import { BASE_URL, token } from "../../config";
// import dayjs from "dayjs";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
// import Modal from "react-modal";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
// import Pagination from "../../components/pagination/Pagination";
const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setshowFeedbackForm] = useState(false);
  //   const [reviews, setReview] = useState([]);
  //   const user = JSON.parse(localStorage.getItem("PatientInfo"));
  //   const [editModalOpen, setEditModalOpen] = useState(false); // State for edit modal
  //   const [reviewText, setEditedReviewText] = useState(""); // State for edited review text
  //   const [editingReviewId, setEditingReviewId] = useState(null);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [postPerPage, setPostPerPage] = useState(3);
  //   const [rating, setRating] = useState(0);
  //   const [hover, setHover] = useState(0);

  //   console.log(rating, "rating in feedback form");

  //   useEffect(() => {
  //     const fetchReviews = async (req, res) => {
  //       try {
  //         const res = await fetch(
  //           `${BASE_URL}/reviews/getDoctorReviews/${details._id}`,
  //           {
  //             method: "get",
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         const result = await res.json();
  //         setReview(result.data);

  //         console.log(result, "result from feedback");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchReviews();
  //   }, []);
  //   // Function to open edit modal and populate with review text
  //   const handleEditReview = (reviewId, reviewText, rating) => {
  //     setEditingReviewId(reviewId);
  //     setEditedReviewText(reviewText);
  //     setRating(rating);
  //     setEditModalOpen(true);
  //   };

  //   // Function to handle review text change in edit modal
  //   const handleReviewTextChange = (e) => {
  //     setEditedReviewText(e.target.value);
  //   };

  //   const handleSubmitEdit = async () => {
  //     try {
  //       const res = await fetch(
  //         `${BASE_URL}/reviews/editReview/${editingReviewId}`,
  //         {
  //           method: "put",
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             "Content-Type": "application/json",
  //           },

  //           body: JSON.stringify({ rating, reviewText }),
  //         }
  //       );

  //       const result = await res.json();

  //       if (res.ok) {
  //         setEditModalOpen(false);
  //         // Update the local reviews state with the updated review
  //         const updatedReviews = reviews.map((review) =>
  //           review._id === editingReviewId
  //             ? { ...review, reviewText, rating }
  //             : review
  //         );
  //         setReview(updatedReviews);
  //       } else {
  //         toast.error(result.message);
  //       }
  //       fetchReviews();
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };

  //   {
  //     /***Deleting Review */
  //   }
  //   const handleDeleteReview = async (reviewId) => {
  //     const result = await Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     });
  //     if (result.isConfirmed) {
  //       try {
  //         const res = await fetch(
  //           `${BASE_URL}/reviews/deleteReview/${reviewId}`,
  //           {
  //             method: "delete",
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );

  //         const result = await res.json();

  //         fetchReviews();

  //         if (res.ok) {
  //           toast.success(result.message);
  //         }
  //       } catch (error) {
  //         console.log(error, "error");
  //       }
  //     }
  //   };
  //   const lastPostIndex = currentPage * postPerPage;
  //   const firstPostIndex = lastPostIndex - postPerPage;
  //   const currentReviews = reviews.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div>
        <div className="mb-[50px ]">
          <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
            All Reviews ({totalRating})
          </h4>

          {reviews?.map((review, index) => (
            <div key={index} className="flex justify-between gap-10 mb-[30px]">
              <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full ">
                  <img className="w-full" src={review?.user?.photo} alt="" />
                </figure>

                <div>
                  <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                    {review?.user?.name}
                  </h5>
                  <p className="text-[14px] leading-6 text-textColor ">
                    {FormateDate(review?.createdAt)}
                  </p>
                  <p className="text_para mt-3 font-medium text-[15px] ">
                    {review.reviewText}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(review?.rating).keys()].map((_, index) => (
                  <AiFillStar key={index} color="#FFAD01" />
                ))}

                {/* {user.id === el.user.id && (
                  <div
                    onClick={() => handleEditReview(el._id, el.reviewText)}
                    className="flex justify-center items-center mt-7 text-[19px] hover:scale-125 hover:text-red-500 transition ease-in-out"
                  >
                    <FaEdit />
                  </div>
                )}

                {user.id === el.user.id && (
                  <div
                    onClick={() => handleDeleteReview(el._id)}
                    className="flex justify-center items-center mt-7 text-[19px] hover:scale-125 hover:text-red-500 transition ease-in-out"
                  >
                    <MdDeleteSweep />
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>

        {!showFeedbackForm && (
          <div className="text-center">
            <button className="btn" onClick={() => setshowFeedbackForm(true)}>
              Give Feedback
            </button>
          </div>
        )}

        {showFeedbackForm && (
          <FeedbackForm
          // details={details}
          // setshowFeedbackForm={setshowFeedbackForm}
          />
        )}
        {/* Edit Review Modal */}
        {/* <Modal
          isOpen={editModalOpen}
          onRequestClose={() => setEditModalOpen(false)}
          className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          overlayClassName="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Edit Review</h2>
            <div className="flex items-center mb-4">
              <h3 className="text-headingColor text-[16px] leading-6 font-semibold mr-4">
                Rate your experience:
              </h3>
              {[...Array(5).keys()].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    key={ratingValue}
                    type="button"
                    className={`${
                      ratingValue <= ((rating && hover) || hover)
                        ? "text-yellowColor animate-blink"
                        : "text-gray-400"
                    } bg-transperant border-none outline-none text-[22px] cursor-pointer`}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
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

            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={reviewText}
              onChange={handleReviewTextChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmitEdit}
            >
              Submit
            </button>
          </div>
        </Modal>
        <div className="mt-20 flex justify-start">
          <Pagination
            postPerPage={postPerPage}
            totalPosts={reviews.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div> */}
      </div>
    </>
  );
};

export default Feedback;
