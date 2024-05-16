import express from "express";
import {
    updateDoctor,
    deleteDoctor,
    getAllDoctors,
    getSingleDoctor,
    getDoctorProfile
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";
const router = express.Router();
router.use("/:doctorId/reviews", reviewRouter);
router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["admin", "doctor"]), deleteDoctor);
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);
export default router;