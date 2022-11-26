import { TextInput, Input, Tooltip, Center, Button } from '@mantine/core';
import { IconCurrencyBitcoin } from "@tabler/icons";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
    }}>
      <Center style={{ width: 1000, height: 200 }}>
        <Input
        icon={<IconCurrencyBitcoin size={16} />}
          style={{ width: 800, height: 60 }}
          size='xl'
          placeholder="Enter a Public Address"
        />
        <Button style={{ width: 200, height: 60 }} size='xl' variant='filled'>
          Search
        </Button>
      </Center>
    </div>
  )
}
