"use client"
import Header from "/src/components/ui/header.jsx";
import Footer from "/src/components/ui/footer.jsx";
import Main from "/src/components/Main.jsx";
import { useRef, useState } from "react";

export default function Home() {

  return (
    <main>
      <Header />
      <Main />
      {/* <Footer /> */}
    </main>
  );
}
