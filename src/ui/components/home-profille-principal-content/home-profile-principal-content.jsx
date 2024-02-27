import { Stack, Text, HStack, VStack } from '@chakra-ui/layout';
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '@chakra-ui/button';
import myProfile from '../../assets/my-profile.png';
import ScrollingTextAnimation from '../scrolling-text-animation/scrolling-text-animation';
import { Image } from '@chakra-ui/react';

function HomeProfilePrincipalContent() {
  return (
    <HStack
      justifyContent={'space-between'}
      alignItems={'normal'}
      background={'#b9dbff1a'}
      rounded={'100px'}
    >
      <Stack>
        <Stack px="90" py="180">
          <ScrollingTextAnimation />
          <Stack pl="17px">
            <Text maxW={'650px'}>
              Desenvolvedor de soluções digitais, atuando em colaboração
              multidisciplinar para assegurar uma experiência de usuário
              eficiente e coesa. Experiência em liderança e trabalho em equipe,
              contribuindo para um ambiente de trabalho dinâmico e inovador.
            </Text>
            <Stack>
              <a href="https://www.linkedin.com/in/caique-ramos-601782176/">
                <Button
                  mt="10px"
                  w="150px"
                  leftIcon={<FaLinkedin />}
                  background="none"
                  color={'white'}
                  border="solid 1px white"
                  _hover={{
                    bg: 'linkedin.500',
                    color: 'white',
                    boxShadow: 'xl',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s',
                    border: 'none',
                  }}
                >
                  LinkedIn
                </Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <VStack>
          <Image src={myProfile} alt="imagem pessoal" height={'59rem'} />
        </VStack>
      </Stack>
    </HStack>
  );
}

export default HomeProfilePrincipalContent;
