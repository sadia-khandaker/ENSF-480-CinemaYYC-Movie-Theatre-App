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
// import { useUserAuth } from '../authentication/UserAuthContext';
// import { useEffect } from 'react';
// import KoolContainer from '../KoolContainer/KoolContainer';
// import axios from 'axios';
// import moment from 'moment';
//
// const theme = createTheme();
//
// export default function CancelTicket() {
//   const { user } = useUserAuth();
//   const [displayInformation, setDisplayInformation] = React.useState([]);
//   const [isSubmitted, setIsSubmitted] = React.useState(0);
//   const [showInformation, setShowInformation] = React.useState({});
//   const [cancelResponse, setCancelResponse] = React.useState({});
//
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     axios.get("http://localhost:3001/server/endpoints/get/cancelticket.php?user_email=" + data.get('email') + "&payment_id=" + data.get('orderid'))
//       .then((response) => {
//         if (response.data.body.length > 0) {
//           if (response.data.body[0].refunded !== "-1") {
//             window.alert("This ticket has already been cancelled");
//             return;
//           } else {
//             setDisplayInformation(response.data.body);
//             console.log(response.data.body);
//             setIsSubmitted(1);
//             axios.get("http://localhost:3001/server/endpoints/get/getshowtime.php?showtime_id=" + response.data.body[0].showtime_id)
//               .then((response2) => {
//                 setShowInformation(response2.data.body);
//               });
//           }
//         } else {
//           window.alert("No ticket found with that email and order id.\nPlease try again.");
//         }
//       });
//   };
//
//   const canCancel = () => {
//     if (showInformation.length > 0) {
//       return (moment(showInformation[0].show_date + " " + showInformation[0].show_start, 'YYYY-MM-DD hh:mm:ss').diff(moment(), 'hours') > 72);
//     }
//   }
//
//   const cancelTickets = () => {
//     if (!canCancel()) {
//       return alert("Sorry, you can not cancel a ticket within 72 hours of the show start time.");
//     }
//     if (displayInformation[0].seat_status === "1") {
//       if (window.confirm("As a member, you are eligible for a full refund. Thank you for choosing KoolTickets!\n\nWould you like to continue?")) {
//         axios.post("http://localhost:3001/server/endpoints/post/performcancel.php", {
//           displayInformation: displayInformation
//         })
//           .then((response) => {
//             if (response.data.status === 200) {
//               if (response.data.body.error) {
//                 window.alert("User's recurring payment has expired. Please renew your membership.");
//                 return;
//               } else {
//                 setCancelResponse(response.data.body);
//                 setIsSubmitted(2);
//                 console.log(response);
//               }
//
//             }
//           });
//       }
//     } else {
//       if (window.confirm("As a guest, you are eligible for an 85% refund.\n\nWould you like to continue?")) {
//         axios.post("http://localhost:3001/server/endpoints/post/performcancel.php", {
//           displayInformation: displayInformation
//         })
//           .then((response) => {
//             if (response.data.status === 200) {
//               setCancelResponse(response.data.body);
//               setIsSubmitted(2);
//               console.log(response);
//             }
//           });
//       }
//     }
//   };
//
//   return (
//     <ThemeProvider theme={theme}>
//       <KoolContainer>
//         {isSubmitted === 0 ? (
//           <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Typography component="h1" variant="h5">
//                 Cancel an order
//               </Typography>
//               <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//                 <TextField
//                   margin="normal"
//                   variant="filled"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   className='bg-white rounded-lg'
//                 />
//                 <TextField
//                   margin="normal"
//                   variant="filled"
//                   required
//                   fullWidth
//                   id="orderid"
//                   label="Order ID#"
//                   name="orderid"
//                   className='bg-white rounded-lg'
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//             </Box>
//           </Container>
//         ) : showInformation.length > 0 && displayInformation[0] && isSubmitted === 1 ? (
//           <>
//             <div>
//               <Typography
//                 color="blue-gray"
//                 size="2xl" style={{
//                   textAlign: "center",
//                   fontSize: 24,
//                   fontWeight: "700",
//                   textShadow: "2px 2px 4px #000000"
//                 }}
//               >
//                 Order Details
//               </Typography>
//               <p>Your Order ID is: {displayInformation[0].payment_id}</p>
//
//               <div>
//                 <div className="flex flex-col space-y-3 h-3/4 w-3/5 m-auto">
//                   {displayInformation.map((seat) => (
//                     <div key={seat.seat_id} className='grid grid-cols-5'>
//                       <div className='grid col-span-3 border border-block rounded-xl w-full m-auto'>
//                         <p>{seat.seat_number}</p>
//                       </div>
//                       <div className='grid col-span-1'></div>
//                       <div className='grid col-span-1  rounded-xl w-full m-auto'>
//                         <p>$10</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className='grid h-1/4'>
//                   <div>
//                     <div>{displayInformation.length} x General Admission</div>
//                     <div>Total cost: ${displayInformation.length * 10} CAD </div>
//                   </div>
//                 </div>
//               </div>
//               <Button onClick={cancelTickets} variant="contained" color={!canCancel() ? 'error' : 'primary'} >Cancel Tickets</Button>
//
//               <h4 className='mt-36'>Cancellation Policy:</h4>
//               <p>You may cancel your ticket 72 hours before the showtime.</p>
//               <p className='text-red-500'>Please note a 15% cancellation will apply if you are not a registered user. Consider signing up today!</p>
//             </div>
//           </>
//         ) : isSubmitted === 2 && cancelResponse && (
//           <>
//             <div className='mt-10'>
//               <Typography
//                 color="blue-gray"
//                 size="2xl" style={{
//                   textAlign: "center",
//                   fontSize: 24,
//                   fontWeight: "700",
//                   textShadow: "2px 2px 4px #000000"
//                 }}
//               >
//                 Tickets Cancelled
//               </Typography>
//               <div className="flex flex-col space-y-3 h-3/4 w-3/5 m-auto">
//                 {displayInformation.map((seat) => (
//                   <div key={seat.seat_id} className='grid grid-cols-5'>
//                     <div className='grid col-span-3 border border-block rounded-xl w-full m-auto'>
//                       <p>{seat.seat_number}</p>
//                     </div>
//                     <div className='grid col-span-1'></div>
//                     <div className='grid col-span-1 rounded-xl w-full m-auto'>
//                       <p>$10</p>
//                     </div>
//                   </div>
//                 ))}
//                 <div className='grid grid-cols-5'>
//                   <div className='grid col-span-3 w-full m-auto'>
//                     <p className='text-red-500'>Refund: </p>
//                   </div>
//                   <div className='grid col-span-1'></div>
//                   <div className='grid col-span-1  rounded-xl w-full m-auto'>
//                     <p className='text-red-500'>{cancelResponse.refundAmount / displayInformation.length * 10} %</p>
//                   </div>
//                 </div>
//               </div>
//               <div className='grid h-1/4'>
//                 <div>
//                   <div>{displayInformation.length} x General Admission</div>
//                   <div>Total cost: ${displayInformation.length * 10} CAD </div>
//                   <div className='text-red-500'>Refunded: ${cancelResponse.refundAmount} CAD </div>
//                 </div>
//               </div>
//             </div>
//           </>
//
//         )}
//       </KoolContainer>
//     </ThemeProvider>
//   );
// }


