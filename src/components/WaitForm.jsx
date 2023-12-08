"use client";
import { useRef, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      <div className="pt-12">
        <span className="text-lg font-light text-white">
          Thanks for signing up! We will be in touch soon.
        </span>
      </div>
    );
  }

  return (
    <>
      <form ref={form} className="pt-12 flex flex-wrap" onSubmit={submit}>
        <input
          type="name"
          name="name"
          required
          placeholder="Name"
          className="p-3 m-2 box-border border-none rounded-lg text-lg flex-1 bg-[#232323] text-white mr-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="p-3 m-2 box-border border-none rounded-lg text-lg flex-1 bg-[#232323] text-white mr-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        {error ? <div className="text-red-500">{error}</div> : null}
        <button
          type="submit"
          className="m-2 p-3 box-border border-none rounded-lg text-lg flex-none bg-[#95BF1D] hover:bg-[#6e862a] text-white"
        >
          Join Waitlist
        </button>
      </form>
    </>
  );
}
