import signupImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import uploadImageCloudinary from "../utils/uploadCloudinary";
// import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
// import HashLoader from "react-spinners/HashLoader";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const Signup = () => {
    //   const [selectedFile, setSelectedFile] = useState(null);
    //   const [previewURL, setPreviewURL] = useState("");
    //   const [validateError, setValidateError] = useState("");
    //   const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        password: "",
        gender: "",
        role: "patient"
    });

    //   const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //     if(e.target.value==="doctor"){
    //       navigate('/doctors/doctorSignup')
    //     }
    //   };

    //   const validateForm = () => {
    //     const { name, email, number, password } = formData;

    //     if (!name || !email || !number || !password) {
    //       setValidateError("All field are required");
    //       return false;
    //     }

    //     //validate name
    //     if (!/^[a-zA-Z\s]{1,25}$/.test(name)) {
    //       setValidateError(
    //         "Name must not contain any number and have a maximum of 25 characters"
    //       );
    //       return false;
    //     }

    //     //validate email
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //       setValidateError("Invalid email address");
    //       return false;
    //     }

    //     //validate phone numner
    //     if (!/^\d{10}$/.test(number)) {
    //       setValidateError(
    //         "phone number  must be 10 digits without any characters or special characters"
    //       );
    //       return false;
    //     }

    //     //validate Password

    //     if (
    //       !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
    //         password
    //       )
    //     ) {
    //       setValidateError(
    //         "Password must contain one uppercase letter,one lowercase,one number ,and one special character,with a minimum length of 6"
    //       );
    //       return false;
    //     }

    //     setValidateError("");
    //     return true;
    //   };

    const submitHandler = async (event) => {
        event.preventDefault();
        //     if (!validateForm()) {
        //       return;
        //     }
        //     setLoading(true);

        //     try {
        //       const res = await fetch(`${BASE_URL}/auth/register`, {
        //         method: "post",
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(formData),
        //       });

        //       const { message, userData } = await res.json();

        //       if (!res.ok) {
        //         throw new Error(message);
        //       }

        //       setLoading(false);
        //       toast.success(message);
        //       console.log(userData, "responseed");
        //       localStorage.setItem("userData", JSON.stringify(userData));
        //       navigate(`/verify-otp?email=${formData.email}`);
        //     } catch (error) {
        //       toast.error(error.message);
        //       setLoading(false);
        //     }
    };

    return (
        <section className="px-5 xl:px-0">
            <div className="max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/**============img box================ */}
                    <div className="hidden lg:block bg-primaryColor rounded-l-lg">
                        <figure className="rounded-l-lg">
                            <img src={signupImg} alt="" className="w-full rounded-l-lg" />
                        </figure>
                    </div>

                    {/* ===============signup Form=========== */}
                    <div className="rounded-l-lg  lg:pl-16  py-10">
                        <h3 className="text-headingColor text-2xl leading-9 font-bold mb-6">
                            Create an <span className="text-primaryColor">account</span>
                        </h3>
                        <form onSubmit={submitHandler}>
                            <div className="mb-5 relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaUser className="text-gray-500" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full pr-4 pl-10  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16 px] loading-7 text-headingColor placeholder:text-textColor rounded-md "
                                />
                            </div>
                            <div className="mb-5 relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaEnvelope className="text-gray-500" />
                                </span>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pr-4 pl-10  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16 px] loading-7 text-headingColor placeholder:text-textColor rounded-md "
                                />
                            </div>
                            <div className="mb-5 relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaPhone className="text-gray-500" />
                                </span>
                                <input
                                    type="number"
                                    placeholder="Enter phone Number"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    className="w-full pr-4 pl-10  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16 px] loading-7 text-headingColor placeholder:text-textColor rounded-md "
                                />
                            </div>
                            <div className="mb-5 relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <FaLock className="text-gray-500" />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pr-4 pl-10 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16 px] loading-7 text-headingColor placeholder:text-textColor rounded-md "
                                />
                                {/* Icon for toggling password visibility */}
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-3"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>

                            <div className=" flex mb-5 items-center justify-between">
                                <label
                                    // htmlFor=" "
                                    className="text-headingColor  font-semibold text-[16px] leading-7"
                                >
                                    Are you a :
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                                    >
                                        <option value="patient">Patient</option>
                                        <option value="doctor">Doctor </option>
                                    </select>
                                </label>

                                <label className="text-textColor  font-semibold text-[16px] leading-7">
                                    Gender :
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male </option>
                                        <option value="female">Female </option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div>
                            <div className="mt-7">
                                <button
                                    // disabled={loading && true}
                                    type="submit"
                                    className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                                >
                                    {/* {loading ? (
                                            <HashLoader size={35} color="#ffffff" />
                                        ) : (
                                            "Signup"
                                        )} */}
                                    Sign Up
                                </button>

                                <p className="mt-5 text-textColor text-center">
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="text-primaryColor font-medium ml-1"
                                    >
                                        Login
                                    </Link>
                                    {/* {validateError && (
                                            <p className="text-red-500 font-light mt-4">
                                                {validateError}
                                            </p>
                                        )} */}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;