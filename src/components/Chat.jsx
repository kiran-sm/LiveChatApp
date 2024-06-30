import React, { useState } from "react";
import avatar from "../assets/images/avatar.png";
import phone from "../assets/images/phone.png";
import video from "../assets/images/video.png";
import info from "../assets/images/info.png";
import img from "../assets/images/img.png";
import camera from "../assets/images/camera.png";
import mic from "../assets/images/mic.png";
import emoji from "../assets/images/emoji.png";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [emojiPick, setEmojiPick] = useState(false);
  const [text, setText] = useState("");
  const emojiHnadler = (e) => {
    setText((prev) => prev + e.emoji);
    setEmojiPick(false);
  };
  console.log(text);
  return (
    <div className="flex-2 border-l-[1px] border-r-[1px] border-[#11192880] h-[100%] flex flex-col ">
      <div className="p-5 flex items-center justify-between border-b-[1px] border-[#11192880] ">
        <div className="flex items-center gap-5">
          <img
            src={avatar}
            alt="avatar"
            className=" rounded-full object-cover w-12 h-12 "
          />
          <div className="flex flex-col gap-1">
            <span>Kiran SM</span>
            <p className="text-lg  text-[#a5a5a5] font-light ">
              Lorem10 loremlipsium
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={phone} alt="phone" className="h-4 w-4" />
          <img src={video} alt="video" className="h-4 w-4" />
          <img src={info} alt="info" className="h-4 w-4" />
        </div>
      </div>

      <div className="p-5 flex-1 overflow-y-auto flex gap-5 flex-col ">
        <div className="max-w-[70%] flex gap-5">
          <img
            src={avatar}
            alt="avatar"
            className="w-7 h-7 rounded-full object-cover"
          />
          <div className="flex-1 flex flex-col gap-1">
            <img
              src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
              alt="img"
              className="object-cover w-[100%]"
            />
            <p className="p-5 bg-[#1119284d] rounded-xl ">
              loremlipsium ,lkijhdsnfms.dlkgm;/lffv ald;gkjdfnkj;ikjfdgnm/;lk
              /;aoldfgi;akldslfupoilsvk n/xlzckj;cxvkvn .lkvon cvnv;lziohvdcv
            </p>
            <span className="text-xs"> 1 min ago</span>
          </div>
        </div>
        <div className="max-w-[70%] flex  self-end">
          <div className="flex flex-col gap-1">
            <img
              src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
              alt="img"
              className="object-cover w-[100%]"
            />
            <p className="p-5  rounded-xl bg-[#7c7cfd68] ">
              loremlipsium ,lkijhdsnfms.dlkgm;/lffv ald;gkjdfnkj;ikjfdgnm/;lk
              /;aoldfgi;akldslfupoilsvk n/xlzckj;cxvkvn .lkvon cvnv;lziohvdcv
            </p>
            <span className="text-xs self-end "> 1 min ago</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex items-center gap-3 mt-auto justify-between border-t-[1px] border-[#11192880] ">
        <div className="flex gap-3">
          <img src={img} alt="img" className="cursor-pointer  h-5 w-5" />
          <img src={camera} alt="camera" className="cursor-pointer  h-5 w-5" />
          <img src={mic} alt="mic" className="cursor-pointer  h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border-none outline-none text-white bg-[#11192880] px-3 py-1 rounded-xl text-base
         "
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div>
          <img
            src={emoji}
            alt="emoji"
            className="cursor-pointer   h-5 w-5 "
            onClick={() => setEmojiPick((prev) => !prev)}
          />
          {/* {emojiPick ? <EmojiPicker /> : null} */}
          <div className=" absolute bottom-12 right-0">
            <EmojiPicker open={emojiPick} onEmojiClick={emojiHnadler} />
          </div>
        </div>
        <button className="bg-[#11192880] px-2 py-1 rounded-md">Send </button>
      </div>
    </div>
  );
};

export default Chat;
