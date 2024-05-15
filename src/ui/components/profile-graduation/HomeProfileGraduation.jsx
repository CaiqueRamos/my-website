import { Flex, Image, Stack, Text, VStack, HStack } from "@chakra-ui/react";
import MyGaleryOne from "../../assets/my-galery-one.png";
import MyGaleryTwo from "../../assets/my-galery-two.png";
import MyGaleryThree from "../../assets/my-galery-three.png";
import MyGaleryFour from "../../assets/my-galery-four.png";
import { useMediaContext } from "../../../hooks/use-media-context";

export function HomeProfileGraduation() {
  const { isDesktop, isSmallHeight } = useMediaContext();
  return isDesktop ? (
    <Stack>
      <HStack justifyContent={"space-between"} alignItems="flex-start">
        <Stack w="40vw">
          <Text
            as="h1"
            fontSize="9em"
            fontFamily={"Bebas Neue, sans-serif"}
            color={"white"}
            ml="-10px"
            lineHeight="1em"
          >
            FORMAÇÃO
          </Text>
          {!isSmallHeight && (
            <Stack mr="40px">
              <Text as="p">
                Sou formado em Análise e Desenvolvimento de Sistemas pela
                Universidade Federal do Mato Grosso do Sul. Durante minha
                trajetória acadêmica, participei ativamente do PET-Sistemas,
                onde contribuí em diversos projetos. <br />
                <br />
                Um dos meus principais projetos foi o desenvolvimento de aulas
                de informática profissionalizante, além de um projeto voltado
                para previsão de cheias no Pantanal. Além disso, tive a
                oportunidade de me envolver com esportes, representando a
                universidade em campeonatos universitários e estaduais de
                basquete como membro da atlética. Nessa mesma organização,
                exerci o cargo de diretor de arte, o que me permitiu desenvolver
                habilidades de liderança e criatividade.
              </Text>
            </Stack>
          )}
        </Stack>
        <Stack
          display={"grid"}
          gridTemplateColumns={"auto auto"}
          gridTemplateRows={"auto auto"}
          gap={"10px"}
        >
          <Image src={MyGaleryOne} h="40vh" />
          <Image src={MyGaleryTwo} h="40vh" />
          <Image src={MyGaleryThree} h="40vh" />
          <Image src={MyGaleryFour} h="40vh" />
        </Stack>
      </HStack>
    </Stack>
  ) : (
    <VStack px="2rem" py="1rem">
      <Text
        as="h1"
        fontSize={"5rem"}
        fontFamily={"Bebas Neue, sans-serif"}
        color={"white"}
      >
        FORMAÇÃO
      </Text>
      <Flex justifyContent={"space-between"} pb="30px">
        <Stack>
          <Text as="p">
            Sou formado em Análise e Desenvolvimento de Sistemas pela
            Universidade Federal do Mato Grosso do Sul. Durante minha trajetória
            acadêmica, participei ativamente do PET-Sistemas, onde contribuí em
            diversos projetos. <br />
            <br />
            Um dos meus principais projetos foi o desenvolvimento de aulas de
            informática profissionalizante, além de um projeto voltado para
            previsão de cheias no Pantanal. Além disso, tive a oportunidade de
            me envolver com esportes, representando a universidade em
            campeonatos universitários e estaduais de basquete como membro da
            atlética. Nessa mesma organização, exerci o cargo de diretor de
            arte, o que me permitiu desenvolver habilidades de liderança e
            criatividade.
          </Text>
        </Stack>
      </Flex>
      <Stack
        display={"grid"}
        gridTemplateColumns={"1fr 1fr"}
        gridTemplateRows={"1fr 1fr"}
        gap={"10px"}
      >
        <Image src={MyGaleryOne} />
        <Image src={MyGaleryTwo} />
        <Image src={MyGaleryThree} />
        <Image src={MyGaleryFour} />
      </Stack>
    </VStack>
  );
}

export default HomeProfileGraduation;
