"use client";
import React, { useState } from "react";
import Image from "next/image";
import Form from "./WaitForm";
import "../../styles/background.css";


export default function Main() {
  const [showForm, setShowForm] = useState(false);


  const handleJoinWaitlistClick = () => {
    setShowForm(true);
  };

  const handleCloseFormClick = () => {
    setShowForm(false);
  };


  return (
    <div className="background">
      {showForm ? (
        <div className="form-container">
          <Image
            src="/images/Frame.png"
            alt=""
            width="30"
            height="50"
            id="close"
            onClick={handleCloseFormClick}
          />
          <h1 className="my-5 sm:pt-10">Enter your details to Get Early Access</h1>

          <Form />
        </div>
      ) : (
        <>
          <div className="main-content" onClick={() => setShowSidebar(false)}>
            <h1>Embrace Complete Wholeness.</h1>
            <p id="p1" className="text-xl my-6">
              FitStark is launching in 2024!
            </p>
            <p className="text-lg" id="p2">
              Want to be the first to know?
            </p>

            <div className="mobile-form">
              <p className="pb-16">Enter your details to Get Early Access</p>
              <Form />
            </div>

            <button
              id="button"
              className="p-4 mt-10"
              onClick={handleJoinWaitlistClick}
            >
              {" "}
              JOIN WAITLIST{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
