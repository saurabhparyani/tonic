import { React, useState, useContext } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";
import { authContext } from "../context/AuthContext.jsx";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader.js";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    // console.log(BASE_URL)
    //console.log(formData)
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          role: result.role,
          token: result.token,
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-2xl md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-3">
          Hello, <span className="text-primaryColor">Welcome </span>
          back!
        </h3>
        <div className="text-slate-500 mb-2">
          You may use the following dummy credentials:
          <br />
          Email:{" "}
          <span className="underline underline-offset-2">dummy@gmail.com</span>
          <br />
          Password: <span className="text-red-500">dummy123</span>
        </div>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
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
              // className={`w-full pl-10 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16 px] loading-7 text-headingColor placeholder:text-textColor rounded-md ${errors.email ? "border-red-500" : ""
              //     }`}
              className={`w-full pl-10 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16 px] loading-7 text-headingColor placeholder:text-textColor rounded-md`}
              required
            />
            {/* {errors.email && (
                            <div className="text-sm text-red-500">{errors.email}</div>
                        )} */}
          </div>
          <div className="mb-5 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-500" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              // className={`w-full pl-10 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16 px] loading-7 text-headingColor placeholder:text-textColor rounded-md ${errors.email ? "border-red-500" : ""
              //     }`}
              className={`w-full pl-10 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16 px] loading-7 text-headingColor placeholder:text-textColor rounded-md`}
              required
            />
            {/* Icon for toggling password visibility */}
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {/* {errors.email && (
                            <div className="text-sm text-red-500">{errors.email}</div>
                        )} */}
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              {loading ? <HashLoader size={25} color="#fff" /> : " Login"}
            </button>
            {/* <OAuth /> */}

            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an Account?
              <Link
                to="/register"
                className="text-primaryColor font-medium ml-1"
              >
                Register
              </Link>
              {/* <br />
                            Are you a doctor?
                            <Link
                                to="/doctors/doctorSignup"
                                className="text-red-500 font-medium ml-1"
                            >
                                Register as a Doctor
                            </Link> */}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
