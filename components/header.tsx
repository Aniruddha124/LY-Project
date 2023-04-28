import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconCurrencyEthereum,
  IconCurrencyBitcoin,
} from "@tabler/icons";
import ToggleDarkMode from "./toggleDarkMode";
import { useRouter } from "next/router";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}

export default function HeaderAction() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 4 }}
      mb={120}
      className="bg-gray-100 dark:bg-darkerbg"
    >
      <Container className={classes.inner} fluid>
        <Group>
          <div className="flex cursor-pointer" onClick={() => handleHomeClick()}>
            <IconCurrencyBitcoin size={38} color="#EBD053" />
            <h3 className="text-2xl font-bold text-[#EBD053]">VerBTC</h3>
          </div>
        </Group>
        <ToggleDarkMode />
      </Container>
    </Header>
  );
}
