import { useCallback, useContext, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { NodeContext } from "../Contexts/NodeContext";
import CustomNode from "./CustomNode";
import DecisionNode from "./DescisionNode";
import EmailNode from "./EmailNode";
import WaitNode from "./WaitNode";

function Flow() {
  const { nodes, setNodes, edges, setEdges } = useContext(NodeContext);

  const nodeTypes = useMemo(
    () => ({
      emailNode: EmailNode,
      waitNode: WaitNode,
      decisionNode: DecisionNode,
      customNode: CustomNode,
    }),
    []
  );

  const onNodesChange = useCallback(
    (changes) => {
      return setNodes((nds) => {
        return applyNodeChanges(changes, nds);
      });
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        on
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
