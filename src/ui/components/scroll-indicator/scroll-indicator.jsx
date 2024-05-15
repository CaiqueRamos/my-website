import { Box, Icon } from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { keyframes } from '@emotion/react';

const scrollAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const ScrollIndicator = () => (
  <Box
    mt="10px"
    bottom="320px"
    left="50%"
    transform="translateX(-50%)"
    animation={`${scrollAnimation} 0.8s infinite`}
    cursor="pointer"
  >
    <Icon as={MdKeyboardArrowDown} boxSize={"7vh"} color="gray.400" />
  </Box>
);

export default ScrollIndicator;
