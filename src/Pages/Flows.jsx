import Flow from "../Components/Flow";
import Nav from "../Components/Nav";
import SideBar from "../Components/SideBar";
import { NodeProvider } from "../Contexts/NodeContext";

const Flows = () => {
  return (
    <>
      <Nav />
      <div className="flex h-full">
        <NodeProvider>
          <SideBar />
          <Flow />
        </NodeProvider>
      </div>
    </>
  );
};

export default Flows;
