import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Bookingpage from '../pages/Bookingpage';
import Completedform from "./Completedform";

const fetchAPI = (date) => {
  return ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
};

const submitAPI = (formData) => {
  return true;
};

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE":
      return { availableTimes: fetchAPI(new Date(action.date)) };
    default:
      return state;
  }
}

const Main = () => {
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Bookingpage
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<Completedform />} />
      </Routes>
    </main>
  );
};

export default Main;