import React from "react";
import avatarImg from "../assets/images/avatar.png";

const AddUser = () => {
  return (
    <div className="w-max h-max p-8 bg-[#18100250] rounded-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  ">
      <form className="gap-5 flex ">
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          className="px-3 py-1 rounded-lg border-none outline-none"
        />
        <button className="px-3 py-1 bg-[#1a73e8] cursor-pointer rounded-lg ">
          Search
        </button>
      </form>
      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={avatarImg}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover "
          />
          <span>Kiran</span>
        </div>
        <button className="px-3 py-1 bg-[#1a73e8] cursor-pointer rounded-lg ">
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
