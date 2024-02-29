import PropTypes from "prop-types";

const SideBar = ({ nodes, setNodes }) => {
  return (
    <div className="flex w-[20%] h-full bg-gray-200 flex-col gap-4 p-4">
      <button className="p-4 bg-blue-500 text-white">Add Node</button>
      <button className="p-4 bg-green-500 text-white">Save</button>
      <button className="p-4 bg-red-500 text-white">Clear</button>
    </div>
  );
};

SideBar.propTypes = {
  nodes: PropTypes.array,
  setNodes: PropTypes.func,
};

export default SideBar;
