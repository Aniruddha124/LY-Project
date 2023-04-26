import { TextInput, Flex, Input, Tooltip, Center, Button } from "@mantine/core";
import { IconCurrencyBitcoin } from "@tabler/icons";
import { useState, useEffect } from "react";
import Link from "next/link";
import React, { Suspense } from "react";
import BitcoinModel from "../components/bit3";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRouter } from "next/router";

const validBitcoinAddress = (address) => {
  // Legacy format Bitcoin address regex pattern
  const legacyPattern = /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/;

  // SegWit format Bitcoin address regex pattern
  const segwitPattern = /^bc1[0-9A-Za-z]{39}$/;

  // bech32 format Bitcoin address regex pattern for testnet addresses
  const testnetPattern = /^tb1[0-9A-Za-z]{39}$/;

  if (
    legacyPattern.test(address) ||
    segwitPattern.test(address) ||
    testnetPattern.test(address)
  ) {
    return true;
  }
  return false;
};

export default function Home() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (validBitcoinAddress(address)) router.push(`/info/${address}`);
    else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
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
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 20]} intensity={0.4} />
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
        <div className="md:w-[60%] w-[100%] dark:bg-darkerbg bg-white rounded-md">
          <div className="flex items-center justify-center p-1">
            <IconCurrencyBitcoin size={50} color="#EBD053" className="p-1" />
            <input
              type="text"
              placeholder="Enter your text here..."
              className="w-full px-2 py-4 text-xl bg-white rounded-sm dark:text-white text-darkerbg focus:outline-none focus:border-none dark:bg-darkerbg"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            className="py-4 text-lg text-white rounded-md md:text-2xl px-7 bg-dark-comment hover:bg-dark-comment "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </Flex>
    </div>
  );
}
