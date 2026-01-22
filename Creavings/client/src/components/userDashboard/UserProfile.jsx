import React from "react";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
// import EditModal from "./modals/EditModal";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user } = useAuth();
  return (
    <>
      <div className="flex gap-5">
        <div>
          <span>Name:</span> <span>{user.fullName}</span>
        </div>
        <div>
          <span>Email:</span> <span>{user.email}</span>
        </div>
        <div>
          <span>Phone:</span> <span>{user.mobileNumber}</span>
        </div>
        <button
          className=" border px-5 py-2 bg-amber-300"
          onClick={() => setIsEditProfileModalOpen(true)}
        >
          Edit Profile
        </button>
      </div>
      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
