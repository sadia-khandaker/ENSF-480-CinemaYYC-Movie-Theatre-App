//
// import { React, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import NavBar from "../navbar/NavBar";
// import { useUserAuth } from "../authentication/UserAuthContext";
// import KoolContainer from "../KoolContainer/KoolContainer";
// import { Button , Typography } from "@mui/material";
//
//
// const Home = () => {
//   const { user } = useUserAuth();
//   const isLoggedIn = user == null ? false : true;
//   // const { tickets } = getTickets();
//
//   // const ticketList = tickets.map((ticket) => {
//   //   return (
//   //     <div className="p-5">
//   //       <h2
//   //         className="text-2xl"
//   //       >
//   //         {ticket}
//   //       </h2>
//   //     </div>
//   //   );
//   // });
//
//   return (
//     <>
//       <KoolContainer>
//         <div className="flex flex-col items-center justify-center h-full">
//           {isLoggedIn ? (
//             <div>
//               <h1 className="text-6xl">Welcome back to KoolTickets, {user.fullname}</h1>
//               {/* {ticketList} */}
//             </div>
//           ) : (
//             <div>
//               <h1 className="text-6xl">Welcome to KoolTickets!</h1>
//               <h1 className="text-4xl mt-8">Please <Link to="/login" className="underline">Sign in</Link> or continue as guest from the <Link to="/theatres" className="underline">theatre tab</Link></h1> </div>
//           )}
//         </div>
//       </KoolContainer>
//     </>
//   );
// };
//
// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../authentication/UserAuthContext";
import "tailwindcss/tailwind.css";

const movies = [
    {
        title: "Dune: Part Two",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTai18V_16GsZmEb_nJRh6yX3B_oRBKpz7tc6vGdChcErhlywgdmW9HOFaOBuHsUEuSUgLxKw",
        rating: "PG-13",
        duration: "2h 45m",
        synopsis: "Paul Atreides unites with the Fremen to seek revenge against his enemies.",
        ratingColor: "bg-yellow-500",  // PG-13 typically uses a yellow color
    },
    {
        title: "Oppenheimer",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlbnvo6cBTWi-aLAHChxPCNfCEDDqPWEejYpDvlA3ctbAmOJfVMCmflmEktyLC5wK69EGA",
        rating: "R",
        duration: "3h 0m",
        synopsis: "The intense story of J. Robert Oppenheimer, the creator of the atomic bomb.",
        ratingColor: "bg-red-600",  // R-rating is often associated with red
    },
    {
        title: "Spider-Man: Across the Spider-Verse",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi268PxgDuBiTk1zSJuVd_QFiALwpPu2FVldO5y-GuTOQNe2epArg5BL3UWqHIfIGENpML",
        rating: "PG",
        duration: "2h 20m",
        synopsis: "Miles Morales and Gwen Stacy team up to traverse the multiverse.",
        ratingColor: "bg-green-500",  // PG-rating often uses green
    },
    {
        title: "The Marvels",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJH4VahrbHCL-IwZ-rOAj0svb01wX2HNfRuJx0qjEwuqYenOLZhoTi0l_-2Mub7M5dyyN5zA",
        rating: "PG-13",
        duration: "2h 10m",
        synopsis: "Captain Marvel teams up with other heroes to stop a cosmic threat.",
        ratingColor: "bg-yellow-500",
    },
    {
        title: "Mufasa: The Lion King",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbh7aQXD4y8HoajnrE1O2XYZk3ybxTqk61UDg1_AMtQzNUEb7",
        rating: "G",
        duration: "1h 30m",
        synopsis: "A cub lost in the wild meets Taka, a lion heir, setting off an epic adventure.",
        ratingColor: "bg-blue-500",  // G-rating usually gets blue to represent general audience
    },
    {
        title: "Barbie",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEsRX4rvaUjN6bxmAR9bT6qlWkBFVJfgMLan-evEeWBLrh4KFqljv4ZUagBVmvCZVzN1jGbQ",
        rating: "G",
        duration: "1h 54m",
        synopsis: "Barbie and Ken explore the real world and discover its highs and lows.",
        ratingColor: "bg-blue-500",
    },
    {
        title: "Sonic the Hedgehog 3",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdA7OUIMu3iBYprS-xB3hdcE_YQ1B_S4FtMHg2VQ_wRC2uleQu",
        rating: "PG",
        duration: "1h 49m",
        synopsis: "Sonic, Knuckles, and Tails team up against Shadow, a new powerful adversary.",
        ratingColor: "bg-green-500",
    },
    {
        title: "Guardians of the Galaxy Vol. 3",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZZQUXEqSc5uDbkMsKALdbJHiKjZ9Rvb_dgyYeX9Wv0eeXtblAuA5H7_S78oe76HEs_naRqA",
        rating: "PG-13",
        duration: "2h 30m",
        synopsis: "The Guardians continue their mission in the cosmos, facing their toughest challenge yet.",
        ratingColor: "bg-yellow-500",
    },

];


const Home = () => {
    const { user } = useUserAuth();
    const isLoggedIn = user != null;

    return (
        <div className="bg-gradient-to-br from-black via-navy-900 to-gray-800 text-white min-h-screen">
            {/* Navbar */}
            <header className="bg-black bg-opacity-95 sticky top-0 z-10 py-4">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-4xl font-extrabold text-gold-500">
                        Cinema<span className="text-white">YYC</span>
                    </h1>
                    <nav>
                        {isLoggedIn ? (
                            <span className="text-gray-300">
                Hi, <span className="font-bold">{user.fullname}</span>
              </span>
                        ) : (
                            <Link
                                to="/login"
                                className="text-gold-500 underline hover:text-yellow-300"
                            >
                                Sign In
                            </Link>
                        )}
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative text-center py-20 bg-gradient-to-br from-gray-900 to-black">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">
                    Trending Movies
                </h1>
                <p className="mt-4 text-lg text-gray-300 drop-shadow-md">
                    Discover the most popular movies and book your tickets now.
                </p>
            </section>

            {/* Movie Listings */}
            <section className="py-12 max-w-7xl mx-auto px-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-gray-800 to-black rounded-xl shadow-lg hover:scale-105 transform transition overflow-hidden"
                        >
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gold-400 mb-2">{movie.title}</h3>
                                <p className="text-gray-300 text-sm mb-4">{movie.synopsis}</p>
                                <div className="flex items-center justify-between">
                  <span
                      className={`px-3 py-1 rounded-lg text-sm font-bold text-white ${movie.ratingColor}`}
                  >
                    {movie.rating}
                  </span>
                                    <span className="text-sm text-gray-400">{movie.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default Home;


