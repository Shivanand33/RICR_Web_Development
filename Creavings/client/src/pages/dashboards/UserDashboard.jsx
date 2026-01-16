import React, { useState } from "react";
import UserOverview from "../../components/userDashboard/UserOverview";
import SideBar from "../../components/userDashboard/UserSideBar";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserTransection from "../../components/userDashboard/UserTransection";
import UserOrder from "../../components/userDashboard/UserOrder";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className="bg-(--color-background) border-green-500 w-1/7">
          <SideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-orange-400 w-6/7">
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
