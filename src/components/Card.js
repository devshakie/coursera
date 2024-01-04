import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBold, faImages } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
    <VStack
     spacing={4}
      borderRadius="md"
      overflow="hidden"
      bg="white"
      color="black"
      p={4}
      alignItems="flex-start"
    >
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
      />
      <VStack align="flex-start" spacing={2} >
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack>
        <Text fontWeight={faBold} fontSize="sm">
          See More
        </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
      </VStack>
     
    </VStack>
  )
};

export default Card;
