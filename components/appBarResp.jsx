import { useState } from "react";
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import NavbarMinimal from "./navbar";
import HeaderAction from "./header";

export default function AppShell_({ props }) {
  const theme = useMantineTheme();
  console.log("hello");
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme != "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarMinimal />}
      header={<HeaderAction />}
    >
      {props}
    </AppShell>
  );
}
