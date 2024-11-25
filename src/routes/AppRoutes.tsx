// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Reservations from '../pages/ReservationsUser';
import UserProfile from '../pages/UserProfile';
import Login from "../pages/Login";
import Singup from "../pages/Signup";
import DateReservation from "../pages/DateReservation";
import InfoRestaurants from '../pages/InfoRestaurants';
import InfoEachRestaurant from '../pages/EachInfoR';


// import UserProfile from "../pages/UserProfile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/gettingdate" element={<DateReservation />} />
        <Route path="/inforestaurants" element={<InfoRestaurants />} />
        <Route path="/infoeachR" element={<InfoEachRestaurant />} />




        {/* <Route path='/gettingdate' element={<DateReservation/>} */}

        {/* <Route path="/profile" element={<UserProfile />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
