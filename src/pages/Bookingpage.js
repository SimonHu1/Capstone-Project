import React from "react";
import Bookingform from '../components/Bookingform';
import { useState } from "react";

const Booking = (props) => {
console.log("availableTimes prop:", props.availableTimes);
    return (
        <Bookingform availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;