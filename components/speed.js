import React from "react";
import dynamic from "next/dynamic";

const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), {
  ssr: false,
});

function Speedometer() {
  return (
    <div>
      <ReactSpeedometer
        width={700}
        height={450}
        style={{ maxWidth: "100% !important" }}
        needleHeightRatio={0.6}
        value={800}
        // fluidWidth={true}
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
