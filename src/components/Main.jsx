import Image from "next/image";
import Form from "./WaitForm";
import '../../styles/background.css'
import Link from 'next/link'

export default function Main() {
  return (

    <div className='background'>

      <header>

          <Image src='/images/fitstarklogo.png' alt='' width='150' height='50' />

          <div className='navlinks'>

            <div>

              <Image src='/images/facebook.png' alt='' width='30' height='50' />
              <Image src='/images/x.png' alt='' width='30' height='50' />
              <Image src='/images/instagram.png' alt='' width='30' height='50' />
              <Image src='/images/linkedin.png' alt='' width='30' height='50' />

            </div>

            <p>connect with Us</p>

          </div>

      </header>

      <div className="main-content">
        
        <h1>Embracing complete wholeness.</h1>
        <p id="p1">FitStark is launching in 2024!</p>
        <p id="p2">Be the first to know when we are done cooking your tailored meals and workouts,
           <span> embracing</span> complete wholeness!
        </p>
        <Link href="/waitlist" id="button">JOIN WAITLIST</Link>

      </div>

      {/*<div className="bg-[#293747] min-h-screen h-full flex flex-wrap">
        <LeftSide />
        <RightSide />
      </div> */}

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
} */}
