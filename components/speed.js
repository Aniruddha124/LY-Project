import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), {
  ssr: false,
});

function Speedometer({ walletHash }) {
  // temp jugaad
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

  return (
    <div>
      <ReactSpeedometer
        width={700}
        height={450}
        style={{ maxWidth: "100% !important" }}
        needleHeightRatio={0.6}
        value={(modelScore + webScore) * 10}
        customSegmentStops={[0, 250, 750, 1000]}
        segmentColors={["#fa5252", "#ffa94d", "#a9e34b"]}
        currentValueText="Safety level"
        customSegmentLabels={[
          {
            text: "Fraudulent",
            position: "OUTSIDE",
            color: "#d8dee9",
          },
          {
            text: "Suspicious",
            position: "OUTSIDE",
            color: "#d8dee9",
          },
          {
            text: "Safe",
            position: "OUTSIDE",
            color: "#d8dee9",
          },
        ]}
        ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={"#a7ff83"}
        textColor={"#d8dee9"}
      />
    </div>
  );
}

export default Speedometer;
