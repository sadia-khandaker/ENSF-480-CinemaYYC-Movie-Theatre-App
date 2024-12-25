// import { useState, useEffect } from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";
// import { useNavigate, Link } from "react-router-dom";
// import { useUserAuth } from "../authentication/UserAuthContext";
//
// export default function Example() {
//   const [openNav, setOpenNav] = useState(false);
//   const { user, logout } = useUserAuth();
//   const navigate = useNavigate();
//
//   const navigateLoginRegister = () => {
//     if (user === null){
//       navigate("/login");
//     } else {
//       navigate("/");
//     }
//   };
//
//   const logoutUser = () => {
//     logout();
//     navigate("/");
//   }
//
//   useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);
//
//   const navList = (
//       <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//         <Typography
//           as="li"
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-normal"
//         >
//           <Link to="/theatres" className="flex items-center">
//             Theatres
//           </Link>
//         </Typography>
//         <Typography
//           as="li"
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-normal"
//         >
//           <Link to="/cancelorder" className="flex items-center">
//             Cancel Order
//           </Link>
//         </Typography>
//       </ul>
//   );
//
//   return (
//     <Navbar
//       className="bg-zinc-700 bg-cover absolute py-4 px-4 lg:px-8 lg:py-10 text-white text-xl shadow-2xl"
//     >
//       <div className="container mx-auto flex items-center justify-end">
//         <img
//           src="../../../Images/MovieIcon.svg"
//           className="absolute top-4 left-10"
//           alt=""
//         />
//         <Typography
//           as="a"
//           href="/"
//           variant="small"
//           className="cursor-pointer py-1.5 font-normal mr-8"
//         >
//           <span>Home</span>
//         </Typography>
//         <div className="hidden lg:block">{navList}</div>
//         <Button
//           variant="gradient"
//           size="sm"
//           onClick={navigateLoginRegister}
//           className="hiddben lg:inline-lock"
//         >
//           <span>Login/Register</span>
//         </Button>
//         {user && (<Button
//           variant="gradient"
//           size="sm"
//           onClick={logoutUser}
//           className="hiddben lg:inline-lock"
//         >
//           <span>Logout</span>
//         </Button>)}
//       </div>
//     </Navbar>
//   );
// }

