import React from "react";
import more from "../assets/images/more.png";
import video from "../assets/images/video.png";
import edit from "../assets/images/edit.png";
import avatar from "../assets/images/avatar.png";

const UserInfo = () => {
  return (
    <div className="p-5 flex justify-between items-center ">
      <div className="flex items-center gap-5">
        <img
          src={avatar}
          alt={`avatar`}
          className="flex  w-12 h-12 rounded-[50%] object-cover "
        />
        <h2>Kiran</h2>
      </div>
      <div className="flex gap-5 ">
        <img src={more} alt={`more`} className="w-5 h-5 cursor-pointer" />
        <img src={video} alt={`video`} className="w-5 h-5 cursor-pointer" />
        <img src={edit} alt={`edit`} className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default UserInfo;
