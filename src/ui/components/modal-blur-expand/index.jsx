/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
  Flex,
  Stack,
  Text,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useMediaContext } from "../../../hooks/use-media-context";

const ModalBlurExpand = ({ img, content, bgColor, title, id, srcLp }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isDesktop } = useMediaContext();

  return (
    <>
      <Flex
        cursor={"pointer"}
        key={id}
        h="6em"
        w={{ base: "100%", md: "30em" }}
        p={4}
        background={bgColor}
        borderRadius="md"
        overflow="hidden"
        onClick={onOpen}
        alignItems={"center"}
        justifyContent={"center"}
        transition="0.6s ease"
        _hover={{ transform: "translateY(-5px)" }}
      >
        <Image src={img} alt="Logo Empresa" h="80%" />
      </Flex>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={isDesktop ? "4xl" : "full"}
      >
        <ModalOverlay />

        <ModalContent
          rounded="10px"
          color={bgColor === "white" ? "black" : "white"}
        >
          {" "}
          {!isDesktop && <ModalCloseButton />}
          <ModalBody p="0px" bgColor={bgColor} rounded="lg">
            <Flex justifyContent={"center"}>
              <Stack w={"50%"} p="20px">
                <Text
                  color={bgColor === "white" ? "black" : "white"}
                  fontSize={"3em"}
                  fontFamily={"sans-serif"}
                  fontWeight={"bold"}
                >
                  {title}
                </Text>
                <Text as="span">{content}</Text>
              </Stack>
              <Flex
                h="100%"
                w={"50%"}
                background={bgColor}
                alignItems={"center"}
                justifyContent={"center"}
                minH="25em"
                p="2em"
                rounded={"lg"}
              >
                <Image src={srcLp ? srcLp : img} alt="Logo Empresa" />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBlurExpand;
