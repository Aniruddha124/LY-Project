import { Button } from "@mantine/core";
import ToggleDarkMode from "../../components/toggleDarkMode";
import NavbarMinimal from "../../components/Navbar.tsx";

import { Header, Navbar, Paper, Text, Flex, Divider } from "@mantine/core";
import { ThemeIcon } from "@mantine/core";
import {
  IconWallet,
  IconArrowBigDown,
  IconArrowBigTop,
  IconHash,
  IconCurrencyBitcoin,
} from "@tabler/icons";

export default function Demo() {
  return (
    <>
      <Paper
        shadow="md"
        radius={"md"}
        p="lg"
        m={"md"}
        maw={{ base: "100%", sm: "100%", md: "80%", lg: "50%" }}
      >
        <Flex
          gap="xs"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <IconWallet />
          <Text c="teal.4" fz="lg" fw={"bold"}>
            Address{" "}
          </Text>
        </Flex>

        <Text mt={"md"}>bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</Text>
      </Paper>

      <Paper
        shadow="md"
        radius={"md"}
        p="lg"
        m={"md"}
        maw={{ base: "100%", sm: "100%", md: "80%", lg: "50%" }}
      >
        <Flex
          gap="xs"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <IconHash />
          <Text c="teal.4" fz="lg" fw={"bold"}>
            Transactions{" "}
          </Text>
        </Flex>
        <Text mt={"md"}>140</Text>
      </Paper>

      <Paper
        shadow="md"
        radius={"md"}
        p="lg"
        m={"md"}
        maw={{ base: "100%", sm: "100%", md: "80%", lg: "50%" }}
      >
        <Flex
          gap="xs"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <IconArrowBigDown />
          <Text c="teal.4" fz="lg" fw={"bold"}>
            Total Received{" "}
          </Text>
        </Flex>

        <Text mt={"md"}>13.04999870 BTC</Text>
      </Paper>

      <Paper
        shadow="md"
        radius={"md"}
        p="lg"
        m={"md"}
        maw={{ base: "100%", sm: "100%", md: "80%", lg: "50%" }}
        style={{}}
      >
        <Flex
          gap="xs"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <IconArrowBigTop />
          <Text c="teal.4" fz="lg" fw={"bold"}>
            Total Sent{" "}
          </Text>
        </Flex>

        <Text mt={"md"}>12.87005839 BTC</Text>
      </Paper>

      <Paper
        shadow="md"
        radius={"md"}
        p="lg"
        m={"md"}
        maw={{ base: "100%", sm: "100%", md: "80%", lg: "50%" }}
      >
        <Flex
          gap="xs"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <IconCurrencyBitcoin />
          <Text c="teal.4" fz="lg" fw={"bold"}>
            Final Balance{" "}
          </Text>
        </Flex>

        <Text mt={"md"}> 0.17994031 BTC</Text>
      </Paper>
    </>
  );
}
