import { useContext } from "react";
import { NodeContext } from "../Contexts/NodeContext";

const SideBar = () => {
  const { nodes, setNodes } = useContext(NodeContext);

  return (
    <div className="flex w-[30%] h-full bg-gray-200 flex-col gap-4 p-4">
      <button
        className="p-2 bg-blue-500 text-white capitalize"
        onClick={() => {
          setNodes([
            ...nodes,
            {
              id: `${nodes.length + 1}`,
              position: { x: 0, y: 0 },
              data: { emailId: "", emailText: "", emailNote: "" },
              type: "emailNode",
            },
          ]);
        }}
      >
        Add Email Node
      </button>
      <button
        className="p-2 bg-blue-500 text-white capitalize"
        onClick={() => {
          setNodes([
            ...nodes,
            {
              id: `${nodes.length + 1}`,
              data: { waitFor: "" },
              position: { x: 10, y: 10 },
              type: "waitNode",
            },
          ]);
        }}
      >
        Add Wait Node
      </button>
      <button
        className="p-2 bg-blue-500 text-white capitalize"
        onClick={() => {
          setNodes([
            ...nodes,
            {
              id: `${nodes.length + 1}`,
              data: {
                condition: "",
              },
              position: { x: 10, y: 10 },
              type: "decisionNode",
            },
          ]);
        }}
      >
        Add Decision Node
      </button>
      <button
        className="p-2 bg-blue-500 text-white capitalize"
        onClick={() => {
          setNodes([
            ...nodes,
            {
              id: `${nodes.length + 1}`,
              data: {
                type: "",
                note: "",
              },
              position: { x: 10, y: 10 },
              type: "customNode",
            },
          ]);
        }}
      >
        Add Custom Node
      </button>
      <button
        className="p-2 bg-green-500 text-white"
        onClick={() => {
          console.log(nodes);
        }}
      >
        Save
      </button>
      <button
        className="p-2 bg-red-500 text-white"
        onClick={() => {
          setNodes([]);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default SideBar;
