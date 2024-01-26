"use client";
import {useRef, useState} from "react";
import Image from "next/image";

export default function Form() {
    const [userType, setUserType] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const form = useRef();

    const submit = async (e) => {
        e.preventDefault();

        if (!form?.current?.reportValidity()) {
            return
        }

        const response = await fetch("/api/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                fullName,
                userType,
            }),
        });

        setHasSubmitted(true);
    };

    if (hasSubmitted) {
        return (
            <div className="p-8 mt-5">
                <div className="form-submit">
                    <Image src="/images/Frame (1).png" alt="" width="50" height="50"/>
                    <p>Your interest has been successfully received!</p>
                    <p>You will be notified duly!</p>
                    <p>Anticipate our launch in 2024!</p>

                    <div className="navlinksa" style={{width: "30%", marginTop: "1em"}}>
                        <div className="flex flex-wrap gap-2">
                            <Image src="/images/X svg.png" alt="" width="30" height="30"/>
                            <Image
                                src="/images/Facebook svg.png"
                                alt=""
                                width="30"
                                height="30"
                            />
                            <Image
                                src="/images/Instagram svg.png"
                                alt=""
                                width="30"
                                height="30"
                            />
                            <Image
                                src="/images/Linkedin svg.png"
                                alt=""
                                width="30"
                                height="30"
                            />
                        </div>

                        <p
                            className="text-center"
                            style={{color: "black", fontSize: "15px"}}
                        >
                            Connect with Us
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const inputStyle = "p-3 box-border border-none rounded-lg text-lg flex-1 bg-[#232323] text-white mr-2"
    const selectStyle = {color: "black"}

    return (
        <>
            <form ref={form} className="waitform mt-5" onSubmit={submit}>
                <input
                    type="name"
                    required
                    placeholder="Full Name"
                    className={inputStyle}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <input
                    type="email"
                    required
                    placeholder="Email"
                    className={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <select
                    name="userType"
                    required
                    className="p-2 m-2 box-border rounded-lg text-sm flex-1"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    autoComplete="userType"
                    style={selectStyle}
                >
                    <option value="fitstar" style={selectStyle} disabled>User type</option>
                    <option value="fitstar" style={selectStyle}>FitStar</option>
                    <option value="fitguide" style={selectStyle}>FitGuide</option>
                </select>

                {error ? <div className="text-red-500">{error}</div> : null}

                <button
                    type="submit"
                    className="box-border border-none rounded-lg text-md bg-[#95BF1D] hover:bg-[#6e862a] text-white p-10"
                >
                    JOIN WAITLIST
                </button>
            </form>
        </>
    );
}
