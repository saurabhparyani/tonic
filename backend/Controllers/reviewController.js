import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res
            .status(200)
            .json({ success: true, data: reviews, message: "Successful", data: reviews });
    } catch (error) {
        res.status(404).json({ success: false, message: "Not Found" });
    }
};

export const getSingleReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        res
            .status(200)
            .json({ success: true, data: review, message: "Successful" });
    } catch (error) {
        res.json({ success: false, message: "Not Found" });
    }
};

export const createReview = async (req, res) => {
    // Validate user input
    if (!req.body.doctor) req.body.doctor = req.params.doctorId;
    if (!req.body.user) req.body.user = req.userId;

    const newReview = await Review(req.body);
    try {
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id },
        });
        res
            .status(200)
            .json({ success: true, data: savedReview, message: "Review submitted", data: savedReview });
    } catch (error) {
        res.status(500).json({ success: false, message: err.message });
    }
};
// @desc     Update a specific review
// @route    PUT /api/v1/reviews/:id
// @access   Private
// export.updateReview = async (req, res) => {
//   try {
//     let review = await Review.findById(req.params.id);
//     if (!review) {
//       return res.status(404).json({
//         success: false,
//         message: "No review found",
//       });
//     }
//     review = await Review.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       success: true,
//       data: review,
//       message: "Review updated successfully",
//     });
//   } catch (error) {
//     res.json({ success: false, message: "Not Found" });
//   }
// };