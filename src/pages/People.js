import React from "react";
import "./People.css";
import { MdEmail } from "react-icons/md";
import {
  Icon,
  Text,
  Flex,
  Box,
  useColorModeValue,
  Link,
  Image,
  Wrap,
  Center,
  WrapItem,
} from "@chakra-ui/react";
import { peopleData } from "../components/data";

const People = () => {
  return (
    <div className="topContainer-people">
      {peopleData?.map((obj, index) => (
        <div key={index}>
          <Center pt={50} pb={5}>
            <Text fontSize="xl" fontWeight={700}>
              {obj.title}
            </Text>
          </Center>
          <Wrap justify="center" maxW='1500px' p = 'auto' m = 'auto'>
            {obj?.peoples?.map((people) => (
              <WrapItem>
                <Center>
                  <ProfileCard
                    name={people.name}
                    title={people.affiliation}
                    img_url={people.photo}
                    email={people.email}
                  />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </div>
      ))}
    </div>
  );
};

function ProfileCard({ name, title, email, img_url }) {
  let url_email = "mailto:" + email;
  return (
    <Flex p={5} w="full" alignItems="center" justifyContent="center">
      <Box
        w="310px"
        h="400px"
        mx="auto"
        my="auto"
        bg={useColorModeValue("white", "#351B59")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          boxSize="350px"
          h={56}
          objectFit="contain"
          objectPosition="center"
          src={img_url || "/people/dummy.png"}
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
}

export default People;
