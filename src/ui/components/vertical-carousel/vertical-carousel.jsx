import { Box, Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { keyframes } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useMediaContext } from "../../../hooks/use-media-context.js";

const VerticalCarousel = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDesktop } = useMediaContext();

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === components.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? components.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return components.map((component, index) => (
    <Stack key={component}>
      {isDesktop ? (
        <Flex
          position="absolute"
          top="50%"
          left="95%"
          transform="translate(-50%, -50%)"
          zIndex="999"
          flexDirection="column"
          alignItems="center"
        >
          {components.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToIndex(index)}
              w="10px"
              h="10px"
              cursor="pointer"
              bg={index === currentIndex ? "#285B6E" : "white"}
              _hover={{ bg: "#285B6E" }}
              mb="10px"
            />
          ))}
        </Flex>
      ) : (
        <></>
      )}
      <Stack
        style={{
          display: index === currentIndex ? "block" : "none",
        }}
        css={css`
          animation: ${fadeInOut} 0.4s ease-out;
        `}
      >
        {component}
      </Stack>
    </Stack>
  ));
};

export default VerticalCarousel;
