import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import PersonIcon from "@mui/icons-material/Person";

const handleStyle = {
  background: "grey",
  minWidth: "0px",
  maxWidth: "0px",
  minHeight: "0px",
  maxHeight: "0px",
};

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <div className="div">
        <Handle type="target" position={Position.Top} style={handleStyle} />
        <div className="rounded-full red p-0.5 bg-sky-500">
          <PersonIcon className="text-white " />
        </div>
        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={handleStyle}
        />
        {/* <Handle type="source" position={Position.Bottom} id="b" /> */}
      </div>
    </div>
  );
}

export default TextUpdaterNode;
