/* eslint-disable react/prop-types */
import { Box, Flex, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

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
      <Flex justify="center" align="center" mt={8}>
        <YearItem
          year="2019"
          titleHover={'Primeiro Emprego'}
          image="https://via.placeholder.com/150"
          title="Trabalho como Designer"
          subtitle="Universidade Federal do Mato Grosso do Sul"
          description="Início da jornada profissional como designer e entrada na UFMS."
        />
        <YearItem
          year="2020"
          titleHover={'Primeiro Emprego'}
          image="https://via.placeholder.com/150"
          title="Primeiro Estágio como Desenvolvedor Web"
          subtitle="Promoção a Desenvolvedor Web"
          description="Primeiro estágio como desenvolvedor web, com posterior promoção."
        />
        <YearItem
          year="2021"
          titleHover={'Primeiro Emprego'}
          image="https://via.placeholder.com/150"
          title="Mudança para Startup como Frontend e UI Developer"
          subtitle=""
          description="Troca de emprego para uma startup como frontend e UI developer."
        />
        <YearItem
          year="2022"
          titleHover={'Primeiro Emprego'}
          image="https://via.placeholder.com/150"
          title="Trabalho na Lighthouse como Frontend Developer"
          subtitle=""
          description="Trabalho na Lighthouse focado apenas em desenvolvimento frontend."
        />
        <YearItem
          year="2023"
          titleHover={'Primeiro Emprego'}
          image="https://via.placeholder.com/150"
          title="Responsável por Time Frontend"
          subtitle="Papel de Referência Técnica"
          description="Tornou-se responsável por um time frontend, com papel de referência técnica."
        />
      </Flex>
    </Stack>
  );
};

const YearItem = ({
  year,
  titleHover,
  image,
  title,
  subtitle,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      pos="relative"
      borderWidth="1px"
      borderRadius="lg"
      cursor={'pointer'}
      h={isHovered ? '40rem' : '30rem'}
      w={isHovered ? '30rem' : '20rem'}
      overflow="hidden"
      mx={isHovered ? '10px' : '0rem'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition="all 0.3s"
      bg="black"
    >
      {isHovered ? (
        <VStack
          h="320rem"
          w="220rem"
          position={'absolute'}
          top={0}
          left={0}
          zIndex={1}
          align="start"
          spacing="2"
          bg="black"
          p="4"
          color="white"
          opacity={isHovered ? 1 : 0}
          transition="opacity 0.3s"
        >
          <Flex align="center" mb="4">
            <Image
              src={image}
              alt={`Image for ${year}`}
              boxSize="50px"
              mr="4"
            />
            <Text fontSize="xl" fontWeight="bold">
              {year}
            </Text>
          </Flex>
          <VStack align="start" spacing="2">
            <Text fontSize="lg" fontWeight="bold">
              {title}
            </Text>
            {subtitle && <Text>{subtitle}</Text>}
            <Text>{description}</Text>
          </VStack>
        </VStack>
      ) : (
        <Box
          h="100%"
          w="100%"
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Text as="h1" fontSize="5xl" color="white">
            {year}
          </Text>
          <Text as="h1">{titleHover}</Text>
        </Box>
      )}
    </Box>
  );
};

export default Timeline;
