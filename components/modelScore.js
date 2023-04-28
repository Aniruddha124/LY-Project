import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IconAlertTriangle, IconCircleCheck } from "@tabler/icons";
import { Flex, Text } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";

function ModelScore({ walletHash }) {
  // temp jugaad
  const [modelScore, setModelScore] = useState(-1);
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

        // const response2 = await fetch(
        //   `http://127.0.0.1:5000/blacklisted/${walletHash}`
        // );
        // if (!response2.ok) {
        //   throw new Error("Network response was not ok");
        // }
        // const data2 = await response2.json();
        // webScore(data2.malicious_score == "invalid" ? 0 : 100);

        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchModelScore();
  }, []);

  return (
    <div>
      <div>
        {modelScore != -1 ? (
          modelScore ? (
            <Flex
              gap="m"
              justify={{ sm: "center" }}
              align="center"
              direction="column"
              wrap="wrap"
              className="min-h-[250px]"
            >
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  transition: { duration: 1 },
                }}
              >
                <IconCircleCheck color="#50fa7b" size={180} />
              </motion.div>
              <Text
                ta="center"
                style={{ wordWrap: "break-word" }}
                className="mt-5 text-base font-semibold md:text-xl text-drac-green"
              >
                You can proceed with the given address for transactions.
                This is a safe address based on our model prediction.
              </Text>
            </Flex>
          ) : (
            <Flex
              gap="m"
              justify={{ sm: "center" }}
              align="center"
              direction="column"
              wrap="wrap"
              className="min-h-[250px]"
            >
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 360, 360, 0],
                  transition: { duration: 1, ease: "easeInOut" },
                }}
              >
                <IconAlertTriangle color="#ff5555" size={148} />
              </motion.div>
              <Text m={"xl"} className="mt-5 text-base font-semibold md:text-xl text-drac-red">
                Proceed at your own risk. The following address may be
                involved in illegal activities as per our model prediction.
              </Text>
            </Flex>
          )
        ) : (
          <div className="min-h-[250px]"></div>
        )}
      </div>
    </div>
  );
}

export default ModelScore;
