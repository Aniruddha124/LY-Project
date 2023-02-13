import StatsRing from "../../components/statsRing";
import TransactionsTable from "../../components/transactionsTable";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Paper } from "@mantine/core";
// import { FileDownloadIcon, FileUploadIcon } from "@mui/icons-material";

export default function Dashboard() {
  const data = [
    {
      label: "something 1",
      progress: 88,
      color: "red",
      icon: "safe",
      type: "type1",
    },
    {
      label: "something 2",
      progress: 60,
      color: "green",
      icon: "neutral",
      type: "type2",
    },
    {
      label: "something 3",
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
      <div className="grid grid-cols-2 gap-10  mt-8">
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
    </>
  );
}
