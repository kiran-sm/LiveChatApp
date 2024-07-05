import { useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import List from "./components/List";
import Login from "./components/Login";
import Notification from "./components/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useUserStore } from "./utils/userStore";

function App() {
  const { currentUser, fetchUserInfo, isLoading } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log("user id", user.uid);
      fetchUserInfo(user.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  // const user = false;
  console.log(currentUser);

  if (isLoading) {
    return (
      <div className="p-12 text-4xl rounded-lg bg-[rgba(17,25,40,0.9)]">
        Loading...
      </div>
    );
  }
  return (
    <div className="w-[90vw] h-[90vh] bg-[#111928bf] rounded-md backdrop-blur-sm backdrop-saturate-50 border-[1px] border-s-white flex">
      {!currentUser ? (
        <Login />
      ) : (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      )}
      <Notification />
    </div>
  );
}

export default App;
