"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Form from "./WaitForm";
import '../../styles/background.css'
import Link from 'next/link'

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
    setShowSidebar(true);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (

    <div className='background'>

        <header>
          {/* ... Header content ... */}
          <Link href="/" id="">
            <Image src='/images/fitstarklogo.png' alt='' width='150' height='50' />
          </Link>

          <Image src='/images/Frame (2).png' alt='' width='30' height='50' id="hamburger" onClick={handleshowSidebar} />

          <div className='navlinks'>

            <div>

              <Image src='/images/facebook.png' alt='' width='30' height='30' />
              <Image src='/images/x.png' alt='' width='30' height='30' />
              <Image src='/images/instagram.png' alt='' width='30' height='30' />
              <Image src='/images/linkedin.png' alt='' width='30' height='30' />

            </div>

            <p style={{color: '#fff', fontSize: '15px'}}>connect with Us</p>

          </div>

        </header>

        {showSidebar && (

          <div className="sidebar">
            {/* ... Sidebar content ... */}
            <p>Connect with Us</p>
      
            <Image src='/images/Frame.png' alt='' width='50' height='50' onClick={handleCloseSidebar} style={{cursor: 'pointer'}} />

            <p className='logo'><Image src='/images/facebook.png' alt='' width='30' height='30' /> Facebook</p>

            <p className='logo'><Image src='/images/x.png' alt='' width='30' height='30' /> Twitter</p>

            <p className='logo'><Image src='/images/instagram.png' alt='' width='30' height='30' /> Instagram</p>

            <p className='logo'><Image src='/images/linkedin.png' alt='' width='30' height='30' /> Linkedin</p>

          </div>

        )}

        {showForm ? (

          <div className='form-container'>
  
            <Image src='/images/Frame.png' alt='' width='30' height='50' id='close' onClick={handleCloseFormClick} />

            <h1>Enter your details to Get Eerly Access</h1>

            <Form />

          </div>
        ) : (

          <>
        
            <div className="main-content">
        
              <h1>Embracing complete wholeness.</h1>
              <p id="p1">FitStark is launching in 2024!</p>
              <p id="p2">Be the first to know when we are done cooking your tailored meals and workouts,
                 <span> embracing</span> complete wholeness!
              </p>

              <div className='mobile-form'>

                <p>Enter your details to Get Eerly Access</p>

                <Form />

              </div>

              <button id="button" onClick={handleJoinWaitlistClick}> JOIN WAITLIST </button>
              
            </div>
          </>

        )}

    </div>

  );
}

{/* function LeftSide() {
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
} */}
