import "./App.css";
import Flow from "./Components/Flow";
import Nav from "./Components/Nav";
import SideBar from "./Components/SideBar";
import { NodeProvider } from "./Contexts/NodeContext";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Nav />
      <div className="flex h-full">
        <NodeProvider>
          <SideBar />
          <Flow />
        </NodeProvider>
      </div>
    </div>
  );
}

export default App;
