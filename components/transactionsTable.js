import { Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";
import transactions from "../data/transactions.json";

const PAGE_SIZES = [10, 15, 20];

export default function TransactionsTable() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(transactions.slice(0, pageSize));

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(transactions.slice(from, to));
  }, [page, pageSize]);

  return (
    <Box sx={{ height: 400, wordWrap: "break-word" }}>
      <DataTable
        highlightOnHover
        records={records}
        columns={[
          { accessor: "Timestamp", width: 100 },
          { accessor: "Block", width: 100 },
          { accessor: "Amount (BTC)", width: 100 },
          {
            accessor: "Transaction",
            width: "100%",
          },
        ]}
        totalRecords={transactions.length}
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
      />
    </Box>
  );
}
