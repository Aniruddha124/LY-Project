import { Button } from "@mantine/core";
import ToggleDarkMode from "../../components/toggleDarkMode";
import NavbarMinimal from "../../components/Navbar.tsx";

import {
  Header,
  Navbar,
  Paper,
  Text,
  Flex,
  Divider,
  Grid,
} from "@mantine/core";
import { ThemeIcon } from "@mantine/core";
import {
  IconWallet,
  IconArrowBigDown,
  IconArrowBigTop,
  IconHash,
  IconCurrencyBitcoin,
} from "@tabler/icons";

import Speedometer from "../../components/speed";
export default function Demo() {
  return (
    <>
      <Grid>
        {/* <Grid.Col span={12}>
          <h1>This will be some title text which will cover whole width</h1>
        </Grid.Col> */}

        <Grid.Col span={12} md={5} lg={5}>
          <Flex
            gap="xs"
            m={"xs"}
            // style={{
            //   margin: "10px 100px",
            // }}
            // justify="center"
            // align="center"
            direction="column"
            // wrap="wrap"
          >
            <Paper
              shadow="md"
              radius={"md"}
              p="lg"
              m={"xs"}
              maw={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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

              <Text mt={"md"} style={{ wordWrap: "break-word" }}>
                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
              </Text>
            </Paper>

            <Paper
              shadow="md"
              radius={"md"}
              p="lg"
              m={"xs"}
              maw={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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
              m={"xs"}
              maw={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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
              m={"xs"}
              maw={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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
              m={"xs"}
              maw={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
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
          </Flex>
        </Grid.Col>
        <Grid.Col span={10} md={7} lg={7}>
          <Flex
            mih={"80vh"}
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Paper
              shadow="md"
              radius={"lg"}
              p="xl"
              m={"xs"}
              miw={{ base: "100%", sm: "100%", md: "80%", lg: "80%" }}
              align="center"

              //   justify="center"
            >
              <Speedometer />
            </Paper>
          </Flex>
        </Grid.Col>
      </Grid>
    </>
  );
}
