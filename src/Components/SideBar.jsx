import { useContext } from "react";
import { NodeContext } from "../Contexts/NodeContext";
import { useState } from "react";

const SideBar = () => {
  const { nodes, createFlow, editFlow, flows, setNodes, setEdges } =
    useContext(NodeContext);

  const [flowName, setFlowName] = useState("");
  const [selectedFlow, setSelectedFlow] = useState(null);

  return (
    <div className="flex w-[30%] h-full bg-gray-200 flex-col gap-4 p-4">
      <button
        className="p-2 bg-blue-500 text-white capitalize"
        onClick={() => {
          setNodes([]);
          setEdges([]);
          setFlowName("");
          setSelectedFlow(null);
        }}
      >
        Start new
      </button>
      <button
        className="p-2 bg-blue-500 text-white capitalize"
        onClick={() => {
          setNodes([
            ...nodes,
            {
              id: `${nodes.length + 1}`,
              position: { x: 0, y: 0 },
              data: { mailId: "", mailText: "", mailNote: "" },
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
      <div className="flex justify-between">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2"
          placeholder="Flow Name"
          value={flowName}
          onChange={(e) => setFlowName(e.target.value)}
          disabled={selectedFlow !== null}
        />
        {selectedFlow === null ? (
          <button
            className={`p-2 text-white ${
              flowName === "" ? "bg-gray-500" : "bg-green-500"
            } `}
            onClick={async () => {
              const id = createFlow(flowName);
              setSelectedFlow(id);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="p-2 bg-green-500 text-white"
            onClick={async () => {
              console.log(selectedFlow);
              await editFlow(selectedFlow);
            }}
          >
            Update
          </button>
        )}
      </div>
      <button
        className="p-2 bg-red-500 text-white"
        onClick={() => {
          setNodes([]);
        }}
      >
        Clear
      </button>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Flow List</h1>
        <div className="flex flex-col gap-2">
          {flows?.map((flow) => (
            <div
              key={flow._id}
              className="p-2 bg-gray-300"
              onClick={() => {
                setNodes(flow.nodes);
                setEdges(flow.edges);
                setFlowName(flow.flowName);
                setSelectedFlow(flow._id);
              }}
            >
              {flow.flowName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
