import PropTypes from "prop-types";
import { useCallback, useContext } from "react";
import { Handle, Position } from "reactflow";
import { NodeContext } from "../Contexts/NodeContext";

function DecisionNode({ id, data }) {
  const { nodes, setNodes } = useContext(NodeContext);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const index = nodes.findIndex((node) => node.id === id);
      const newNodes = [...nodes];
      newNodes[index].data[name] = value;
      setNodes(newNodes);
    },
    [id, nodes, setNodes]
  );

  return (
    <div className="flex flex-col bg-white p-2 shadow-lg rounded-lg border-2 border-gray-300 gap-1">
      <Handle type="target" position={Position.Top} />
      <div className="flex gap-1">
        <label htmlFor="text" className="capitalize w-1/2">
          Condition:
        </label>
        <input
          id={id + "condition"}
          name="condition"
          onChange={onChange}
          className="nodrag border-2 border-gray-300 rounded-md px-2"
          value={data.condition}
        />
      </div>

      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}

DecisionNode.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
};

export default DecisionNode;