// import { useState, useEffect, useCallback } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useUserAuth } from "../authentication/UserAuthContext";
// import { LuTicketX, LuTheater, LuLogIn, LuLogOut } from "react-icons/lu";
// import { GoHome } from "react-icons/go";
//
// const Navbar = () => {
//     const [openNav, setOpenNav] = useState(false);
//     const { user, logout } = useUserAuth();
//     const navigate = useNavigate();
//
//     const navigateLogin = useCallback(() => navigate("/login"), [navigate]);
//     const navigateRegister = useCallback(() => navigate("/register"), [navigate]);
//     const logoutUser = useCallback(() => {
//         logout();
//         navigate("/");
//     }, [logout, navigate]);
//
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 960) setOpenNav(false);
//         };
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);
//
//     const navList = (
//         <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8 lg:items-center">
//             <NavItem to="/" icon={<GoHome />} label="Home" />
//             <NavItem to="/theatres" icon={<LuTheater />} label="Theatres" />
//             <NavItem to="/cancelorder" icon={<LuTicketX />} label="Cancel Order" />
//         </ul>
//     );
//
//     return (
//         <header className="bg-gray-900 text-white shadow-xl fixed w-full top-0 left-0 z-50">
//             <div className="container mx-auto flex items-center justify-between py-4 px-6">
//                 {/* Logo and Brand */}
//                 <div className="flex items-center">
//                     <img
//                         src="../../../Images/MovieIcon.svg"
//                         alt="logo"
//                         className="h-8 mr-4"
//                     />
//                     <Link
//                         to="/"
//                         className="text-2xl font-semibold hover:text-blue-400 transition-colors"
//                     >
//                         CinemaYYC
//                     </Link>
//                 </div>
//
//                 {/* Desktop Navbar */}
//                 <div className="hidden lg:flex space-x-6">{navList}</div>
//
//                 {/* Mobile Hamburger */}
//                 <div className="lg:hidden">
//                     <button
//                         onClick={() => setOpenNav(!openNav)}
//                         className="p-3 text-white bg-primary rounded-md transition-all transform hover:scale-110"
//                     >
//                         <span className="block w-6 h-1 bg-white mb-1"></span>
//                         <span className="block w-6 h-1 bg-white mb-1"></span>
//                         <span className="block w-6 h-1 bg-white"></span>
//                     </button>
//                 </div>
//
//                 {/* Login, Register, Logout */}
//                 <div className="hidden lg:flex space-x-4">
//                     {!user ? (
//                         <>
//                             <Button
//                                 onClick={navigateLogin}
//                                 className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white flex items-center"
//                                 icon={<LuLogIn />}
//                                 text="Login"
//                             />
//                             <Button
//                                 onClick={navigateRegister}
//                                 className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 flex items-center"
//                                 icon={<LuLogIn />}
//                                 text="Register"
//                             />
//                         </>
//                     ) : (
//                         <Button
//                             onClick={logoutUser}
//                             className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 flex items-center"
//                             icon={<LuLogOut />}
//                             text="Logout"
//                         />
//                     )}
//                 </div>
//             </div>
//
//             {/* Mobile Navbar */}
//             <div
//                 className={`lg:hidden ${openNav ? "block" : "hidden"} bg-gray-800 p-4`}
//             >
//                 {navList}
//             </div>
//         </header>
//     );
// };
//
// // Button Component
// const Button = ({ onClick, className, icon, text }) => (
//     <button
//         onClick={onClick}
//         className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg ${className}`}
//     >
//     <span className="flex items-center space-x-2">
//       {icon && <span className="text-lg">{icon}</span>}
//         <span>{text}</span>
//     </span>
//     </button>
// );
//
// // NavItem Component
// const NavItem = ({ to, icon, label }) => (
//     <li>
//         <Link
//             to={to}
//             className="flex items-center space-x-2 text-white font-medium hover:text-blue-400 transition-all"
//         >
//             <span className="text-xl">{icon}</span>
//             <span>{label}</span>
//         </Link>
//     </li>
// );
//
// export default Navbar;
//

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useUserAuth } from "../authentication/UserAuthContext";
import { LuTicketX, LuTheater, LuLogIn, LuLogOut } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { IoTicketOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);
    const { user, logout } = useUserAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { path: "/", label: "Home", icon: <GoHome /> },
        { path: "/theatres", label: "Theatres", icon: <LuTheater /> },
        { path: "/cancelorder", label: "Cancel Order", icon: <LuTicketX /> },
    ];

    const navigateTo = useCallback(
        (path) => {
            setOpenNav(false);
            navigate(path);
        },
        [navigate]
    );

    const logoutUser = useCallback(() => {
        logout();
        navigate("/");
    }, [logout, navigate]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#0A0F1F] via-[#101828] to-[#1A1F31] text-white shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-4"
                >
                    <IoTicketOutline className="text-4xl text-[#FFD700] animate-fade" />
                    <Link to="/" className="text-4xl font-bold flex space-x-2">
                        <span className="bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-transparent bg-clip-text">
                            Cinema
                        </span>
                        <span className="text-white">
                            YYC
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-10">
                    {navLinks.map(({ path, label, icon }) => (
                        <NavItem
                            key={path}
                            path={path}
                            label={label}
                            icon={icon}
                            isActive={location.pathname === path}
                            onClick={() => navigateTo(path)}
                        />
                    ))}
                </nav>

                {/* User Buttons */}
                <div className="hidden lg:flex space-x-6">
                    {!user ? (
                        <>
                            <Button
                                onClick={() => navigateTo("/login")}
                                className="border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0A0F1F]"
                                icon={<LuLogIn />}
                                text="Login"
                            />
                            <Button
                                onClick={() => navigateTo("/register")}
                                className="bg-gradient-to-r from-[#FFD700] to-[#FFB800] hover:from-[#FFDA70] hover:to-[#FFC400] text-[#0A0F1F]"
                                icon={<LuLogIn />}
                                text="Register"
                            />
                        </>
                    ) : (
                        <Button
                            onClick={logoutUser}
                            className="bg-gradient-to-r from-[#FFB800] to-[#FFC400] hover:from-[#FFD700] hover:to-[#FFB800] text-[#0A0F1F]"
                            icon={<LuLogOut />}
                            text="Logout"
                        />
                    )}
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setOpenNav((prev) => !prev)}
                        className="p-3 bg-[#101828] rounded-md text-white transition-transform hover:scale-105"
                    >
                        <span className="block w-6 h-1 bg-white mb-1"></span>
                        <span className="block w-6 h-1 bg-white mb-1"></span>
                        <span className="block w-6 h-1 bg-white"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {openNav && (
                <div className="lg:hidden bg-[#101828] p-6 space-y-5 shadow-lg">
                    {navLinks.map(({ path, label, icon }) => (
                        <NavItem
                            key={path}
                            path={path}
                            label={label}
                            icon={icon}
                            isActive={location.pathname === path}
                            onClick={() => navigateTo(path)}
                        />
                    ))}
                    {!user ? (
                        <>
                            <Button
                                onClick={() => navigateTo("/login")}
                                className="border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0A0F1F] w-full"
                                icon={<LuLogIn />}
                                text="Login"
                            />
                            <Button
                                onClick={() => navigateTo("/register")}
                                className="bg-gradient-to-r from-[#FFD700] to-[#FFB800] hover:from-[#FFDA70] hover:to-[#FFC400] text-[#0A0F1F] w-full"
                                icon={<LuLogIn />}
                                text="Register"
                            />
                        </>
                    ) : (
                        <Button
                            onClick={logoutUser}
                            className="bg-gradient-to-r from-[#FFB800] to-[#FFC400] hover:from-[#FFD700] hover:to-[#FFB800] text-[#0A0F1F] w-full"
                            icon={<LuLogOut />}
                            text="Logout"
                        />
                    )}
                </div>
            )}
        </header>
    );
};

// NavItem Component
const NavItem = ({ path, label, icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center space-x-3 text-lg font-medium ${
            isActive ? "text-[#FFD700]" : "text-white hover:text-[#FFD700]"
        } transition-all`}
    >
        <span className="text-xl">{icon}</span>
        <span>{label}</span>
    </button>
);

// Button Component
const Button = ({ onClick, className, icon, text }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full transition-transform ease-in-out duration-200 hover:scale-105 active:scale-95 shadow-md ${className}`}
    >
        <span className="flex items-center space-x-2">
            {icon && <span className="text-lg">{icon}</span>}
            <span className="text-lg font-medium">{text}</span>
        </span>
    </button>
);

export default NavBar;


