import { Stack, Text, HStack, VStack } from "@chakra-ui/layout";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/react";
import { useMediaContext } from "../../../hooks/use-media-context.js";

import myProfile from "../../assets/my-profile.png";
import ScrollingTextAnimation from "../scrolling-text-animation/scrolling-text-animation";

function ProfileResume() {
  const { isDesktop } = useMediaContext();
  return isDesktop ? (
    <HStack
      justifyContent={"space-between"}
      alignItems={"normal"}
      background={"#b9dbff1a"}
      rounded={"100px"}
      h={"90vh"}
      flexDirection={"row"}
    >
      <VStack justifyContent={"center"} px="5em">
        <Stack>
          <ScrollingTextAnimation />
          <Stack>
            <Text maxW={"650px"}>
              Atuo de forma multidisciplinar para garantir uma experiência de
              usuário eficiente e coesa. Tenho experiência em liderança e
              trabalho em equipe, Minhas principais ferramentas são React e
              Java.
            </Text>
            <Stack>
              <a href="https://www.linkedin.com/in/caique-ramos-601782176/">
                <Button
                  mt="10px"
                  w="150px"
                  leftIcon={<FaLinkedin />}
                  background="none"
                  color={"white"}
                  border="solid 1px white"
                  _hover={{
                    bg: "linkedin.500",
                    color: "white",
                    boxShadow: "xl",
                    transform: "scale(1.05)",
                    transition: "all 0.3s",
                    border: "none",
                  }}
                >
                  LinkedIn
                </Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </VStack>
      <Stack w="70%">
        <Image
          src={myProfile}
          alt="imagem pessoal"
          objectFit={"contain"}
          h={"90vh"}
        />
      </Stack>
    </HStack>
  ) : (
    <HStack
      justifyContent={"space-between"}
      alignItems={"normal"}
      background={"#b9dbff1a"}
    >
      <Stack alignItems={"center"}>
        <Stack px="20px" py="70px">
          <ScrollingTextAnimation />
          <Stack>
            <Image src={myProfile} alt="imagem pessoal" objectFit={"contain"} />
          </Stack>
          <Stack mt="10px">
            <Text>
              Desenvolvedor de soluções digitais, atuando em colaboração
              multidisciplinar para assegurar uma experiência de usuário
              eficiente e coesa. Experiência em liderança e trabalho em equipe,
              contribuindo para um ambiente de trabalho dinâmico e inovador.
            </Text>
            <Stack width="fit-content">
              <a href="https://www.linkedin.com/in/caique-ramos-601782176/">
                <Button
                  w="full"
                  mt="10px"
                  leftIcon={<FaLinkedin />}
                  background="none"
                  color={"white"}
                  border="solid 1px white"
                  _hover={{
                    bg: "linkedin.500",
                    color: "white",
                    boxShadow: "xl",
                    transform: "scale(1.05)",
                    transition: "all 0.3s",
                    border: "none",
                  }}
                >
                  LinkedIn
                </Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </HStack>
  );
}

export default ProfileResume;
