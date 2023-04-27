import { Button } from "@mantine/core";
import ToggleDarkMode from "../components/toggleDarkMode";
import NavbarMinimal from "../components/navbar.tsx";

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
  IconCurrencyDollar
} from "@tabler/icons";
import { AnimatePresence, motion } from "framer-motion";

import ModelScore from "./modelScore";
export default function WalletDetails({ walletData, walletHash }) {
  return (
    <>
      <div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full">
          <Paper
            shadow="md"
            radius={"lg"}
            p="xl"
            align="center"
            className="w-full text-black dark:text-white dark:bg-darkerbg bg-slate-100"
          >
            <ModelScore walletHash={walletHash} />
          </Paper>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Paper
              shadow="md"
              radius={"md"}
              className="px-6 py-5 text-black dark:text-white dark:bg-darkerbg bg-slate-100 "
            >
              <div className="flex flex-row flex-wrap gap-3">
                <IconWallet color="#bd93f9" />
                <Text c="#bd93f9" fz="lg" className="text-white font-base md:font-bold">
                  Address{" "}
                </Text>
              </div>
              <Text mt={"md"} style={{ wordWrap: "break-word" }}>
                {walletHash}
              </Text>
            </Paper>

            <Paper
              shadow="md"
              radius={"md"}
              className="px-6 py-5 text-black dark:text-white dark:bg-darkerbg bg-slate-100 "
            >
              <div className="flex flex-row flex-wrap gap-3">
                <IconHash color="#bd93f9"/>
                <Text c="#bd93f9" fz="lg" className="text-white font-base md:font-bold">
                  Transactions{" "}
                </Text>
              </div>
              <Text mt={"md"}>
                {walletData?.inputs[0].count + walletData?.outputs[0].count}
              </Text>
            </Paper>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
            <Paper
              shadow="md"
              radius={"md"}
              className="px-6 py-5 text-black dark:text-white dark:bg-darkerbg bg-slate-100 "
            >
              <div className="flex flex-row flex-wrap gap-3">
                <IconArrowBigDown color="#bd93f9"/>
                <Text c="#bd93f9" fz="lg" className="text-white font-base md:font-bold">
                  Total Received{" "}
                </Text>
              </div>

              <Text mt={"md"}>{walletData?.inputs[0].value} BTC</Text>
            </Paper>

            <Paper
              shadow="md"
              radius={"md"}
              className="px-6 py-5 text-black dark:text-white dark:bg-darkerbg bg-slate-100 "
            >
              <div className="flex flex-row flex-wrap gap-3">
                <IconArrowBigTop color="#bd93f9"/>
                <Text c="#bd93f9" fz="lg" className="text-white font-base md:font-bold">
                  Total Sent{" "}
                </Text>
              </div>

              <Text mt={"md"}>{walletData?.outputs[0].value} BTC</Text>
            </Paper>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
            <Paper
              shadow="md"
              radius={"md"}
              className="px-6 py-5 text-black dark:text-white dark:bg-darkerbg bg-slate-100 "
            >
              <div className="flex flex-row flex-wrap gap-3">
                <IconCurrencyBitcoin color="#bd93f9"/>
                <Text c="#bd93f9" fz="lg" className="text-white font-base md:font-bold">
                  Final Balance{" "}
                </Text>
              </div>

              <Text mt={"md"}>
                {parseFloat(
                  Math.abs(
                    walletData?.outputs[0].value - walletData?.inputs[0].value
                  )
                ).toFixed(8)}{" "}
                BTC
              </Text>
            </Paper>

            <Paper
              shadow="md"
              radius={"md"}
              className="px-6 py-5 text-black dark:text-white dark:bg-darkerbg bg-slate-100 "
            >
              <div className="flex flex-row flex-wrap gap-3">
                <IconCurrencyDollar color="#bd93f9"/>
                <Text c="#bd93f9" fz="lg" className="text-white font-base md:font-bold">
                  Final Balance (USD)
                </Text>
              </div>
                <Text mt={"md"}>
                {parseFloat(
                  Math.abs(
                    walletData?.outputs[0].value_usd - walletData?.inputs[0].value_usd
                  )
                ).toFixed(8)}{" "}
              </Text>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
}
