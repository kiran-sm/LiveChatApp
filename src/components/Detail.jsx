import React from "react";
import avatar from "../assets/images/avatar.png";
import arrowUp from "../assets/images/arrowUp.png";
import arrowDown from "../assets/images/arrowDown.png";
import download from "../assets/images/download.png";

const Detail = () => {
  return (
    <div className="flex-1">
      <div className="p-7 flex flex-col items-center gap-5 border-b-[1px] border-[#11192880]">
        <img
          src={avatar}
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
        <h2>Kiran</h2>
        <p>User Description</p>
      </div>
      <div className="p-5 flex flex-col gap-7 ">
        <div>
          <div className="flex items-center justify-between ju">
            <span>Chat Setting</span>
            <img
              src={arrowUp}
              alt="arrowUp"
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between ">
            <span>Privacy & Help</span>
            <img
              src={arrowUp}
              alt="arrowUp"
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between ">
            <span>Shared Photos</span>
            <img
              src={arrowDown}
              alt="arrowDown"
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer "
            />
          </div>
          <div className="flex  gap-5 justify-between items-center mt-5 ">
            <div className="flex items-center gap-1">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                alt="avatar"
                className="w-9 h-9 rounded-sm object-cover"
              />
              <span className="text-sm">Photo Name</span>
            </div>
            <img
              src={download}
              alt="download"
              className="w-6  h-6 rounded-full bg-[rgba(17,25,40,0.3)] p-1 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between ">
            <span>Shared Files</span>
            <img
              src={arrowUp}
              alt="arrowUp"
              className="w-7 h-7 bg-[rgba(17,25,40,0.3)] p-2 rounded-full cursor-pointer "
            />
          </div>
        </div>
        <button className="px-3 py-2 bg-red-500 rounded-md cursor-pointer border-none hover:bg-red-800 hover:text-gray-950 ">
          Block User
        </button>
        <button className="px-3 py-2 bg-gray-700 rounded-md cursor-pointer border-none ">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Detail;
