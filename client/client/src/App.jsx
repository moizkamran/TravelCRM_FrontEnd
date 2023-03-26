import Booking from "./components/MainScreen/Booking";
import Dashboard from "./components/MainScreen/Dashboard";
import Hotel from "./components/Pages/Hotel & Property/Hotel";
import Login from "./components/Account/Login";
import PropertyLayoutAndPricing from "./components/Pages/Hotel & Property/AddProperty/components/PropertyLayoutAndPricing";
import PropertyView from "./components/Pages/Hotel & Property/AddProperty/components/PropertyView";
import React from "react";
import Register from "./components/Account/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Body from "./components/MainScreen/Body";
import AddProperty from "./components/Pages/Hotel & Property/AddProperty/AddProperty";

export default function App() {
  const { user } = useAuthContext()
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />}>
            <Route path="/" element={<Body />}/>
            <Route path="/hotel" element={<Hotel />}/>
            <Route path="/AddProperty" element={<AddProperty />} />
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/AddProperty2" element={<PropertyLayoutAndPricing />}></Route>
          <Route path="/AddProperty3" element={<PropertyView />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/propertyview" element={<PropertyView />}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}
