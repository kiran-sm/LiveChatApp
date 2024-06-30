import "./App.css";
import Chat from "./components/Chat";
import Detail from "./components/Detail";
import List from "./components/List";

function App() {
  return (
    <div className="w-[90vw] h-[90vh] bg-[#111928bf] rounded-md backdrop-blur-sm backdrop-saturate-50 border-[1px] border-s-white flex">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
