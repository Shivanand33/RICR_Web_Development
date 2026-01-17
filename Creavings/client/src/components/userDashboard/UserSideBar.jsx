import React, { useState } from "react";
import { MdPieChart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { TbTransactionDollar } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

const UserSideBar = ({ active, setActive }) => {

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-3">
        <div onClick={() => setOpen(!open)} className="text-xl font-bold flex justify-center items-center gap-2">
          <FaHamburger /> User Dashboard
        </div>
        <hr />
         {open && (
        <div className="grid justify-center items-center gap-3 p-6  font-semibold">
          <button
            className={`flex gap-3 justify-center items-center hover:bg-gray-100/70 p-3 rounded-xl ${
              active === "overview"
                ? "bg-(--color-secondary)   text-white"
                : "hover:bg-gray-100/70"
            }`}
            onClick={() => setActive("overview")}
          >
            <MdPieChart /> Overview
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
            Profile
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
            Order
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
            Transtions
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
            HelpDesk
          </button>

        </div>
         )}
      </div>
    </>
  );
};

export default UserSideBar;
