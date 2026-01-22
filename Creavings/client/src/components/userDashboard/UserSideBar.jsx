import React, { useState } from "react";
import { MdPieChart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { TbTransactionDollar } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

const UserSideBar = ({ active, setActive, open, setOpen }) => {
  return (
    <>
      <div className="p-3">
          <div
          onClick={() => setOpen(!open)}
          className="text-xl font-bold flex justify-center items-center transition duration-300 gap-2"
        >
          <FaHamburger /> {open && "User Dashboard"}
        </div>
        <hr />

        <div className="grid justify-center items-center gap-3 p-6 me-20  font-semibold">
          <button
            className={`flex gap-3 justify-center items-center hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary)   text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("overview")}
          >
            <MdPieChart /> {open && "Overview"}
          </button>
          <button
            className={`flex gap-3   items-center hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "profile"
                ? "bg-(--color-secondary)   text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("profile")}
          >
            <ImProfile />
            {open && "Profile"}
          </button>
          <button
            className={`flex gap-3   items-center hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "order"
                ? "bg-(--color-secondary)   text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("order")}
          >
            {" "}
            <FaShoppingCart />
            {open && "Order"}
          </button>
          <button
            className={`flex gap-3   items-center hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "transtion"
                ? "bg-(--color-secondary)   text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("transtion")}
          >
            {" "}
            <TbTransactionDollar />
            {open && "Transtions"}
          </button>
          <button
            className={`flex gap-3   items-center hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--color-secondary)   text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("helpdesk")}
          >
            {" "}
            <FaHandsHelping />
            {open && " HelpDesk"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
