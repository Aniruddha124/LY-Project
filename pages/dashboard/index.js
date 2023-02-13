import { useState } from "react";
import StatsRing from "../../components/statsRing";
import TransactionsTable from "../../components/transactionsTable";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Paper } from "@mantine/core";
// import { FileDownloadIcon, FileUploadIcon } from "@mui/icons-material";
import Flow from "../../components/transactionsGraph";
import TransactionInfo from "../../components/transactionInfo";
import { createContext, useContext } from "react";

export const TransactionHashContext = createContext();

export default function Dashboard() {
  // context for selected transaction in graph
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
  return (
    <>
      <div className="stats mt-5">
        <StatsRing data={data} />
      </div>
      <div className="grid md:grid-cols-2 gap-10  mt-8">
        <Paper shadow="xs" p="md">
          <FileDownloadIcon sx={{ color: "green" }} />
          <h3 className="mb-3 ml-2 inline-block">Inflow</h3>
          <TransactionsTable />
        </Paper>
        <Paper shadow="xs" p="md">
          <FileUploadIcon sx={{ color: "green" }} />
          <h3 className="mb-3 ml-2 inline-block">Outflow</h3>
          <TransactionsTable />
        </Paper>
      </div>

      <div className=" mt-8">
        <Paper shadow="xs" p="md">
          <AccountTreeIcon sx={{ color: "green" }} />
          <h3 className="mb-3 ml-2 inline-block">Graph</h3>
          <TransactionHashContext.Provider value={{ info, setInfo }}>
            <div className="wrapper grid md:grid-cols-2 gap-10">
              <div className="left ">
                <Flow />
              </div>
              <div className="right">
                <TransactionInfo />
              </div>
            </div>
          </TransactionHashContext.Provider>
        </Paper>
      </div>
    </>
  );
}
