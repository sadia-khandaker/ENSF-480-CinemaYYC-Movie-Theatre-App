// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import NavBar from "../navbar/NavBar";
// import KoolContainer from '../KoolContainer/KoolContainer';
// import { useUserAuth } from '../authentication/UserAuthContext';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import moment from 'moment';
//
// const theme = createTheme();
//
// export default function Register() {
//   const { user, signup } = useUserAuth();
//   const navigate = useNavigate();
//
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     signup(data.get('email'), data.get('password'), data.get('fullname'), data.get('creditcard'), data.get('cvc'), data.get('expirydate'));
//   };
//
//   useEffect(() => {
//     if (user) {
//       window.confirm("Thank you for signing up! You will be charged $20. Your membership expires on " + moment().add(365, 'days').format('MMMM Do YYYY') + ".");
//       navigate('/');
//     }
//   }, [user, navigate]);
//
//   return (
//     <ThemeProvider theme={theme}>
//       <KoolContainer>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Movie Theatre Register
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               variant="filled"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               className='bg-white rounded-lg'
//             />
//             <TextField
//               margin="normal"
//               variant="filled"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               className='bg-white rounded-lg'
//             />
//             <TextField
//               margin="normal"
//               variant="filled"
//               required
//               fullWidth
//               name="fullname"
//               label="Full Name"
//               id="fullname"
//               className='bg-white rounded-lg'
//             />
//             <TextField
//               margin="normal"
//               variant="filled"
//               required
//               fullWidth
//               inputProps={{ maxLength: 16 }}
//               name="creditcard"
//               label="Credit Card Number"
//               id="creditcard"
//               className='bg-white rounded-lg'
//             />
//             <TextField
//               margin="normal"
//               variant="filled"
//               required
//               fullWidth
//               inputProps={{ maxLength: 3 }}
//               name="cvc"
//               label="CVC"
//               id="cvc"
//               className='bg-white rounded-lg'
//             />
//             <TextField
//               margin="normal"
//               variant="filled"
//               required
//               fullWidth
//               inputProps={{ maxLength: 4 }}
//               name="expirydate"
//               label="Expiry (MMYY)"
//               id="expiry"
//               className='bg-white rounded-lg'
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Register
//             </Button>
//             <Grid container>
//               <Grid item>
//                 Note: A $20 membership fee applies for registering.
//               </Grid>
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   {"Already have an account? Sign In"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//       </KoolContainer>
//     </ThemeProvider>
//   );
// }

// import React, { useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEnvelope, FaLock, FaUser, FaCreditCard } from "react-icons/fa";
// import KoolContainer from "../KoolContainer/KoolContainer";
// import { FaRegCreditCard } from "react-icons/fa6";
//
// const Register = () => {
//     const navigate = useNavigate();
//     const { control, register, handleSubmit, formState: { errors } } = useForm();
//
//     const onSubmit = async (data) => {
//         toast.success("🎉 Registration successful! Your membership expires in one year.");
//         navigate("/");
//     };
//
//     useEffect(() => {
//         toast.info("✨ Welcome to premium membership!");
//     }, []);
//
//     return (
//
//         <div
//             className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-6">
//             <div className="w-full max-w-6xl bg-white bg-opacity-95 rounded-xl shadow-2xl p-10">
//                 {/* Header */}
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl font-extrabold text-blue-800">Create Your Account</h1>
//                     <p className="text-gray-500 mt-2 text-lg">Join now and unlock premium features for just
//                         $20/year.</p>
//                 </div>
//
//                 {/* Form */}
//                 <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//                     {/* Personal Information */}
//                     <div className="space-y-8">
//                         <h2 className="text-lg font-semibold text-blue-800 border-b border-gray-300 pb-2">Personal
//                             Information</h2>
//                         <InputWithIcon
//                             id="email"
//                             type="email"
//                             placeholder="Enter your email"
//                             label="Email Address"
//                             icon={<FaEnvelope className={"text-blue-500"}/>}
//                             register={register("email", {
//                                 required: "Email is required",
//                                 pattern: {
//                                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                     message: "Please enter a valid email address",
//                                 },
//                             })}
//                             error={errors.email}
//                         />
//                         <InputWithIcon
//                             id="password"
//                             type="password"
//                             placeholder="••••••••"
//                             label="Password"
//                             icon={<FaLock/>}
//                             register={register("password", {required: "Password is required"})}
//                             error={errors.password}
//                         />
//                         <InputWithIcon
//                             id="fullname"
//                             type="text"
//                             placeholder="John Doe"
//                             label="Full Name"
//                             icon={<FaUser/>}
//                             register={register("fullname", {required: "Full Name is required"})}
//                             error={errors.fullname}
//                         />
//                     </div>
//
//                     {/* Payment Information */}
//                     <div className="space-y-8">
//                         <h2 className="text-lg font-semibold text-blue-800 border-b border-gray-300 pb-2">Payment
//                             Information</h2>
//                         <InputWithIcon
//                             id="creditcard"
//                             type="text"
//                             placeholder="1234 5678 9012 3456"
//                             label="Credit Card Number"
//                             icon={<FaRegCreditCard/>}
//                             register={register("creditcard", {
//                                 required: "Credit Card Number is required",
//                                 maxLength: {value: 19, message: "Invalid Credit Card Number"},
//                             })}
//                             error={errors.creditcard}
//                         />
//                         <div className="grid grid-cols-2 gap-6">
//                             <InputWithIcon
//                                 id="cvc"
//                                 type="text"
//                                 placeholder="123"
//                                 label="CVC"
//                                 register={register("cvc", {
//                                     required: "CVC is required",
//                                     maxLength: {value: 3, message: "Invalid CVC"},
//                                 })}
//                                 error={errors.cvc}
//                             />
//                             <div>
//                                 <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600 mb-2">
//                                     Expiry Date (MM/YY)
//                                 </label>
//                                 <input
//                                     id="expiryDate"
//                                     type="text"
//                                     placeholder="MM/YY"
//                                     className="w-full px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     {...register("expiryDate", {
//                                         required: "Expiry Date is required",
//                                         pattern: {
//                                             value: /^(0[1-9]|1[0-2])\/\d{2}$/,
//                                             message: "Enter a valid Expiry Date (MM/YY)",
//                                         },
//                                     })}
//                                 />
//                                 {errors.expiryDate && (
//                                     <p className="text-sm text-red-500 mt-1">{errors.expiryDate.message}</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* Submit Button */}
//                     <div className="col-span-1 lg:col-span-2 flex justify-center">
//                         <button
//                             type="submit"
//                             className="w-full max-w-sm py-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-500 focus:ring-4 focus:ring-blue-300 transition-all font-semibold shadow-lg"
//                         >
//                             Register
//                         </button>
//                     </div>
//                 </form>
//
//                 {/* Footer */}
//                 <div className="text-center mt-10">
//                     <p className="text-gray-500 text-lg">
//                         Already have an account?{" "}
//                         <a href="/login" className="text-blue-600 font-medium hover:underline">
//                             Sign In
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//
//     );
// };
//
// const InputWithIcon = ({
//                            id,
//                            type,
//                            placeholder,
//                            label,
//                            icon,
//                            iconColor = "text-blue-500", // Default icon color
//                            register,
//                            error
//                        }) => (
//     <div>
//         {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>}
//         <div className="relative mt-2">
//             <input
//                 id={id}
//                 type={type}
//                 placeholder={placeholder}
//                 className="w-full px-4 py-2 pl-10 bg-opacity-80 bg-gray-50 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 {...register}
//             />
//             <div className={`absolute inset-y-0 left-0 flex items-center pl-3 ${iconColor}`}>
//                 {icon}
//             </div>
//         </div>
//         {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
//     </div>
// );
//
//
// export default Register;


// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEnvelope, FaLock, FaUser, FaCreditCard } from "react-icons/fa";
// import { FaRegCreditCard } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import dayjs from "dayjs";
//
// const Register = () => {
//     const navigate = useNavigate();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();
//
//     const onSubmit = async (data) => {
//         toast.success("🎉 Registration successful! Enjoy the show!");
//         navigate("/");
//     };
//
//     useEffect(() => {
//         toast.info("✨ Welcome to the Movie Theatre Booking App!");
//     }, []);
//
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6">
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full max-w-4xl bg-gray-900 bg-opacity-95 rounded-xl shadow-2xl p-10">
//                 {/* Header */}
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl font-extrabold text-white">Create Your Account</h1>
//                     <p className="text-gray-400 mt-2 text-lg">
//                         Join now to book your favorite movies and see showtimes in Calgary!
//                     </p>
//                 </div>
//
//                 {/* Form */}
//                 <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Personal Information */}
//                     <div className="space-y-8">
//                         <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
//                             Personal Information
//                         </h2>
//                         <InputWithIcon
//                             id="email"
//                             type="email"
//                             placeholder="Enter your email"
//                             label="Email Address"
//                             icon={<FaEnvelope className="text-yellow-500" />}
//                             register={register("email", {
//                                 required: "Email is required",
//                                 pattern: {
//                                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                     message: "Please enter a valid email address",
//                                 },
//                             })}
//                             error={errors.email}
//                         />
//                         <InputWithIcon
//                             id="password"
//                             type="password"
//                             placeholder="••••••••"
//                             label="Password"
//                             icon={<FaLock className="text-yellow-500" />}
//                             register={register("password", {
//                                 required: "Password is required",
//                                 minLength: {
//                                     value: 8,
//                                     message: "Password must be at least 8 characters long",
//                                 },
//                                 validate: {
//                                     hasNumber: value => /\d/.test(value) || "Password must include at least one number",
//                                     hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must include at least one special character",
//                                 },
//                             })}
//                             error={errors.password}
//                         />
//                         <InputWithIcon
//                             id="fullname"
//                             type="text"
//                             placeholder="John Doe"
//                             label="Full Name"
//                             icon={<FaUser className="text-yellow-500" />}
//                             register={register("fullname", {
//                                 required: "Full Name is required",
//                                 pattern: {
//                                     value: /^[a-zA-Z ]+$/,
//                                     message: "Full Name can only contain letters and spaces",
//                                 },
//                             })}
//                             error={errors.fullname}
//                         />
//                     </div>
//
//                     {/* Payment Information */}
//                     <div className="space-y-8">
//                         <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
//                             Payment Information
//                         </h2>
//                         <InputWithIcon
//                             id="creditcard"
//                             type="text"
//                             placeholder="1234 5678 9012 3456"
//                             label="Credit Card Number"
//                             icon={<FaRegCreditCard className="text-yellow-500" />}
//                             register={register("creditcard", {
//                                 required: "Credit Card Number is required",
//                                 pattern: {
//                                     value: /^\d{16}$/,
//                                     message: "Credit Card Number must be 16 digits",
//                                 },
//                             })}
//                             error={errors.creditcard}
//                         />
//                         <div className="grid grid-cols-2 gap-6">
//                             <InputWithIcon
//                                 id="cvc"
//                                 type="text"
//                                 placeholder="123"
//                                 label="CVC"
//                                 register={register("cvc", {
//                                     required: "CVC is required",
//                                     pattern: {
//                                         value: /^\d{3}$/,
//                                         message: "CVC must be exactly 3 digits",
//                                     },
//                                 })}
//                                 error={errors.cvc}
//                             />
//                             <div>
//                                 <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-400 mb-2">
//                                     Expiry Date (MM/YY)
//                                 </label>
//                                 <input
//                                     id="expiryDate"
//                                     type="text"
//                                     placeholder="MM/YY"
//                                     className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                                     {...register("expiryDate", {
//                                         required: "Expiry Date is required",
//                                         validate: value => {
//                                             const [month, year] = value.split("/").map(Number);
//                                             if (!month || !year || month < 1 || month > 12) {
//                                                 return "Enter a valid Expiry Date (MM/YY)";
//                                             }
//                                             const expiryDate = dayjs(`${year + 2000}-${month}-01`);
//                                             if (!expiryDate.isValid() || expiryDate.isBefore(dayjs())) {
//                                                 return "Card expiry date must be valid and in the future";
//                                             }
//                                             return true;
//                                         },
//                                     })}
//                                 />
//                                 {errors.expiryDate && (
//                                     <p className="text-sm text-red-500 mt-1">{errors.expiryDate.message}</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* Submit Button */}
//                     <div className="col-span-1 md:col-span-2 flex justify-center">
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             type="submit"
//                             className="w-full max-w-sm py-4 text-white bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full hover:from-yellow-600 hover:to-yellow-500 focus:ring-4 focus:ring-yellow-300 transition-all font-semibold shadow-lg"
//                         >
//                             Register
//                         </motion.button>
//                     </div>
//                 </form>
//
//                 {/* Footer */}
//                 <div className="text-center mt-10">
//                     <p className="text-gray-400 text-lg">
//                         Already have an account?{" "}
//                         <a href="/login" className="text-yellow-500 font-medium hover:underline">
//                             Sign In
//                         </a>
//                     </p>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };
//
// const InputWithIcon = ({ id, type, placeholder, label, icon, register, error }) => (
//     <div>
//         {label && (
//             <label htmlFor={id} className="block text-sm font-medium text-gray-400">
//                 {label}
//             </label>
//         )}
//         <div className="relative mt-2">
//             <input
//                 id={id}
//                 type={type}
//                 placeholder={placeholder}
//                 className="w-full px-4 py-2 pl-10 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
//                 {...register}
//             />
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 {icon}
//             </div>
//         </div>
//         {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
//     </div>
// );
//
// export default Register;


import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaLock, FaUser, FaCreditCard } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { motion } from "framer-motion";
import { addMonths, isBefore, parse, isValid } from "date-fns";

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        const expiryMessage = `Your membership will expire on ${expiryDate.toDateString()}`;

        toast.success(
            `🎉 Registration successful! Enjoy the show! \n✨ $20 Membership Active. ${expiryMessage}`
        );
        navigate("/");
    };

    useEffect(() => {
        toast.info("✨ Welcome to the Movie Theatre Booking App! Enjoy premium features for just $20/year!");
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A1627] via-[#0D1E35] to-[#081224] px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl bg-[#1B2638] bg-opacity-95 rounded-xl shadow-2xl p-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-[#F4D03F]">Create Your Account</h1>
                    <p className="text-[#F0EDE5] mt-2 text-lg">
                        Join now to book your favorite movies and experience the best cinema in Calgary for just $20/year!
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Personal Information */}
                    <div className="space-y-8">
                        <h2 className="text-xl font-semibold text-[#F4D03F] border-b border-gray-500 pb-2">
                            Personal Information
                        </h2>
                        <InputWithIcon
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            label="Email Address"
                            icon={<FaEnvelope className="text-[#F4D03F]" />}
                            register={register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Please enter a valid email address",
                                },
                            })}
                            error={errors.email}
                        />
                        <InputWithIcon
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            label="Password"
                            icon={<FaLock className="text-[#F4D03F]" />}
                            register={register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long",
                                },
                                validate: {
                                    hasNumber: value => /\d/.test(value) || "Password must include at least one number",
                                    hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must include at least one special character",
                                },
                            })}
                            error={errors.password}
                        />
                        <InputWithIcon
                            id="fullname"
                            type="text"
                            placeholder="John Doe"
                            label="Full Name"
                            icon={<FaUser className="text-[#F4D03F]" />}
                            register={register("fullname", {
                                required: "Full Name is required",
                                pattern: {
                                    value: /^[a-zA-Z ]+$/,
                                    message: "Full Name can only contain letters and spaces",
                                },
                            })}
                            error={errors.fullname}
                        />
                    </div>

                    {/* Payment Information */}
                    <div className="space-y-8">
                        <h2 className="text-xl font-semibold text-[#F4D03F] border-b border-gray-500 pb-2">
                            Payment Information
                        </h2>
                        <InputWithIcon
                            id="creditcard"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            label="Credit Card Number"
                            icon={<FaRegCreditCard className="text-[#F4D03F]" />}
                            register={register("creditcard", {
                                required: "Credit Card Number is required",
                                pattern: {
                                    value: /^\d{16}$/,
                                    message: "Credit Card Number must be 16 digits",
                                },
                            })}
                            error={errors.creditcard}
                        />
                        <div className="grid grid-cols-2 gap-6">
                            <InputWithIcon
                                id="cvc"
                                type="text"
                                placeholder="123"
                                label="CVC"
                                register={register("cvc", {
                                    required: "CVC is required",
                                    pattern: {
                                        value: /^\d{3}$/,
                                        message: "CVC must be exactly 3 digits",
                                    },
                                })}
                                error={errors.cvc}
                            />
                            <div>
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-[#F4D03F] mb-2">
                                    Expiry Date
                                </label>
                                <input
                                    id="expiryDate"
                                    type="month"
                                    className="w-full px-4 py-3 border border-gray-500 bg-[#1B2638] text-[#F0EDE5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                                    {...register("expiryDate", {
                                        required: "Expiry Date is required",
                                        validate: value => {
                                            const parsedDate = parse(value, "yyyy-MM", new Date());
                                            if (!isValid(parsedDate)) {
                                                return "Enter a valid Expiry Date";
                                            }
                                            const futureDate = addMonths(new Date(), 1);
                                            if (isBefore(parsedDate, futureDate)) {
                                                return "Card expiry date must be valid and in the future";
                                            }
                                            return true;
                                        },
                                    })}
                                />
                                {errors.expiryDate && (
                                    <p className="text-sm text-red-500 mt-1">{errors.expiryDate.message}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full max-w-sm py-4 text-white bg-gradient-to-r from-[#F4D03F] to-[#F5B041] rounded-full hover:from-[#F7DC6F] hover:to-[#F39C12] focus:ring-4 focus:ring-[#F4D03F] transition-all font-semibold shadow-lg"
                        >
                            Register
                        </motion.button>
                    </div>
                </form>

                {/* Footer */}
                <div className="text-center mt-10">
                    <p className="text-[#F0EDE5] text-lg">
                        Already have an account?{" "}
                        <a href="/login" className="text-[#F4D03F] font-medium hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const InputWithIcon = ({ id, type, placeholder, label, icon, register, error }) => (
    <div>
        {label && (
            <label htmlFor={id} className="block text-sm font-medium text-[#F4D03F]">
                {label}
            </label>
        )}
        <div className="relative mt-2">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2 pl-10 bg-[#1B2638] text-[#F0EDE5] border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F] transition"
                {...register}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                {icon}
            </div>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
);

export default Register;
