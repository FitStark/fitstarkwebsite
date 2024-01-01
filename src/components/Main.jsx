"use client";
import React, { useState } from "react";
import Image from "next/image";
import Form from "./WaitForm";
import "../../styles/background.css";
import Link from "next/link";

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
              <Image src="/images/facebook.png" alt="" width="30" height="30" />
            </Link>
            <Link href="https://www.x.com/fitstarkapp" target="_blank">
              <Image src="/images/x.png" alt="" width="30" height="30" />
            </Link>
            <Link href="https://www.instagram.com/fitstarkapp" target="_blank">
              <Image
                src="/images/instagram.png"
                alt=""
                width="30"
                height="30"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/fitstarkapp"
              target="_blank"
            >
              <Image src="/images/linkedin.png" alt="" width="30" height="30" />
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
              <Image src="/images/facebook.png" alt="" width="30" height="30" />{" "}
              Facebook
            </p>
          </Link>

          <Link href="https://www.x.com/fitstarkapp" target="_blank">
            <p className="logo">
              <Image src="/images/x.png" alt="" width="30" height="30" />{" "}
              Twitter
            </p>
          </Link>

          <Link href="https://www.instagram.com/fitstarkapp" target="_blank">
            <p className="logo">
              <Image
                src="/images/instagram.png"
                alt=""
                width="30"
                height="30"
              />{" "}
              Instagram
            </p>
          </Link>

          <Link
            href="https://www.linkedin.com/company/fitstarkapp"
            target="_blank"
          >
            <p className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="30"
                viewBox="0 0 36 30"
                fill="none"
              >
                <g clip-path="url(#clip0_1055_6563)">
                  <path
                    d="M33.8043 28.0637C33.8806 28.0644 33.9562 28.0497 34.0265 28.0203C34.0967 27.9909 34.1601 27.9476 34.2127 27.8929C34.2653 27.8383 34.3061 27.7735 34.3324 27.7026C34.3586 27.6317 34.3699 27.5563 34.3655 27.4809C34.3655 27.0676 34.1137 26.8701 33.597 26.8701H32.7622V29.034H33.0762V28.0908H33.462L33.4709 28.1023L34.0697 29.034H34.4054L33.7612 28.0697L33.8043 28.0637ZM33.4412 27.8469H33.0771V27.1154H33.5386C33.777 27.1154 34.0488 27.1539 34.0488 27.463C34.0488 27.8184 33.7737 27.8469 33.4393 27.8469"
                    fill="white"
                  />
                  <path
                    d="M25.6042 25.3518H21.1517V18.4477C21.1517 16.8013 21.1221 14.6819 18.836 14.6819C16.517 14.6819 16.1621 16.4757 16.1621 18.3278V25.3514H11.7096V11.1536H15.984V13.0939H16.0439C16.4716 12.3697 17.0898 11.774 17.8324 11.3701C18.5751 10.9662 19.4145 10.7694 20.2612 10.8005C24.7741 10.8005 25.6061 13.7396 25.6061 17.5632L25.6042 25.3518ZM6.68571 9.21291C6.17468 9.213 5.67508 9.06304 5.25011 8.782C4.82515 8.50095 4.49393 8.10144 4.29828 7.63399C4.10263 7.16654 4.05135 6.65214 4.15096 6.15584C4.25057 5.65954 4.49658 5.20364 4.85788 4.84577C5.21917 4.48791 5.67952 4.24416 6.18072 4.14536C6.68192 4.04655 7.20145 4.09712 7.67362 4.29068C8.14579 4.48424 8.54939 4.81208 8.83338 5.23275C9.11737 5.65343 9.26901 6.14805 9.2691 6.65405C9.26916 6.99002 9.20238 7.32272 9.07259 7.63314C8.94279 7.94356 8.75254 8.22563 8.51265 8.46324C8.27276 8.70086 7.98793 8.88936 7.67447 9.01798C7.361 9.14661 7.02503 9.21285 6.68571 9.21291ZM8.91196 25.3518H4.45482V11.1536H8.91196V25.3518ZM27.824 0.00202714H2.21745C1.63625 -0.00446707 1.0762 0.217774 0.660405 0.619913C0.244612 1.02205 0.00709319 1.57119 0 2.14665V27.6062C0.00685042 28.1819 0.24423 28.7315 0.660008 29.134C1.07579 29.5366 1.63596 29.7592 2.21745 29.7531H27.824C28.4066 29.7604 28.9684 29.5383 29.3858 29.1358C29.8032 28.7332 30.0422 28.1831 30.0503 27.6062V2.14482C30.042 1.56821 29.8028 1.01845 29.3854 0.61632C28.9679 0.21419 28.4064 -0.0074153 27.824 0.000189456"
                    fill="white"
                  />
                  <path
                    d="M33.4727 25.9062C32.931 25.9114 32.4134 26.1288 32.0331 26.5108C31.6528 26.8928 31.4408 27.4084 31.4434 27.9448C31.446 28.4812 31.663 28.9948 32.047 29.3731C32.431 29.7515 32.9507 29.964 33.4925 29.964C34.0342 29.964 34.5539 29.7515 34.9379 29.3731C35.3219 28.9948 35.5389 28.4812 35.5415 27.9448C35.5441 27.4084 35.3321 26.8928 34.9518 26.5108C34.5715 26.1288 34.0539 25.9114 33.5122 25.9062H33.4727ZM33.4727 29.7317C33.1174 29.7375 32.7683 29.6389 32.4696 29.4483C32.1709 29.2577 31.936 28.9837 31.7945 28.6609C31.6531 28.3381 31.6115 27.9811 31.675 27.6349C31.7385 27.2887 31.9043 26.9689 32.1514 26.716C32.3984 26.4631 32.7157 26.2884 33.063 26.214C33.4104 26.1396 33.7722 26.1689 34.1027 26.2981C34.4333 26.4273 34.7177 26.6507 34.92 26.9399C35.1223 27.2292 35.2334 27.5714 35.2394 27.9232C35.2394 27.9333 35.2394 27.943 35.2394 27.9531C35.2493 28.4146 35.0737 28.8611 34.7512 29.1945C34.4287 29.5279 33.9857 29.7208 33.5196 29.7308H33.4732"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1055_6563">
                    <rect width="35.5385" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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

{
  /* function LeftSide() {
  return (
    <div className="flex-1 m-auto p-8 md:flex-[50%]">
      <Image className="py-6" width="250" height="30" src="/christmasLogo.png" alt="logo" />
      <h1 className="text-4xl text-white">
        FitStark App is
        <br />
        <span className="text-[#95BF1D]">Coming Soon!</span>
      </h1>
      <div className="text-lg font-light text-white pt-4">
        Be the first to know when we launch! Join our Waitlist!
      </div>
      <Form />
    </div>
  );



      {/*<div className="bg-[#293747] min-h-screen h-full flex flex-wrap">
        <LeftSide />
        <RightSide />
      </div> 

function RightSide() {
  return (
    <div className="flex-1 m-auto p-8 md:flex-[50%]">
      <Image
        className="w-full h-full"
        src="/hero.jpg"
        alt="Code"
        width={250}
        height={250}
      />
    </div>
  );
} */
}
