import { TextInput, Input, Tooltip, Center, Button } from '@mantine/core';
import { IconCurrencyBitcoin } from "@tabler/icons";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { Text } from '@mantine/core';

export default function Home() {

  const [address, setAddress] = useState("")

  const handleSearch = () => {
    console.log("searching for address: " + address)
    // move to address page
    // <Link href="/address/[id]" as={`/address/${address}`}></Link>
  }

  return (
    <div style={{marginTop:'13%'}}>
      <Center style={{display:'flex'}}>
        <Text
          variant="gradient"
          gradient={{ from: '#bdc3c7', to: '#2c3e50', deg: 135 }}
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          ta="center"
          fw={800}
          style={{fontSize: '40px'}}
         >
          Ver.
        </Text>
        <Text style={{fontSize: '40px', color: '#e4b810'}} fw={800}>B</Text>
        <Text style={{fontSize: '40px', color: '#e4b810'}} fw={800}>T</Text>
        <Text style={{fontSize: '40px', color: '#e4b810'}} fw={800}>C</Text>
      </Center>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '20px',
      }}>
        
        <Center style={{width: '80%'}}>
          <Input
            icon={<IconCurrencyBitcoin size={16} />}
            style={{ width: '100%' }}
            size='xl'
            placeholder="Enter a Public Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Link href="/address/[id]" as={`/address/${address}`}>
            <Button style={{ width: '100%'}} size='xl' variant='filled' onClick={handleSearch}>
              Search
            </Button>
          </Link>
        </Center>
      </div>
    </div>

  )
}
