import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import EmailNode from "./EmailNode";
import { useMemo } from "react";
import { useContext } from "react";
import { NodeContext } from "../Contexts/NodeContext";
import WaitNode from "./WaitNode";
import DecisionNode from "./DescisionNode";
import CustomNode from "./CustomNode";

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

  const onNodesChange = useCallback((changes) => {
    return setNodes((nds) => {
      return applyNodeChanges(changes, nds);
    });
  }, [setNodes]);

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
