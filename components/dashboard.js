import { useState, useEffect } from "react";
import StatsRing from "../components/statsRing";
import TransactionsTable from "../components/transactionsTable";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Paper, Text } from "@mantine/core";
import Flow from "../components/transactionsGraph";
import TransactionInfo from "../components/transactionInfo";
import { createContext, useContext } from "react";

export const TransactionHashContext = createContext();

export default function Dashboard({
  walletHash,
  inputData,
  outputData,
  loading,
  error,
}) {
  const [info, setInfo] = useState({ hashID: null });

  // to be moved to a level before

  const [modelScore, setModelScore] = useState(0);
  const [webScore, setWebScore] = useState(0);

  useEffect(() => {
    async function fetchModelScore() {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/predict/${walletHash}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setModelScore(data.malicious_score * 100);

        // const

        const response2 = await fetch(
          `http://127.0.0.1:5000/blacklisted/${walletHash}`
        );
        if (!response2.ok) {
          throw new Error("Network response was not ok");
        }
        const data2 = await response2.json();
        webScore(data2.malicious_score == "invalid" ? 0 : 100);

        // setLoading(false);
      } catch (error) {
        // setError(error);
        console.log(error);
      }
    }

    fetchModelScore();
  }, []);

  function getColor(score) {
    return score <= 33 ? "red" : score <= 66 ? "orange" : "green";
  }

  function getIcon(score) {
    return score <= 33 ? "danger" : score <= 66 ? "neutral" : "safe";
  }
  const data = [
    {
      label: "Model trust score",
      progress: modelScore,
      color: getColor(modelScore),
      icon: getIcon(modelScore),
      type: "type1",
    },
    {
      label: "Web trust score",
      progress: webScore,
      color: getColor(webScore),
      icon: getIcon(webScore),
      type: "type2",
    },
    {
      label: "Coin data trust score",
      progress: 0,
      color: "red",
      icon: "danger",
      type: "type3",
    },
  ];

  // API to fetch the wallet transaction details
  // const [inputData, setInputData] = useState(null);
  // const [outputData, setOutputData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     if (walletHash != undefined)
  //       try {
  //         // console.log(`http://127.0.0.1:5000/transactions/${walletHash}`);
  //         const response = await fetch(
  //           `http://127.0.0.1:5000/transactions/${walletHash}`
  //         );
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const data = await response.json();
  //         console.log(data);
  //         setInputData(data.bitcoin.inputs);
  //         setOutputData(data.bitcoin.outputs);
  //         setLoading(false);
  //       } catch (error) {
  //         setError(error);
  //         setLoading(false);
  //       }
  //   }

  //   fetchData();
  // }, [walletHash]);

  return (
    <>
      {/* <div className="stats mt-5">
        <StatsRing data={data} />
      </div> */}
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
