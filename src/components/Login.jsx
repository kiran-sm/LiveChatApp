import React, { useState } from "react";
import avatarImg from "../assets/images/avatar.png";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../utils/upload";
import Loader from "./Loader";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // toast.error("Please Check mail and password");
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { userName, email, password } = Object.fromEntries(formData);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        userName,
        email,
        id: res.user.uid,
        avatar: imgUrl,
        blocked: [],
      });
      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: [],
      });
      toast.success("Account created, you can login Now");
    } catch (err) {
      console.log(err);
      console.error(err.message);
      toast.warning(`${err}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[100%] h-[100%] flex items-center gap-24 ">
      <div className="flex-1 flex flex-col items-center gap-5">
        <h2>Welcome back,</h2>
        <form
          className="flex flex-col items-center gap-5"
          onSubmit={handleLogin}
        >
          <input
            type="text"
            name="email"
            placeholder="email"
            className="p-3 border-none bg-[rgba(17,25,40,0.6)] text-white rounded-sm "
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border-none bg-[rgba(17,25,40,0.6)] text-white rounded-sm "
          />
          <button
            type="submit"
            className=" w-[100%] p-3 bg-[#1f8ef1] rounded-md cursor-pointer font-medium text-white "
          >
            Log in
          </button>
        </form>
      </div>
      <div className="h-[80%] w-[2px] bg-[#dddddd35] "></div>
      <div className="flex-1 flex flex-col items-center gap-5">
        <h2>Create an Account</h2>
        <form
          className="flex flex-col items-center gap-5"
          onSubmit={handleRegister}
        >
          <label
            htmlFor="file"
            className="w-[100%] flex items-center cursor-pointer justify-between underline"
          >
            <img
              src={avatar.url || avatarImg}
              alt="file image"
              className="w-12 h-12 rounded-full object-cover"
            />
            Upload an Image
          </label>

          <input type="file" id="file" hidden onChange={handleAvatar} />

          <input
            type="text"
            name="userName"
            placeholder="Name"
            className="p-3 border-none bg-[rgba(17,25,40,0.6)] text-white rounded-sm "
          />

          <input
            type="text"
            name="email"
            placeholder="email"
            className="p-3 border-none bg-[rgba(17,25,40,0.6)] text-white rounded-sm "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border-none bg-[rgba(17,25,40,0.6)] text-white rounded-sm "
          />

          <button
            type="submit"
            className=" w-[100%] p-3 bg-[#1f8ef1] rounded-md cursor-pointer font-medium text-white "
          >
            Sign Up
          </button>
        </form>
      </div>
      <div> {!loading ? <Loader /> : null}</div>
    </div>
  );
};

export default Login;
