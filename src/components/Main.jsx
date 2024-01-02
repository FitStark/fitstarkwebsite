"use client";
import React, { useState } from "react";
import Image from "next/image";
import Form from "./WaitForm";
import "../../styles/background.css";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Main() {
  const [showForm, setShowForm] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);

  const handleJoinWaitlistClick = () => {
    setShowForm(true);
  };

  const handleCloseFormClick = () => {
    setShowForm(false);
  };

  const handleshowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className="background">
      <header>
        {/* ... Header content ... */}
        <Link href="/" id="">
          <Image
            src="/images/fitstarklogo.png"
            alt=""
            width="150"
            height="50"
          />
        </Link>

        <Image
          src="/images/Frame (2).png"
          alt=""
          width="30"
          height="50"
          id="hamburger"
          onClick={handleshowSidebar}
        />

        <div className="navlinks">
          <div>
            <Link href="https://www.facebook.com/fitstarkapp" target="_blank">
              <FaFacebook />
            </Link>
            <Link href="https://www.x.com/fitstarkapp" target="_blank">
              <RiTwitterXLine />
            </Link>
            <Link href="https://www.instagram.com/fitstarkapp" target="_blank">
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/fitstarkapp"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </div>

          <p style={{ color: "#fff", fontSize: "15px" }}>connect with Us</p>
        </div>
      </header>

      {showSidebar && (
        <div className="sidebar">
          {/* ... Sidebar content ... */}
          <p>Connect with Us</p>

          <Image
            src="/images/Frame.png"
            alt=""
            width="50"
            height="50"
            onClick={handleCloseSidebar}
            style={{ cursor: "pointer" }}
          />

          <Link href="https://www.facebook.com/fitstarkapp" target="_blank">
            <p className="logo">
              <FaFacebook /> Facebook
            </p>
          </Link>

          <Link href="https://www.x.com/fitstarkapp" target="_blank">
            <p className="logo">
              <RiTwitterXLine />X
            </p>
          </Link>

          <Link href="https://www.instagram.com/fitstarkapp" target="_blank">
            <p className="logo">
              <FaInstagram />
              Instagram
            </p>
          </Link>

          <Link
            href="https://www.linkedin.com/company/fitstarkapp"
            target="_blank"
          >
            <p className="logo">
              <FaLinkedinIn />
              Linkedin
            </p>
          </Link>
        </div>
      )}

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

          <h1>Enter your details to Get Early Access</h1>

          <Form />
        </div>
      ) : (
        <>
          <div className="main-content" onClick={() => setShowSidebar(false)}>
            <h1>Embracing complete wholeness.</h1>
            <p id="p1">FitStark is launching in 2024!</p>
            <p id="p2">
              Be the first to know when we are done cooking your tailored meals
              and workouts,
              <span> embracing</span> complete wholeness!
            </p>

            <div className="mobile-form">
              <p>Enter your details to Get Early Access</p>

              <Form />
            </div>

            <button id="button" onClick={handleJoinWaitlistClick}>
              {" "}
              JOIN WAITLIST{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
