import { Tabs, Text, Paper } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useRouter } from "next/router";
import WalletDetails from "../../components/primaryInfo";
import Dashboard from "../../components/dashboard";
import { useEffect, useState } from "react";
import Graph_Test from "../../components/AccountsGraph";
import { AnimatePresence, motion } from "framer-motion";
import AccountsGraph from "../../components/AccountsGraph";

export default function Details() {
  const router = useRouter();
  const { walletHash } = router.query;

  const [inputData, setInputData] = useState(null);
  const [outputData, setOutputData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [walletData, setWalletData] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [nodeLength, setNodeLength] = useState(-1);

  const [graph, setGraph] = useState([]);

  useEffect(() => {
    async function fetchTransactionData() {
      if (walletHash != undefined)
        try {
          console.log(`http://127.0.0.1:5000/transactions/${walletHash}`);
          const response = await fetch(
            `http://127.0.0.1:5000/transactions/${walletHash}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          setInputData(data.bitcoin.inputs);
          setOutputData(data.bitcoin.outputs);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
    }

    async function fetchWalletData() {
      if (walletHash != undefined)
        try {
          // console.log(`http://127.0.0.1:5000/transactions/${walletHash}`);
          const response = await fetch(
            `http://127.0.0.1:5000/wallet/${walletHash}`
          );
          const response2 = await fetch(
            `http://127.0.0.1:5000/score/${walletHash}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log("wallet data", data.bitcoin)
          setWalletData(data.bitcoin);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
    }

    async function fetchTransactionData() {
      if (walletHash != undefined)
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/transactions/${walletHash}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setInputData(data.bitcoin.inputs);
          setOutputData(data.bitcoin.outputs);
          setLoading(false);

          console.log(inputData);
        } catch (error) {
          setError(error);
        }
    }

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
          // console.log("-------------------");
          console.log(data);
          // console.log(data.nodes.length);

          setNodeLength(data.nodes.length);

          data.nodes.map(node => {

            console.log(node.id);

            node.hash = node.label;
            node.label = node.label.slice(0, 5) + "...";
            // node.labelOffset={ y: 25 }
            node.shape = 'circle'
            node.font = { color: "white" }
            node.icon = { face: 'FontAwesome', code: 'f007', color: 'white' }

            const color = node.score == 0 || node.score == -1 ? '#50fa7b' :
            node.score == 1 ? '#ff5555' : 'red';
            node.color = color;
          })

          setGraph(data);
          setHydrated(true);
        } catch (error) {
          console.log(error);
        }
    }
 


    fetchTransactionData();
    fetchWalletData();
    fetchData();

  }, [walletHash]);

  return (
    <div className="px-1 py-5 md:px-10">
      <Tabs
        color="#f1fa8c"
        variant="pills"
        radius="sm"
        defaultValue="primaryInfo"
      >
        <Tabs.List>
          <Tabs.Tab
            value="primaryInfo"
            className=" data-[active]:bg-[#70AF85] mr-5 text-base md:text-lg text-black dark:text-white  "
            icon={<IconPhoto size={30} color="#ff5555" />}
          >
            Primary Info
          </Tabs.Tab>
          <Tabs.Tab
            value="dashboard"
            className=" data-[active]:bg-[#70AF85] mr-5 text-base md:text-lg text-white  "
            icon={<IconMessageCircle size={30} color="#f1fa8c" />}
          >
            More info
          </Tabs.Tab>
          <Tabs.Tab
            value="graph"
            className=" data-[active]:bg-[#70AF85] mr-5 text-base md:text-lg text-white "
            icon={<AccountTreeIcon size={30} sx={{ color: "#8be9fd" }} />}
          >
            Graph
          </Tabs.Tab>
        </Tabs.List>
        <hr className="mt-4 border border-dark-comment" />

        <div className="mt-10">
          <Tabs.Panel value="primaryInfo" pt="xs">
            {loading ? (
              <div className="flex items-center justify-center h-[80vh] flex-col">
                <img
                  src="/bouncing_bitcoin.gif" // specify the path of your GIF file in the "public" folder
                  alt="Example GIF"
                  width={250} // specify the width of the image
                  height={100} // specify the height of the image
                />
                <h3 className="text-xl">Fetching Details</h3>
              </div>
            ) : (
              <div>
                <WalletDetails
                  walletData={walletData}
                  walletHash={walletHash}
                />
              </div>
            )}
          </Tabs.Panel>

          <Tabs.Panel value="dashboard" pt="xs">
            <Dashboard
              walletHash={walletHash}
              inputData={inputData}
              outputData={outputData}
              loading={loading}
              error={error}
            />
          </Tabs.Panel>

          <Tabs.Panel value="graph" pt="xs">
            <AccountsGraph   
              walletHash={walletHash} 
             
              hydrated={hydrated}
              nodeLength={nodeLength}
              graph={graph}

              />
          </Tabs.Panel>
        </div>
      </Tabs>
    </div>
  );
}
