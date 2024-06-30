import React, { useState } from "react";
import search from "../assets/images/search.png";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";
import avatar from "../assets/images/avatar.png";
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className=" flex flex-1 flex-col overflow-y-auto overflow-x-hidden  ">
      <div className="flex items-center gap-3 p-5 ">
        <div className="flex bg-[#11192880] flex-1 items-center gap-3 rounded-md h-9 px-2 ">
          <img src={search} alt={`search`} className="h-3 " />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-white outline-none "
          />
        </div>
        <img
          src={addMode ? minus : plus}
          alt={`plus`}
          className="w-9 h-9 p-3 bg-[#11192880] rounded-md cursor-pointer "
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className=" ">
        <div className="flex items-center gap-5 p-5 cursor-pointer border-b-[1px] border-[#11192880] shadow-sm">
          <img src={avatar} alt={`avatar`} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col ">
            <span className="font-medium">Kiran</span>
            <p className="font-light text-sm ">Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
