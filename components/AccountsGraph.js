import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { useRouter } from "next/router";
import { Text, Paper } from "@mantine/core";
import Link from "next/link";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { dark } from "@mui/material/styles/createPalette";


export default function AccountsGraph({walletHash,hydrated,nodeLength,graph}) {
  
 

 
  const [nodeInfo, setNodeInfo] = useState();
  const [showNodeInfo,setShowNodeInfo]=useState(false);

  async function handleClick(event) {

    setShowNodeInfo(false); 

   
    setNodeInfo();
   
    console.log('Node clicked: ', event.nodes);
    const clickedNodeId = event.nodes[0]; // Get the ID of the clicked node
    // console.log(graph)
    console.log(clickedNodeId)
    const nodes = graph.nodes; // Get an array of all the nodes in the graph
    const clickedNode = nodes.find(node => node.id === clickedNodeId); // Find the clicked node in the array
    // console.log('Clicked node details:', clickedNode.hash);
    const nodeHash = clickedNode?.hash
    console.log(nodeHash);

    // await response = (res) => fetch(
    //   `http://127.0.0.1:5000/wallet/${nodeHash}`
    // ).then(
    //   console.log(res.json())
    // )
    
    if(nodeHash!=undefined){
          const fetchWallet = async () => {
            try {
              const response = await fetch(`http://127.0.0.1:5000/wallet/${nodeHash}`);
              const data = await response.json();
              return data;
            } catch (error) {
              console.error(error);
            }
          };

          // fetchWallet(nodeHash)
          // console.log(fetchWallet(nodeHash).json().bitcoin)
          const response1 = await fetchWallet(nodeHash)

        
          
          console.log(response1.bitcoin)
          const data={};
          data['address']=nodeHash;
          data['total_transactions']=response1?.bitcoin.inputs[0]?.count
                                      + response1?.bitcoin?.outputs[0]?.count;
          data['total_recieved']=response1?.bitcoin?.inputs[0]?.value;
          data['total_sent']=response1?.bitcoin?.outputs[0]?.value;

          //console.log(response1.bitcoin.inputs[0].count)
          setNodeInfo(data)
          setShowNodeInfo(true)
    }

  

    console.log(nodeInfo);

  }

  useEffect(() => {
    // async function fetchData() {
    //   setGraph([]);
    //   if (walletHash != undefined)
    //     try {
    //       console.log("walletHash: ", walletHash);

    //       const response = await fetch(
    //         `http://127.0.0.1:5000/project_node/${walletHash}`
    //       );
    //       if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //       }
    //       const data = await response.json();
    //       // console.log("-------------------");
    //       console.log(data);
    //       // console.log(data.nodes.length);

    //       setNodeLength(data.nodes.length);

    //       data.nodes.map(node => {

    //         console.log(node.id);

    //         node.hash = node.label;
    //         node.label = node.label.slice(0, 5) + "...";
    //         // node.labelOffset={ y: 25 }
    //         node.shape = 'circle'
    //         node.font = { color: "white" }
    //         node.icon = { face: 'FontAwesome', code: 'f007', color: 'white' }

    //         const color = node.score == 0 || node.score == -1 ? '#50fa7b' :
    //         node.score == 1 ? '#ff5555' : 'red';
    //         node.color = color;
    //       })

    //       setGraph(data);
    //       setHydrated(true);
    //     } catch (error) {
    //       console.log(error);
    //     }
    // }
    // setHydrated(true);

    //fetchData();
    setShowNodeInfo(false);

   
  }, []);

  const options = {
    layout: {
      hierarchical: false,
    },

    physics: {
      enabled: true,
      hierarchicalRepulsion: {
        centralGravity: 0.0,
        springLength: 500,
        springConstant: 0.01,
        nodeDistance: 200,
        damping: 0.09,
      },
      solver: "hierarchicalRepulsion",
    },

    edges: {
      // color: "#000000"
      color: "#ffffff",
      arrows: {
        to: {
          enabled: false,
          scaleFactor: 1,
          type: "arrow",
        },
      },


    },

    height: "500px",
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
    click: handleClick,
  };

  return (
    // <Graph graph={graph}></Graph>
    <div>
      {nodeLength == 0 ? (
        <Paper className="px-2 py-4  shadow-md bg-darkerbg h-[500px]">
          <Text ta="center" fz="xl" fw={700}>
            No Graph
          </Text>
        </Paper>
      ) : (
        <></>
      )}

      {nodeLength == -1 ? (
        <Paper className=" px-2 py-4 shadow-md bg-darkerbg h-[500px]">
          <Text ta="center" fz="xl" fw={700}>
            Loading Graph
          </Text>
        </Paper>
      ) : (
        <></>
      )}

      {nodeLength > 0 ? (
        <div className=" shadow-md bg-darkerbg" >
          {hydrated && (
            <div className="relative">
              <Graph graph={graph} options={options} events={events} />
              {
                showNodeInfo ==true?
                  <div>
                    <div className="absolute rounded-md right-0 bottom-0  p-4 bg-dark-selection md:m-3 m-1">
                    <div className="mb-3">
                        <Text c="#bd93f9" fz="sm" className="text-white font-base md:font-bold m-{'sm'}">
                          Address{" "}
                        </Text>
                        <Text className="cursor-pointer underline"
                        >
                          <Link href={"./"+nodeInfo?.address}>{nodeInfo?.address}</Link>
                          {/* {nodeInfo?.inputs[0]?.count + nodeInfo?.outputs[0]?.count} */}
                         
                         
                        </Text>
                      </div>
                      <div className="mb-3">
                        <Text c="#bd93f9" fz="sm" className="text-white font-base md:font-bold m-{'sm'}">
                          Transactions{" "}
                        </Text>
                        <Text >
                        {nodeInfo?.total_transactions}
                          {/* {nodeInfo?.inputs[0]?.count + nodeInfo?.outputs[0]?.count} */}
                        
                        </Text>
                      </div>
                      <div className="mb-3">
                        <Text c="#bd93f9" fz="sm" className="text-white font-base md:font-bold m-{'sm'}">
                          Received{" "}
                        </Text>
                        <Text>
                        {nodeInfo?.total_recieved} BTC
                          {/* {nodeInfo?.inputs[0]?.count + nodeInfo?.outputs[0]?.count} */}
                         
                        </Text>
                      </div>
                      <div >
                        <Text c="#bd93f9" fz="sm" className="text-white font-base md:font-bold m-{'sm'}">
                          Sent{" "}
                        </Text>
                        <Text >
                          {/* {nodeInfo?.inputs[0]?.count + nodeInfo?.outputs[0]?.count} */}
                          {nodeInfo?.total_sent} BTC
                        </Text>
                      </div>
                    </div>
                  </div>:<></>
              }
            </div>
          )}
        </div>
      ) : (
        <></>
      )}


    </div>
  );
}
