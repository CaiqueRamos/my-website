import { Stack, Text } from "@chakra-ui/layout";
import ScrollIndicator from "../scroll-indicator/scroll-indicator";
import { useMediaContext } from "../../../hooks/use-media-context.js";

function HomeProfileApresentation() {
  const { isDesktop } = useMediaContext();

  return isDesktop ? (
    <Stack alignItems={"center"} justifyContent={"space-between"}>
      <Stack></Stack>
      <Stack
        fontFamily={"Bebas Neue, sans-serif"}
        fontWeight={700}
        textAlign={"center"}
        lineHeight={"30vh"}
        color={"white"}
      >
        <Stack as="h1" fontSize={"30vh"} cursor={"pointer"}>
          <Text
            _hover={{
              color: "black",
              backgroundImage:
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmV3cmd4M214NWllajFoNGFhNzQycmdzY3J2NXE3eDJlMXRwYzc4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NTur7XlVDUdqM/giphy.gif",
              backgroundSize: "cover",
              backgroundClip: "text",
              backgroundPosition: "center",
            }}
          >
            Caique
          </Text>
          <Text
            _hover={{
              color: "black",
              backgroundImage:
                "https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif?cid=790b76116mz9q1ilq64fiubcdvm2xc8tpbg923enu55abtvi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              backgroundSize: "cover",
              backgroundClip: "text",
              backgroundPosition: "center",
            }}
          >
            Ramos
          </Text>
        </Stack>
        <Text as="span" fontWeight={70} lineHeight={"1rem"} fontSize={"2vh"}>
          DESENVOLVEDOR DE SOFTWARE COM EXPERIÊNCIA EM LIDERANÇA E TRABALHO EM
          EQUIPE.
        </Text>
      </Stack>
      <ScrollIndicator />
    </Stack>
  ) : (
    <Stack
      h="100vh"
      alignItems={"center"}
      justifyContent={"space-between"}
      pb="3em"
    >
      <Stack></Stack>
      <Stack
        fontFamily={"Bebas Neue, sans-serif"}
        fontWeight={700}
        textAlign={"center"}
        lineHeight={"10rem"}
        color={"white"}
      >
        <Stack as="h1" fontSize={"10em"}>
          <Text
            _hover={{
              color: "black",
              backgroundImage:
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmV3cmd4M214NWllajFoNGFhNzQycmdzY3J2NXE3eDJlMXRwYzc4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NTur7XlVDUdqM/giphy.gif",
              backgroundSize: "cover",
              backgroundClip: "text",
              backgroundPosition: "center",
            }}
          >
            Caique
          </Text>
          <Text
            _hover={{
              color: "black",
              backgroundImage:
                "https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif?cid=790b76116mz9q1ilq64fiubcdvm2xc8tpbg923enu55abtvi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
              backgroundSize: "cover",
              backgroundClip: "text",
              backgroundPosition: "center",
            }}
          >
            Ramos
          </Text>
        </Stack>
        <Text as="span" fontWeight={70} lineHeight={"1rem"}>
          DESENVOLVEDOR DE SOFTWARE COM LIDEROU E <br />
          FOI LIDERADO POR PESSOAS INCRIVEIS
        </Text>
      </Stack>
      <ScrollIndicator />
    </Stack>
  );
}

export default HomeProfileApresentation;
