import { TextInput, Input, Tooltip, Center, Button } from '@mantine/core';
import { IconCurrencyBitcoin } from "@tabler/icons";
import { useState, useEffect } from "react";

export default function Home() {

  const [address, setAddress] = useState("")

  const handleSearch = () => {
    console.log("searching for address: " + address)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
    }}>
      <Center>
        <Input
          icon={<IconCurrencyBitcoin size={16} />}
          style={{ width: 800, height: 60 }}
          size='xl'
          placeholder="Enter a Public Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button style={{ width: 200, height: 60 }} size='xl' variant='filled' onClick={handleSearch}>
          Search
        </Button>
      </Center>
    </div>
  )
}
