import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import PropTypes from "prop-types";
import { NodeContext } from "../Contexts/NodeContext";
import { useContext } from "react";

function EmailNode({ id }) {
  const { nodes, setNodes } = useContext(NodeContext);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const index = nodes.findIndex((node) => node.id === id);
      const newNodes = [...nodes];
      newNodes[index].data[name] = value;
      setNodes(newNodes);
    },
    [nodes, id, setNodes]
  );

  return (
    <div className="flex flex-col bg-white p-2 shadow-lg rounded-lg border-2 border-gray-300 gap-1">
      <Handle type="target" position={Position.Top} />
      <div className="flex gap-1">
        <label htmlFor="text" className="capitalize w-1/2">
          email id:
        </label>
        <input
          id={id + "mailId"}
          name="mailId"
          onChange={onChange}
          className="nodrag border-2 border-gray-300 rounded-md px-2"
        />
      </div>
      <div className="flex gap-1">
        <label htmlFor="text" className="capitalize w-1/2">
          email text:
        </label>
        <input
          id={id + "mailText"}
          name="mailText"
          onChange={onChange}
          className="nodrag border-2 border-gray-300 rounded-md px-2"
        />
      </div>
      <div className="flex gap-1">
        <label htmlFor="text" className="capitalize w-1/2">
          Optional Note:
        </label>
        <input
          id={id + "mailNote"}
          name="mailNote"
          onChange={onChange}
          className="nodrag border-2 border-gray-300 rounded-md px-2"
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}

EmailNode.propTypes = {
  id: PropTypes.string,
};

export default EmailNode;
