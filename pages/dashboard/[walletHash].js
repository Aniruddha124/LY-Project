import { useState, useEffect } from "react";
import StatsRing from "../../components/statsRing";
import TransactionsTable from "../../components/transactionsTable";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Paper, Text } from "@mantine/core";
// import { FileDownloadIcon, FileUploadIcon } from "@mui/icons-material";
import Flow from "../../components/transactionsGraph";
import TransactionInfo from "../../components/transactionInfo";
import { createContext, useContext } from "react";
import { useRouter } from "next/router";

export const TransactionHashContext = createContext();

export default function Dashboard() {
  // context for selected transaction in graph
  const router = useRouter();
  const { walletHash } = router.query;
  const [info, setInfo] = useState({ hashID: null });

  const data = [
    {
      label: "Model trust score",
      progress: 88,
      color: "red",
      icon: "safe",
      type: "type1",
    },
    {
      label: "Web trust score",
      progress: 60,
      color: "green",
      icon: "neutral",
      type: "type2",
    },
    {
      label: "Coin data trust score",
      progress: 20,
      color: "red",
      icon: "danger",
      type: "type3",
    },
  ];

  // API to fetch the wallet transaction details
  const [inputData, setInputData] = useState(null);
  const [outputData, setOutputData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (walletHash != undefined)
        try {
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
          setLoading(false);
        }
    }

    fetchData();
  }, [walletHash]);

  return (
    <>
      <div className="stats mt-5">
        <StatsRing data={data} />
      </div>
      <div className="grid md:grid-cols-2 gap-10  mt-8">
        <Paper shadow="xs" p="md">
          <FileDownloadIcon sx={{ color: "green" }} />
          <h3 className="mb-3 ml-2 inline-block">Inflow</h3>

          {loading ? (
            <Text>Loading</Text>
          ) : (
            <TransactionsTable transactionInfo={{ transactions: inputData }} />
          )}
        </Paper>
        <Paper shadow="xs" p="md">
          <FileUploadIcon sx={{ color: "green" }} />
          <h3 className="mb-3 ml-2 inline-block">Outflow</h3>
          {loading ? (
            <Text>Loading</Text>
          ) : (
            <TransactionsTable transactionInfo={{ transactions: outputData }} />
          )}
        </Paper>
      </div>

      <div className=" mt-8">
        <Paper shadow="xs" p="md">
          <AccountTreeIcon sx={{ color: "green" }} />
          <h3 className="mb-3 ml-2 inline-block">Graph</h3>
          <TransactionHashContext.Provider value={{ info, setInfo }}>
            <div className="wrapper grid md:grid-cols-2 gap-10">
              <div className="left ">
                {loading ? <Text>Loading</Text> : <Flow />}
              </div>
              <div className="right">
                {loading ? <Text>Loading</Text> : <TransactionInfo />}
              </div>
            </div>
          </TransactionHashContext.Provider>
        </Paper>
      </div>
    </>
  );
}
