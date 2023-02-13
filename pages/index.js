import { TextInput, Flex, Input, Tooltip, Center, Button } from "@mantine/core";
import { IconCurrencyBitcoin } from "@tabler/icons";
import { useState, useEffect } from "react";
import Link from "next/link";
import React, { Suspense } from "react";
import BitcoinModel from "../components/bit3";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  const [address, setAddress] = useState("");

  const handleSearch = () => {
    console.log("searching for address: " + address);
    // move to address page
    // <Link href="/address/[id]" as={`/address/${address}`}></Link>
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "60vh",
      }}
    >
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 20, 20]} intensity={0.5} />
        <Suspense fallback={null}>
          <BitcoinModel />
        </Suspense>
      </Canvas>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        style={{ width: "100%" }}
      >
        <div style={{ width: "60%" }}>
          <Input
            icon={<IconCurrencyBitcoin size={16} />}
            size="xl"
            placeholder="Enter a Public Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <Link href="/address/[id]" as={`/address/${address}`}>
            <Button
              style={{ width: "100%" }}
              size="xl"
              variant="filled"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Link>
        </div>
      </Flex>
    </div>
  );
}
