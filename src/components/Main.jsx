import Image from "next/image";
import Form from "./WaitForm";

export default function Main() {
  return (
    <div className="bg-[#293747] min-h-screen h-full flex flex-wrap">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="flex-1 m-auto p-8 md:flex-[50%]">
      <Image className="py-6" width="154" height="27" src="/christmasLogo.png" alt="logo" />
      <h1 className="text-4xl text-white">
        FitStark App
        <br />
        <span className="text-[#95BF1D]">Coming Soon!</span>
      </h1>
      <div className="text-lg font-light text-white pt-4">
        Be the first to know when we launch! Join our Waitlist!
      </div>
      <Form />
    </div>
  );
}

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
}
