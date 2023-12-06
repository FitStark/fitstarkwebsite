"use client";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email }),
    });
    if (response.ok) {
      setHasSubmitted(true);
    } else {
      setError(await response.text());
    }
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
      <form className="pt-12 flex flex-wrap" onSubmit={submit}>
        <input
          type="name"
          required
          placeholder="Name"
          className="p-3 box-border border-none rounded-lg text-lg flex-1 bg-[#232323] text-white mr-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="p-3 box-border border-none rounded-lg text-lg flex-1 bg-[#232323] text-white mr-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error ? <div className="text-red-500">{error}</div> : null}
      </form>
      <button
        type="submit"
        className="p-3 box-border border-none rounded-lg text-lg flex-none bg-[#7476ED] text-white"
      >
        Join Waitlist
      </button>
    </>
  );
}
