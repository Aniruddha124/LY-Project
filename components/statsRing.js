import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
} from "@mantine/core";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { Tooltip, Button } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";
import { ThemeIcon } from "@mantine/core";

const icons = {
  safe: "SentimentSatisfiedAltOutlinedIcon",
  danger: "SentimentDissatisfiedOutlinedIcon",
  neutral: "SentimentNeutralOutlinedIcon",
};

const info = {
  type1: "Trust score based on our model",
  type2: "Trust score based on the known blacklisted dataset",
  type3: "Trust score based on our created coin ecosystem",
};

export default function StatsRing({ data }) {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const moreInfo = info[stat.type];
    const color =
      stat.progress <= 33 ? "red" : stat.progress <= 66 ? "orange" : "green";
    return (
      <Paper withBorder radius="md" p="sm" key={stat.label}>
        <Group className="relative">
          <RingProgress
            size={80}
            roundCaps
            thickness={9}
            sections={[{ value: stat.progress, color: color }]}
            label={
              <Center>
                {stat.icon == "safe" ? (
                  <SentimentSatisfiedAltOutlinedIcon />
                ) : stat.icon == "danger" ? (
                  <SentimentDissatisfiedOutlinedIcon />
                ) : (
                  <SentimentNeutralOutlinedIcon />
                )}
              </Center>
            }
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {stat.label}
            </Text>
            <Text weight={700} size="xl">
              {stat.progress}
            </Text>
          </div>
          <Tooltip
            label={moreInfo}
            multiline
            width={220}
            withArrow
            transition="fade"
            transitionDuration={200}
          >
            <Button variant="gradient" className="absolute top-0 right-0">
              <IconInfoCircle color="#37B24D" />
            </Button>
          </Tooltip>
        </Group>
      </Paper>
    );
  });
  return (
    <SimpleGrid
      cols={3}
      spacing={"lg"}
      breakpoints={[{ maxWidth: "sm", cols: 1 }]}
    >
      {stats}
    </SimpleGrid>
  );
}
