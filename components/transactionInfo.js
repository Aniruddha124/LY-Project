import { useContext } from "react";
import { Text, Divider, Card } from "@mantine/core";
import { TransactionHashContext } from "../pages/dashboard/index";

export default function TransactionInfo() {
  const { info } = useContext(TransactionHashContext);

  return (
    <>
      {info.hashID ? (
        <Card shadow="xs" p="lg">
          <div>
            <Text size="md" weight={500} className="mb-3 mt-4 break-words">
              <b>Transaction Hash: </b>
              {info.hashID}
            </Text>
            <Divider />
            <Text size="md" weight={500} className="mb-3 mt-4 break-words">
              <b>From :</b> {info.from}
            </Text>
            <Divider />

            <Text size="md" weight={500} className="mb-3 mt-4 break-words">
              <b> To:</b> {info.to}
            </Text>
            <Divider />

            <Text size="md" weight={500} className="mb-3 mt-4 break-words">
              <b>Timestamp:</b> 2023-02-06 20:19:09
            </Text>
            <Divider />

            <Text size="md" weight={500} className="mb-3 mt-4 break-words">
              <b>Index in Block:</b> 1350
            </Text>
            <Divider />

            <Text size="md" weight={500} className="mb-3 mt-4 break-words">
              <b> Input Value:</b> 0.0029674 BTC{" "}
            </Text>
            <Divider />

            <Text size="md" weight={500} className="mb-3 mt-4 break-words">
              <b> Output Value:</b> 0.0029348 BTC{" "}
            </Text>
            <Divider />

            <Text size="md" weight={500} className="mb-3 mt-4 break-words">
              <b> Fee:</b> 0.0000326 BTC
            </Text>
          </div>
        </Card>
      ) : (
        <Card p="md">
          <Text size="lg" weight={500} className="mb-3 mt-4 break-words">
            <h1>Select an edge to get the details of the transaction.</h1>
          </Text>
        </Card>
      )}
    </>
  );
}
