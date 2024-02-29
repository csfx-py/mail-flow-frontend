import { useState } from "react";
import "./App.css";
import Flow from "./Components/Flow";
import Nav from "./Components/Nav";
import SideBar from "./Components/SideBar";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  return (
    <div className="flex flex-col h-screen w-screen">
      <Nav />
      <div className="flex h-full">
        <SideBar nodes={nodes} setNodes={setNodes} />
        <Flow
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
        />
      </div>
    </div>
  );
}

export default App;
