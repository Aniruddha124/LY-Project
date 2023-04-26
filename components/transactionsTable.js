import { Box, Paper, createStyles } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";

const PAGE_SIZES = [10, 15, 20];

const useStyles = createStyles((theme) => ({
  root: {
    borderRadius: 5,
    color: "white",
    maxWidth: "80vw",
    "&& tbody tr td": {
      fontSize: "15px",
      wordWrap: "break-word",
    },
  },
  header: {
    "&& th": {
      color: "white",
      backgroundColor: "#282a36",
      fontSize: "16px",
      paddingBottom: "16px",
      paddingTop: "16px",
    },
  },
  pagination: {
    backgroundColor: "#282a36",
    color: "white",
    // "&& button [data-active]": {
    //   backgroundColor: "red",
    // },
  },
}));

export default function TransactionsTable({ transactionInfo }) {
  const { classes } = useStyles();
  const rawTransactions = transactionInfo?.transactions;
  const transactions = rawTransactions?.map(
    ({
      block: {
        timestamp: { time: Timestamp },
      },
      transaction: { index: Block },
      value,
      transaction: { hash: Transaction },
    }) => ({
      Timestamp,
      Bitcoins: value,
      Block,
      Transaction,
    })
  );
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(transactions?.slice(0, pageSize));

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(transactions?.slice(from, to));
  }, [page, pageSize]);

  return (
    <Paper
      sx={{ height: 400, wordWrap: "break-word",width: "100%" }}
      className="text-black dark:text-white dark:bg-darkerbg bg-slate-100"
    >
      <DataTable
        classNames={classes}
        highlightOnHover
        records={records}
        columns={[
          { accessor: "Timestamp", width: 100 },
          { accessor: "Block", width: 100 },
          { accessor: "Bitcoins", width: 100 },
          {
            accessor: "Transaction",
            width: "100%",
          },
        ]}
        totalRecords={transactions?.length || 0}
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
        rowStyle={{ backgroundColor: "#282a36", color: "white", wordWrap: "break-word" }}
      />
    </Paper>
  );
}
