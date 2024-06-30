import "./App.css";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import List from "./components/List";
import Login from "./components/Login";
import Notification from "./components/Notification";

function App() {
  const user = true;
  return (
    <div className="w-[90vw] h-[90vh] bg-[#111928bf] rounded-md backdrop-blur-sm backdrop-saturate-50 border-[1px] border-s-white flex">
      {!user ? (
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
