import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, ColorScheme, ColorSchemeProvider, Header, MantineProvider, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import NavbarMinimal from '../components/Navbar';
import HeaderAction from "../components/Header";


export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const theme = useMantineTheme();

  return (  
    <>
      <Head>
        <title>Search</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
      <AppShell
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarMinimal />}
      // header={<HeaderAction />}
      header={<HeaderAction />}
    >
      {/* {props} */}
      <Component {...pageProps} />
    </AppShell>
        
      </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}