import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { useEffect, useState } from "react";

export default function ToggleDarkMode() {
  useEffect(() => {
    const stored = localStorage.getItem("verBTC_theme");
    if (stored) {
      setCTheme(stored);
    }
  }, []);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();
  const [cTheme, setCTheme] = useState("dark");

  const handleToggleTheme = () => {
    toggleColorScheme();
    setCTheme(cTheme === "dark" ? "light" : "dark");
    if (cTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mantine-color-scheme"));
    if (stored) {
      setCTheme(stored);
    }
    if (stored == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [cTheme]);

  return (
    <Group position="center" my={30}>
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => handleToggleTheme()}
        size="lg"
        onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
        offLabel={
          <IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />
        }
      />
    </Group>
  );
}
