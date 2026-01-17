import React, { useState } from "react";
import UserOverview from "../../components/userDashboard/UserOverview";
import SideBar from "../../components/userDashboard/UserSideBar";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserTransection from "../../components/userDashboard/UserTransection";
import UserOrder from "../../components/userDashboard/UserOrder";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  
    const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className= {`bg-(--color-background) border-green-500v duration-300 ${open ? "w-[18%]" : "w-[4%]"} `}>
          <SideBar active={active} setActive={setActive} open={open} setOpen={setOpen} />
        </div>
        <div className="border border-orange-400 duration-300 w-4/4 ">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "transtion" && <UserTransection />}
          {active === "order" && <UserOrder />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
