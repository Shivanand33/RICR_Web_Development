import React from "react";
import  { useAuth } from "../../../context/authContext";
const EditProfileModal = ({ onClose }) => {
    const {user} = useAuth()
  return (
    <>
      <div className="fixed inset-0 flex items-center   justify-center bg-black/80 z-100">
        <div className="bg-white  w-5xl max-h-[85vh] overflow-y-auto">
          <div>
          <span>Name:</span> <span>{user.fullName}</span>
        </div>
        <div>
          <span>Email:</span> <span>{user.email}</span>
        </div>
        <div>
          <span>Phone:</span> <span>{user.mobileNumber}</span>
        </div>
          <button onClick={() => onClose()}>X</button>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
