import * as React from 'react';
import { useState } from 'react';
import { Box, Tab, Tabs, TextField } from '@mui/material';
import SearchBar from './searchbar';

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
      setTabIndex(newTabIndex);
  };
  return (
    <>
      <div style={{display:'flex', justifyContent: 'space-between', alignItems:'flex-end'}}>
        <h1 style={{color:'#fff', margin:0}}> BTPR</h1>
        <Box className='header' style={{float: 'right'}}>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab style={{ color: '#fff' }} label="Tab 1" />
            <Tab style={{ color: '#fff' }} label="Tab 2" />
            <Tab style={{ color: '#fff' }} label="Tab 3" />
          </Tabs>
        </Box>
      </div>
      <SearchBar />
    </>

  );
}
