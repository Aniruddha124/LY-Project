import { Tabs, Text, Paper } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings} from "@tabler/icons";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useRouter } from "next/router";
import WalletDetails from "../../components/primaryInfo";
import Dashboard from "../../components/dashboard";
import { useEffect, useState } from "react";
import Graph_Test from "../graph/[walletHash]";


export default function Details() {
  const router = useRouter();
  const { walletHash } = router.query;

  const [inputData, setInputData] = useState(null);
  const [outputData, setOutputData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [walletData, setWalletData] = useState(null);

  useEffect(() => {
    async function fetchTransactionData() {
      if (walletHash != undefined)
        try {
          // console.log(`http://127.0.0.1:5000/transactions/${walletHash}`);
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

          console.log(inputData);
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
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log("wallet data", data);
          setWalletData(data.bitcoin);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
    }

    fetchTransactionData();
    fetchWalletData();
  }, [walletHash]);

  return (
    <Tabs color="cyan" variant="pills" radius="sm" defaultValue="primaryInfo">
      <Tabs.List>
        <Tabs.Tab value="primaryInfo" icon={<IconPhoto size={20} />}>
          Primary Info
        </Tabs.Tab>
        <Tabs.Tab value="dashboard" icon={<IconMessageCircle size={20} />}>
          More info
        </Tabs.Tab>
        <Tabs.Tab value="graph" icon={<AccountTreeIcon size={20} />}>
         Graph
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="primaryInfo" pt="xs">
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <WalletDetails walletData={walletData} walletHash={walletHash} />
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
        <Graph_Test/>
      </Tabs.Panel>


    </Tabs>
  );
}
