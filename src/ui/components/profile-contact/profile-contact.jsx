import { Flex, Text } from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <Flex w="100%" justifyContent={"center"} my="10">
      <Text fontFamily={" sans-serif"} _hover={{ color: "gray" }}>
        Para mais informações -{" "}
        <a href="mailto:caique.dev@hotmail.com">caique.dev@hotmail.com</a>
      </Text>
    </Flex>
  );
};

export default ContactMe;
