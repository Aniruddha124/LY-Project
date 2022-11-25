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
import { IconChevronDown ,IconCurrencyEthereum} from "@tabler/icons";
import ToggleDarkMode from "./toggleDarkMode";

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
    link: string,
    label: string,
    links: { link: string, label: string }[],
  }[];
}

export default function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          {/* <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          /> */}
          <IconCurrencyEthereum  size={38} />
          <Space w="sm" />
          <h4>AppName</h4>
        </Group>
        <ToggleDarkMode/>
      </Container>
    </Header>
  );
}
