import React from "react";
import photo from "../assets/my photo.jpg";

const Home = () => {
  return (
    <div className="bg-[var(--color-night)] min-h-screen grid grid-cols-2 items-center px-20 ">
      <div className="text-white text-5xl font-bold space-y-3 ms-10">
        <h1>Hello!</h1>
        <h2>I am</h2>
        <h1 className="text-[var(--color-accent)]">Sir</h1>
        <h1>Full-Stack Web</h1>
        <h1>Developer ☺️</h1>
      </div>

      <div className="flex justify-center">
        <img
          src={photo}
          alt="My Photo"
          className="w-80 h-80 object-cover rounded-full border-4 border-[var(--color-accent)]"
        />
      </div>
    </div>
  );
};

export default Home;