import React, { useState } from "react";
import { useUserAuth } from "../authentication/UserAuthContext";
import axios from "axios";
import moment from "moment";
import { FaRegCircleCheck } from "react-icons/fa6";

const CancelTicket = () => {
    const { user } = useUserAuth();
    const [displayInformation, setDisplayInformation] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(0);
    const [showInformation, setShowInformation] = useState({});
    const [cancelResponse, setCancelResponse] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios
            .get(
                `http://localhost:3001/server/endpoints/get/cancelticket.php?user_email=${data.get(
                    "email"
                )}&payment_id=${data.get("orderid")}`
            )
            .then((response) => {
                if (response.data.body.length > 0) {
                    if (response.data.body[0].refunded !== "-1") {
                        alert("This ticket has already been cancelled");
                    } else {
                        setDisplayInformation(response.data.body);
                        setIsSubmitted(1);
                        axios
                            .get(
                                `http://localhost:3001/server/endpoints/get/getshowtime.php?showtime_id=${response.data.body[0].showtime_id}`
                            )
                            .then((response2) => setShowInformation(response2.data.body));
                    }
                } else {
                    alert("No ticket found with that email and order ID. Please try again.");
                }
            });
    };

    const canCancel = () => {
        if (showInformation.length > 0) {
            return (
                moment(
                    `${showInformation[0].show_date} ${showInformation[0].show_start}`,
                    "YYYY-MM-DD hh:mm:ss"
                ).diff(moment(), "hours") > 72
            );
        }
    };

    const cancelTickets = () => {
        if (!canCancel()) {
            alert("You cannot cancel tickets within 72 hours of the showtime.");
            return;
        }
        axios
            .post("http://localhost:3001/server/endpoints/post/performcancel.php", {
                displayInformation,
            })
            .then((response) => {
                if (response.data.status === 200) {
                    setCancelResponse(response.data.body);
                    setIsSubmitted(2);
                }
            });
    };

    return (
        <div
            className="min-h-screen bg-black text-white"
            style={{
                background: `url("https://www.bosshunting.com.au/cdn-cgi/imagedelivery/izM8XxyLg9MD6py1ribxJw/www.bosshunting.com.au/2021/08/best-streaming-services-australia-netflix.jpg/w=1200,h=675") no-repeat center center fixed`,
                backgroundSize: "cover",
                backdropFilter: "blur(4px)",
            }}
        >
            <div className="bg-black bg-opacity-70 min-h-screen p-6">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                            Cancel Ticket
                        </h1>
                        {user && (
                            <span className="text-gray-300 italic">
                Welcome, <span className="font-semibold">{user.fullname}</span>
              </span>
                        )}
                    </div>

                    {isSubmitted === 0 && (
                        <form
                            className="max-w-lg mx-auto bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-xl"
                            onSubmit={handleSubmit}
                        >
                            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                                Enter Your Details
                            </h2>
                            <div className="mb-6">
                                <label
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                    htmlFor="orderid"
                                >
                                    Order ID
                                </label>
                                <input
                                    id="orderid"
                                    name="orderid"
                                    placeholder="Enter your Order ID"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition"
                            >
                                Submit
                            </button>
                        </form>
                    )}

                    {isSubmitted === 1 && displayInformation.length > 0 && (
                        <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                                Order Details
                            </h2>
                            <p className="text-gray-300 mb-4">
                                Order ID: <span className="font-semibold">{displayInformation[0].payment_id}</span>
                            </p>
                            <div className="space-y-4">
                                {displayInformation.map((seat) => (
                                    <div
                                        key={seat.seat_id}
                                        className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
                                    >
                                        <span className="text-gray-300">Seat: {seat.seat_number}</span>
                                        <span className="text-yellow-400">$10</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-right">
                                <p className="text-gray-300">
                                    Total: <span className="font-semibold">${displayInformation.length * 10} CAD</span>
                                </p>
                                <button
                                    onClick={cancelTickets}
                                    className={`mt-4 px-6 py-3 rounded-lg font-bold text-black ${
                                        canCancel()
                                            ? "bg-green-500 hover:bg-green-400"
                                            : "bg-red-500 cursor-not-allowed"
                                    }`}
                                    disabled={!canCancel()}
                                >
                                    Cancel Tickets
                                </button>
                            </div>
                        </div>
                    )}

                    {isSubmitted === 2 && (
                        <div className="max-w-lg mx-auto bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-xl text-center">
                            <FaRegCircleCheck className="text-green-500 text-6xl mb-4" />
                            <h2 className="text-2xl font-bold text-green-400 mb-4">
                                Tickets Cancelled Successfully!
                            </h2>
                            <p className="text-gray-300">
                                Refund Amount:{" "}
                                <span className="font-semibold">${cancelResponse.refundAmount} CAD</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CancelTicket;

