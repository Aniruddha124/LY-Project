import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { useRouter } from "next/router";
import { Text, Paper } from "@mantine/core";

export default function Graph_Test() {
  const router = useRouter();
  const { walletHash } = router.query;
  const [hydrated, setHydrated] = useState(false);
  const [nodeLength, setNodeLength] = useState(-1);
  const [graph, setGraph] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setGraph([]);
      if (walletHash != undefined)
        try {
          console.log("walletHash: ", walletHash);

          const response = await fetch(
            `http://127.0.0.1:5000/project_node/${walletHash}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          console.log(data.nodes.length);

          setNodeLength(data.nodes.length);

          setGraph(data);
          setHydrated(true);
        } catch (error) {
          console.log(error);
        }
    }
    // setHydrated(true);
    fetchData();
  }, [walletHash]);

  const options = {
    layout: {
      hierarchical: false,
    },
    shape: "circle",
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
  };

  return (
    // <Graph graph={graph}></Graph>
    <div>
      {nodeLength == 0 ? (
        <Paper shadow="xs" p="md">
          <Text ta="center" fz="xl" fw={700}>
            No Graph
          </Text>
        </Paper>
      ) : (
        <></>
      )}

      {nodeLength == -1 ? (
        <Paper shadow="xs" p="md">
          <Text ta="center" fz="xl" fw={700}>
            Loading Graph
          </Text>
        </Paper>
      ) : (
        <></>
      )}

      {nodeLength > 0 ? (
        <Paper shadow="xs" p="md">
          {hydrated && (
            <Graph graph={graph} options={options} events={events} />
          )}
        </Paper>
      ) : (
        <></>
      )}
    </div>
  );
}
