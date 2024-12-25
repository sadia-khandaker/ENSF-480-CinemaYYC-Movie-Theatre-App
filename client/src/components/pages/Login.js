import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    }),
    onSubmit,
  });

  return (
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...formik.getFieldProps("email")}
              className={`w-full px-4 py-3 rounded-lg bg-[#25334A] text-white placeholder-gray-400 border ${
                  formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-[#2F3E55]"
              } focus:outline-none focus:ring-2 focus:ring-[#FFD700]`}
          />
          {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...formik.getFieldProps("password")}
              className={`w-full px-4 py-3 rounded-lg bg-[#25334A] text-white placeholder-gray-400 border ${
                  formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-[#2F3E55]"
              } focus:outline-none focus:ring-2 focus:ring-[#FFD700]`}
          />
          {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFC400] text-[#0A1128] font-bold shadow-lg hover:from-[#FFC400] hover:to-[#FFD700] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
        >
          Sign In
        </button>
      </form>
  );
};

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Logged in with:", values);
    navigate("/theatres");
  };

  return (
      <div
          className="min-h-screen bg-gradient-to-br from-[#0A0F1F] via-[#1C2946] to-[#0E1628] flex items-center justify-center px-4"
      >
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-md bg-[#1B263B] bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8"
        >
            <div className="text-center mb-6">
                <FaUserCircle className="text-6xl text-[#FFD700] mx-auto animate-pulse"/>
                <h1 className="text-4xl font-bold text-white mt-4">Sign In</h1>
                <p className="text-gray-300 mt-2">Log in to explore movies, showtimes, and book tickets!</p>

            </div>

            <LoginForm onSubmit={handleSubmit}/>

            <div className="text-center mt-6">
                <p className="text-sm text-gray-400">
              Don’t have an account?{' '}
              <a href="/register" className="text-[#FFD700] font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </motion.div>
      </div>
  );
};

export default Login;
