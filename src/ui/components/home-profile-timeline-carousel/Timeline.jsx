/* eslint-disable react/prop-types */
import { Flex, Stack, Text } from '@chakra-ui/react';

const Timeline = () => {
  return (
    <Stack px="6rem" py="2rem" minH={'70rem'}>
      <Text
        as="h1"
        fontSize={'15rem'}
        fontFamily={'Bebas Neue, sans-serif'}
        color={'white'}
        ml="-10px"
      >
        FORMAÇÃO
      </Text>
      <Flex
        overflow={'scroll'}
        w={'80vw'}
        background={'#111111'}
        rounded={'10px'}
        boxShadow={'3px 3px 3px 3px white'}
      >
        <Stack>
          <Text color="#">2020 - 2021</Text>
          <Text>HUBKN</Text>
          <Text>Desenvolvedor web</Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Timeline;
