import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const NodeContext = createContext();

export const NodeProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <NodeContext.Provider
      value={{
        nodes,
        setNodes,
        edges,
        setEdges,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};

NodeProvider.propTypes = {
  children: PropTypes.node,
};
