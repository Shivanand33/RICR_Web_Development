import React from "react";
import photo from "../assets/my photo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lottie from "lottie-react";
import heroVideo from "../assets/Untitled file.webm";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation time (ms)
      once: true, // ek hi baar chale scroll par
    });
  }, []);

  return (
    <>
      <div className="bg-[var(--color-night)] min-h-screen   ">
        <section className="grid grid-cols-3 items-center px-20 pt-20 ">

         
        <div
          className="text-white text-5xl font-bold space-y-3 ms-10"
          // data-aos="fade-up"

          data-aos="fade-right">
        
           
          <h2>I am</h2>

          <h1 className="text-[var(--color-accent)]">Sivanand</h1>
          <h1>Chaurasiya</h1>

          <h1>Full-Stack Web</h1>
          <h1>Developer ☺️</h1>
        </div>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        />

        <img
          data-aos="flip-right"
          data-aos-duration="1000"
          src={photo}
          alt="My Photo"
          className=" w-80 h-80 object-cover ms-20  rounded-full border-4 border-[var(--color-accent)]"
        />
        </section>
         
      </div>

       
    </>
  );
};

export default Home;
