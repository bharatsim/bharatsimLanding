import React from 'react';
// import sections
// <Cta split/> after testimonial
import './People.css';
import { MdSettings,MdHeadset,MdLocationOn,MdEmail, MdWeb } from 'react-icons/md';
import {BsFillBriefcaseFill} from 'react-icons/bs';

import { HStack,Icon,Container,Text,Flex,Spacer,Box,useColorModeValue,Link,Image } from '@chakra-ui/react';

import { Center, Square, Circle } from '@chakra-ui/react'


function ProfileCard({name,title,email,img_url}){
  let url_email = "mailto:"+email;
  return (
    <Flex
    //   bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="310px"
        h="400px"
        mx="auto"
        my='auto'
        bg={useColorModeValue("white", "#351B59")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          boxSize='350px'
          h={56}
          objectFit="contain"
          objectPosition="center"
          src={img_url}
          alt="avatar"
        />

        <Box py={4} px={6}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            {name}
          </Text>
          <Text py={2} color={useColorModeValue("gray.700", "gray.400")}>
            {title}
          </Text>
{/*
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={BsFillBriefcaseFill}
              as={BsFillBriefcaseFill}
              h={6}
              w={6}
              mr={2}
            />

            <Text px={2} fontSize="sm">
              Choc UI
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >

          <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <Text px={2} fontSize="sm">
              California
            </Text>

          </Flex>*/}
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
            pb={2}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

          <Link href={url_email} isExternal>
            <Text px={2} fontSize="sm">
              {email}
            </Text>
          </Link>
          </Flex>



        </Box>
      </Box>
    </Flex>
  );
};
const People = () => {

  return (
    <>
    <div className="topContainer-people">
    <Flex direction="column">

        <Center>
          <Text fontSize='xl' fontWeight={700}> Ashoka University Team</Text>
        </Center>

      <Flex direction="row">

      <ProfileCard name="Gautam Menon" title="Professor of Physics and Biology" img_url="../assets/people/au_gautam_menon.jpg" email="gautam.menon@ashoka.edu.in"/>
      <ProfileCard name="Debayan Gupta" title="Assistant Professor of Computer Science" img_url={require('../assets/people/au_debayan_gupta.jpg')} email="debayan.gupta@ashoka.edu.in"/>
      <ProfileCard name="Bhavesh Neekhra" title="Graduate Student, Computer Science" img_url={require('../assets/people/au_bhavesh_neekhra.jpg')} email="bhavesh.neekhra_phd18@ashoka.edu.in"/>
      <ProfileCard name="Philip Cherian" title="Graduate Student, Physics" img_url={require('../assets/people/au_philip_cherian.jpg')} email="philip.cherian@ashoka.edu.in"/>

      </Flex>

      <br></br>
      <br></br>

      <Center>
      <Text fontSize='xl' fontWeight={700}> Thoughtworks Team</Text>
      </Center>

      <Flex direction="row">

      <ProfileCard name="Jayanta Kshirsagar" title="Engineering for Research" img_url={require('../assets/people/tw_jayanta_kshirsagar.jpg')} email="jayantak@thoughtworks.com"/>
      <ProfileCard name="Praveen Ninawe" title="Engineering for Research" img_url={require('../assets/people/tw_praveen_ninawe.jpg')} email="praveen.ninawe@thoughtworks.com"/>
      <ProfileCard name="Harshal Hayatnagarkar" title="Engineering for Research" img_url={require('../assets/people/tw_harshal_hayatnagarkar.jpg')} email="harshalh@thoughtworks.com"/>
      <ProfileCard name="Chhaya Yadav" title="Engineering for Research" img_url={require('../assets/people/tw_chhaya_yadav.jpg')} email="chhayay@thoughtworks.com"/>

      </Flex>



    </Flex>

    </div>



    </>
  );
}

export default People;
