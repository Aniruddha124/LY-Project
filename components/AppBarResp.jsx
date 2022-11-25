import { useState } from "react";
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import NavbarMinimal from "../components/Navbar";
import HeaderAction from "../components/Header";

export default function AppShell_() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<NavbarMinimal />}
      header={<HeaderAction />}
    >
      <h3>this is the main text.</h3>
    </AppShell>
  );
}
