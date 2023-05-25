import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivetRouts from "./PrivetRouts";

import Home from "./Home/Home";
import Second_Hand_Cars from "./Second Hand Cars/Second_Hand_Cars";
import New_cars_page from "./New cars/New_cars_page";
import Sign_Up from "./signup/Sign_Up";
import Sign_In from "./signin/Sign_In";

function All_route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/secondHandCars"
          element={
            // <PrivetRouts>
              <Second_Hand_Cars />
            // </PrivetRouts>
          }
        ></Route>

        {/* <Route
          path="/profile"
          element={
            <PrivetRouts>
              <Profile />
            </PrivetRouts>
          }
        ></Route> */}

        <Route
          path="/newCars"
          element={
            // <PrivetRouts>
              <New_cars_page />
            // </PrivetRouts>
          }
        ></Route>

        {/* <Route
          path="/all_user"
          element={
            <PrivetRouts>
              <RigthCompo />
            </PrivetRouts>
          }
        ></Route> */}


        <Route path="/userLogin" element={<Sign_In />}></Route>
        <Route path="/userSignup" element={<Sign_Up />}></Route>
      </Routes>
    </div>
  );
}

export default All_route;