import StatsRing from "../../components/statsRing";
import TransactionsTable from "../../components/transactionsTable";

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
      label: "something 1",
      progress: 20,
      color: "red",
      icon: "danger",
      type: "type3",
    },
  ];
  return (
    <>
      <StatsRing data={data} />
      <div className="mt-20 grid grid-cols-2 gap-10">
        <div>
          <TransactionsTable />
        </div>
        <div>
          <TransactionsTable />
        </div>
      </div>
    </>
  );
}
