import React from 'react';
import { Stack,Button,HStack ,VStack, theme,Container,Text,Flex, Spacer,Box,useColorModeValue,LinkImage,Image,Link} from '@chakra-ui/react'
// import SectionImgA from '../assets/tsne.png'
import {Link as InnerLink} from 'react-router-dom'

function Cards(props){
    return (
<Flex
bg={useColorModeValue("#F9FAFB", "gray.600")}
p={50}
w="auto"
alignItems="center"
justifyContent="center"
flexDirection="column"
>
  <Box
    bg={useColorModeValue("gray.100", "gray.700")}
    mx={{ lg: 8 }}
    display={{ lg: "flex" }}
    maxW={{ lg: "xl" }}
    shadow={{ lg: "lg" }}
    rounded={{ lg: "lg" }}
  >
      <Box w={{ lg: "30%" }} backgroundColor='tomato'>
        <Box
          h={{ base: 64, lg: "full" }}
          rounded={{ lg: "lg" }}
          bgSize="cover"
          bgRepeat="none"
          backgroundImage={"url('" + props.imageUrl + "')"}
        ></Box>
        <Image src={props.imageUrl}></Image>
      </Box>

  <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
    <Text
      fontSize={{ base: "2xl", md: "3xl" }}
      color={useColorModeValue("gray.800", "white")}
      fontWeight="bold"
    >
      {props.title}
    </Text>
    <Text mt={4} color={useColorModeValue("gray.600", "gray.400")}>
      {props.body}
    </Text>

    <Box mt={8}>
      <InnerLink to={props.external_link}>
      <Button

        bg="gray.900"
        color="gray.100"
        px={5}
        py={3}
        fontWeight="semibold"
        rounded="lg"
        _hover={{ bg: "gray.800" }}
      >
       Read More
      </Button>
      </InnerLink>
    </Box>

  </Box>
</Box>

</Flex>
    );
  };


  function Ma (props) {
    return (
      <Flex
      px={2}
      pb={4}
      bg={"transparent"}
      direction="column"
      w="full"
      justify='space-around'
      >
        <Box
          maxW="5xl"
          mx="auto"
          // minH="xl"
          minH="700px"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
        >
          <Box minH="10%">
          <Image
            w="350px"
            h="300px"
            mt="20%"
            p="5%"
            objectFit="contain"
            src={props.imageUrl}
            alt="img1"
          />
          </Box>
          <Spacer></Spacer>
          <Box px={4} py={2}>
            <Text
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"

            >
              {props.title}
            </Text>
            <Text
              mt={1}
              mb={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {props.body}
            </Text>
            <Box mt={7} mb={4}>
              <InnerLink to={props.external_link}>
              <Button
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{ bg: "black.800" }}
                to={props.external_link}>
              Read More
              </Button>
              </InnerLink>
           </Box>
          </Box>


        </Box>
      </Flex>
    );
  };

  const Projects = (props) => {

 return(
   <Container w="full" maxW={"6xl"}  >
      <HStack spacing={2}>
        <Ma imageUrl={require('../assets/components_synthpop.png')}  external_link="/synthetic_population" title="The Synthetic Population" body="A synthetic representation of the Indian population in each district containing for each agent attributes like home and work locations, age, and gender."/>
        <Ma imageUrl={require('../assets/components_simulation_engine.png')}  external_link="/simulation_engine" title="The Simulation Engine" body="A simulation framework to model agents with heteregenous attributes and in a realistic geographical background."/>
        <Ma imageUrl={require('../assets/components_visualization_engine.png')}  external_link="/viz_engine" title="The Visualization Engine" body=" A web app that enables visualization of the output of the simulation engine and the synthetic population."/>
      </HStack>
    </Container>
 );
  }

    export default Projects;
