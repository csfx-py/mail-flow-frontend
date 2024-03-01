import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import API from "../utils/API,js";

export const NodeContext = createContext();

export const NodeProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [flows, setFlows] = useState([]);

  useEffect(() => {
    API.get("/node/get")
      .then((res) => {
        if (res.data.success) {
          setFlows(res.data.flows);
        } else {
          throw new Error("Failed to get nodes");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getFlows = async () => {
    try {
      const res = await API.get("/node/get");
      if (res.data.success) {
        setFlows(res.data.flows);
      } else {
        throw new Error("Failed to get flows");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createFlow = async (flowName) => {
    try {
      const res = await API.post("/node/create", {
        flowName,
        nodes,
        edges,
      });
      if (res.data.success) {
        await getFlows();
        return res.data.flowId;
      } else {
        throw new Error("Failed to create flow");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editFlow = async (id) => {
    try {
      const res = await API.put(`/node/edit/${id}`, { nodes, edges });
      if (res.data.success) {
        await getFlows();
      } else {
        throw new Error("Failed to edit flow");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NodeContext.Provider
      value={{
        nodes,
        setNodes,
        edges,
        setEdges,
        createFlow,
        editFlow,
        flows,
        setFlows,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};

NodeProvider.propTypes = {
  children: PropTypes.node,
};
