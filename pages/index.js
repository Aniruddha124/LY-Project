import { TextInput, Input, Tooltip, Center, Button } from '@mantine/core';
import { IconCurrencyBitcoin } from "@tabler/icons";
import { useState, useEffect } from "react";
import Link from 'next/link';
import React, { Suspense } from "react";
import BitcoinModel from "../components/Bit3"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Home() {

  const [address, setAddress] = useState("")

  const handleSearch = () => {
    console.log("searching for address: " + address)
    // move to address page
    // <Link href="/address/[id]" as={`/address/${address}`}></Link>
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      flexDirection: "column"
    }}>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 20, 20]} intensity={0.5} />
        <Suspense fallback={null}>
          <BitcoinModel />
        </Suspense>
      </Canvas>
      <Center>

        <Input
          icon={<IconCurrencyBitcoin size={16} />}
          style={{ width: 800, height: 60 }}
          size='xl'
          placeholder="Enter a Public Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <Link href="/address/[id]" as={`/address/${address}`}>
          <Button style={{ width: 200, height: 60 }} size='xl' variant='filled' onClick={handleSearch}>
            Search
          </Button>
        </Link>
      </Center>
    </div>
  )
}
