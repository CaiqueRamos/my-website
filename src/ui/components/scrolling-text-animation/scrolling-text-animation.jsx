import { Flex, Stack, Text } from "@chakra-ui/react";
import { useMediaContext } from "../../../hooks/use-media-context";

function ScrollingTextAnimation() {
  const { isDesktop, isSmallHeight } = useMediaContext();
  return isDesktop ? (
    <Flex>
      <Text
        as="h1"
        color={"white"}
        fontFamily={"Bebas Neue, sans-serif"}
        fontSize={"6em"}
        lineHeight={isSmallHeight ? "120px" : "90px"}
        ml="-5px"
      >
        {"EXPERIÊNCIAS"}
      </Text>
      <Stack></Stack>
    </Flex>
  ) : (
    <Stack>
      <Text
        as="h1"
        color={"white"}
        fontFamily={"Bebas Neue, sans-serif"}
        fontSize={"4rem"}
        lineHeight={"1em"}
        ml={"-5px"}
      >
        {"EXPERIÊNCIAS"}
      </Text>
    </Stack>
  );
}

export default ScrollingTextAnimation;
