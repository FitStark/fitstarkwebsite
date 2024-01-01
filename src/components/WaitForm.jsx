"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Form() {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef(null);

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: data,
    });
    setHasSubmitted(true);
  };

  if (hasSubmitted) {
    return (
      <div className="p-8">

        <div className="form-submit">
      
          <Image src='/images/Frame (1).png' alt='' width='50' height='50' />
          <p>Your interest has been successfully received!</p>
          <p>You will be notified duly!</p>
          <p>Anticipate our launch in 2024!</p>
      
          <div className='navlinksa' style={{width: '30%', marginTop: '1em'}}>
      
            <div className="flex flex-wrap gap-2">
      
              <Image src='/images/X svg.png' alt='' width='30' height='30' />
              <Image src='/images/Facebook svg.png' alt='' width='30' height='30' />
              <Image src='/images/Instagram svg.png' alt='' width='30' height='30' />
              <Image src='/images/Linkedin svg.png' alt='' width='30' height='30' />
      
            </div>
      
            <p className="text-center"style={{color: 'black', fontSize: '15px'}}>connect with Us</p>
      
          </div>
          
        </div>

      </div>
    );
  }

  return (
    <>
      <form ref={form} className="waitform" onSubmit={submit}>

        <input
          type="text"
          name="fullName"
          required
          placeholder="Enter your Full Name"
          className="p-2 m-2 box-border rounded-lg text-sm flex-1"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your Email Address"
          className="p-2 m-2 box-border rounded-lg text-sm flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        
        <select
          name="userType"
          required
          className="p-2 m-2 box-border rounded-lg text-sm flex-1"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          autoComplete="userType" style={{color: 'black'}}
        >
          <option value="fitstar" style={{color: 'black'}} disabled>User type</option>
          <option value="fitstar" style={{color: 'black'}}>FitStar</option>
          <option value="fitguide" style={{color: 'black'}}>FitGuide</option>
        </select>

        {error ? <div className="text-red-500">{error}</div> : null}
        
        <button
          type="submit"
          className="box-border border-none rounded-lg text-md bg-[#95BF1D] hover:bg-[#6e862a] text-white"
        >
          JOIN WAITLIST
        </button>
      </form>
    </>
  );
}
