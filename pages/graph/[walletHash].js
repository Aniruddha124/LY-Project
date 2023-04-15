import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { useRouter } from "next/router";


export default function Graph_Test() {

    const router = useRouter();
    const { walletHash } = router.query;
    const [hydrated, setHydrated] = useState(false);
    const [graph, setGraph] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
        if (walletHash != undefined)
            try {
                console.log("walletHash: ", walletHash)

                const response = await fetch(
                    `http://127.0.0.1:5000/fetch_node/${walletHash}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data);
                setGraphData(data);
                setHydrated(true);
            } catch (error) {
                console.log(error);
            }
        }
        // setHydrated(true);
        fetchData();
    },[walletHash])

    const options = {
        layout: {
            hierarchical: false,
        },
        edges: {
            // color: "#000000"
            color: "#ffffff",
            arrows: {
                to: {
                    enabled: false,
                    scaleFactor: 1,
                    type: "arrow"
                }
            }
        },
        height: "500px"
    };

    const events = {
        select: function(event) {
          var { nodes, edges } = event;
        }
    };

    return ( 
        // <Graph graph={graph}></Graph>
        <div>
            {hydrated && <Graph graph={graph} options={options} events={events} />}
        </div>
    );
}
