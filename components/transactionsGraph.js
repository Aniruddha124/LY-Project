import { useCallback, useState, useContext } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { TransactionHashContext } from "../pages/dashboard/index";
import TextUpdaterNode from "./TextUpdaterNode.js";

const rfStyle = {
  backgroundColor: "white",
  minHeight: "500px ",
  minWidth: "100px",
  maxWidth: "100%",
  maxHeight: "90%",
};

const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "2",
    type: "textUpdater",
    position: { x: -30, y: 100 },
    data: { label: "2" },
  },
  {
    id: "3",
    type: "textUpdater",
    position: { x: 50, y: 150 },
    data: { label: "4" },
  },
  {
    id: "4",
    type: "textUpdater",
    position: { x: 80, y: -50 },
    data: { label: "4" },
  },
];

const initialEdges = [
  {
    id: "temp1",
    source: "1",
    target: "2",
    label: "1 BTC",
    animated: true,
    style: { fontSize: "300px" },
    transactionHash: "bc1qwukmzzjqn5hwsp4uaswc4c53gc0xz5asrv0prx",
    from: "lk1qwukmz4jqn5hwsp4uasw34567c0xz5aoasdoih34",
    to: "lksndf4kmzzjqn5hwsp4uaswc4c53gc0xz5asrv0prx",
  },
  {
    id: "temp2",
    source: "1",
    target: "3",
    label: "0.03 BTC",
    animated: true,
    transactionHash:
      "f77c9a5e65868bb3fb2604bd9c645a80415a65f647fb6c9cbcc37317313c70fc",
    from: "bc1qwukmzzjqn5hwsp4uaswc4c53gc0xz5asrv0prx",
    to: "lk1qwukmz4jqn5hwsp4uasw34567c0xz5aoasdoih34",
  },
  {
    id: "temp3",
    source: "4",
    target: "1",
    label: "0.08 BTC",
    animated: true,
    transactionHash:
      "027dbb319249c49e8c973f9486e15dc3c614c63f120911d2ed85a82ff5f1cd85",
    from: "pqwoe2sjqn5hwsp4234fez5aoasdoih34344",
    to: "psoddf34zzjqn5hwsp4uaskndfkos34c0xz5assdmf",
  },
];
const nodeTypes = { textUpdater: TextUpdaterNode };

function Flow() {
  const { info, setInfo } = useContext(TransactionHashContext);
  console.log("state is", info);

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((eds) => {
        console.log(changes);
        return applyEdgeChanges(changes, eds);
      }),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const onEdgeClick = (event, edge) => {
    setInfo({ ...edge, hashID: edge.transactionHash });
  };

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeClick={onEdgeClick}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      />
    </>
  );
}

export default Flow;
