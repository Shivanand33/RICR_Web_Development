import React from "react";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user } = useAuth();
  return (
    <>
      <div className="  m-20  w-2xl flex justify-center bg-gray-50  items-center shadow-2xl rounded-xl h-8/12 ms-50  ">
        <div className="  justify-between  items-center w-2xl   ">
          <div className="flex">
            <img
              src=""
              alt=""
              className="border-2 border-orange-400 w-40 h-40 ms-10  rounded-full   shadow-2xl"
            />
            <div className="m-8 ">
              <span className="text-xl font-bold">{user.fullName}</span>

              <p>{user.email}</p>
              <button
                className=" mt-5 rounded px-5 py-2 bg-orange-400 hover:bg-orange-600 text-white active:bg-orange-900"
                onClick={() => setIsEditProfileModalOpen(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <hr />
          <div className="  grid grid-cols-2  ms-5 mt-5     ">
            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="  text-gray-500">Name:</span>
              <p className="font-bold  ">{user.fullName}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <span  className="  text-gray-500">Email:</span>
              <p className="font-bold">{user.email}</p>
            </div>
            <div  className="bg-gray-50 p-4 rounded-xl" >
              <span  className="  text-gray-500">Phone:</span>
              <p className="font-bold">{user.mobileNumber}</p>
            </div>
                <div className="bg-gray-50 p-4 rounded-xl">
              <p className=" text-gray-500">Account Status</p>
              <p className="text-lg font-medium text-green-600">Active</p>
            </div>
            
          </div>
        </div>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
