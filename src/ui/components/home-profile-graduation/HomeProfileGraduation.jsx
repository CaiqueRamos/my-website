import { Flex, Image, Stack, Text } from '@chakra-ui/react';
import MyGaleryOne from '../../assets/my-galery-one.png';
import MyGaleryTwo from '../../assets/my-galery-two.png';
import MyGaleryThree from '../../assets/my-galery-three.png';
import MyGaleryFour from '../../assets/my-galery-four.png';

export function HomeProfileGraduation() {
  return (
    <Stack px="6rem" py="2rem">
      <Text
        as="h1"
        fontSize={'15rem'}
        fontFamily={'Bebas Neue, sans-serif'}
        color={'white'}
        ml="-10px"
      >
        FORMAÇÃO
      </Text>
      <Flex justifyContent={'space-between'}>
        <Stack w="40vw">
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
        <Stack
          w={'50rem'}
          display={'grid'}
          gridTemplateColumns={'1fr 1fr'}
          gridTemplateRows={'1fr 1fr'}
          gap={'10px'}
        >
          <Image src={MyGaleryOne} />
          <Image src={MyGaleryTwo} />
          <Image src={MyGaleryThree} />
          <Image src={MyGaleryFour} />
        </Stack>
      </Flex>
    </Stack>
  );
}

export default HomeProfileGraduation;
