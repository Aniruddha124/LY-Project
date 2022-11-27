import {
    createStyles,
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';

  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 400,
      boxSizing: 'border-box',
      backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
        theme.colors[theme.primaryColor][7]
      } 100%)`,
      borderRadius: theme.radius.md,
      padding: theme.spacing.xl * 2.5,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        padding: theme.spacing.xl * 1.5,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.white,
      lineHeight: 1,
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: 300,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    form: {
      backgroundColor: theme.white,
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },
  
 
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },
  
    inputLabel: {
      color: theme.black,
    },
  
    control: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  }));


  export default function AboutUs(){
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Title className={classes.title}>About us</Title>
             <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <Text className={classes.description} mt="sm" mb={30} size={'xl'}>
                    Proident magna fugiat elit anim adipisicing culpa amet. Labore pariatur reprehenderit anim id. Nostrud fugiat Lorem ullamco ullamco. Consequat quis dolor culpa nulla cupidatat laboris enim aute. Non mollit veniam sit aliquip officia nisi. Culpa fugiat esse culpa laboris consequat. Ad duis velit consequat dolore.
                </Text>   
                <Text className={classes.description} mt="sm" mb={30} size={'xl'}>
                    Adipisicing reprehenderit ullamco occaecat adipisicing. Dolore adipisicing ad fugiat id minim. Enim ad laborum nostrud elit laborum id sunt. Commodo magna adipisicing proident tempor velit id ex non nostrud. Laborum dolore sint id sunt fugiat veniam minim nisi amet commodo in. Pariatur enim labore anim sint consectetur duis reprehenderit adipisicing sit sint magna tempor nisi veniam. Duis Lorem adipisicing fugiat enim officia dolore adipisicing velit.
                </Text>
                <Text className={classes.description} mt="sm" mb={30} size={'xl'}>
                    Occaecat dolore aliqua nisi anim occaecat. Ex aliquip velit Lorem tempor fugiat adipisicing in Lorem sint exercitation amet in. Aliqua sit sint velit ex. Ad reprehenderit culpa proident ad anim velit proident sunt esse. Dolor cupidatat laborum est occaecat do. Sunt nostrud aliqua ad officia mollit ex laborum incididunt mollit elit nulla.
                </Text>
            </SimpleGrid>
        </div>
    );
  }