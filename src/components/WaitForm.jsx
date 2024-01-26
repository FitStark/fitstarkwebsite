"use client";
import {useRef, useState} from "react";
import Image from "next/image";

export default function Form() {
    const [userType, setUserType] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const form = useRef();

    const submit = async (e) => {
        e.preventDefault();

        if (!form?.current?.reportValidity()) {
            return
        }

        try {
            setLoading(true);
            await fetch("/api/waitlist", {
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
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false);
        }
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

    const formSectionClassName = "flex flex-col"
    const labelClassName = "text-caption text-neutral-900 font-semibold"
    const inputClassName =
        "py-2 px-3 border border-solid border-neutral-40 rounded-md text-body text-neutral-900 bg-neutral-10 placeholder-neutral-70";

    return (
        <>
            <form ref={form} className="waitform flex flex-col gap-4 my-4 w-full" onSubmit={submit}>
                <div className={formSectionClassName}>
                    <label htmlFor="name" className={labelClassName}>Full Name</label>
                    <input
                        name="name"
                        type="name"
                        required
                        placeholder="John Doe"
                        className={inputClassName}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div className={formSectionClassName}>
                    <label htmlFor="email" className={labelClassName}>Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        className={inputClassName}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={formSectionClassName}>
                    <label htmlFor="userType" className={labelClassName}>Role</label>
                    <select
                        name="userType"
                        required
                        className={inputClassName}
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        autoComplete="userType"
                    >
                        <option value="fitstar" disabled>User type</option>
                        <option value="fitstar">FitStar</option>
                        <option value="fitguide">FitGuide</option>
                    </select>
                </div>


                {error ? <div className="text-red-500">{error}</div> : null}

                <button
                    type="submit"
                    className="box-border border-none rounded-lg text-md bg-[#95BF1D] hover:bg-[#6e862a] text-white p-10"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "JOIN WAITLIST"}
                </button>
            </form>
        </>
    );
}
