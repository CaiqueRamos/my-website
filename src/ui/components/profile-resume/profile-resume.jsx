import { Stack, Text, HStack, VStack, Flex } from "@chakra-ui/layout";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import { Tag, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useMediaContext } from "../../../hooks/use-media-context.js";

import ScrollingTextAnimation from "../scrolling-text-animation/scrolling-text-animation";

function ProfileResume() {
  const { isDesktop } = useMediaContext();
  return isDesktop ? (
    <HStack
      justifyContent={"space-between"}
      alignItems={"normal"}
      h={"100vh"}
      w="60vw"
      flexDirection={"row"}
    >
      <VStack justifyContent={"center"} px="5em">
        <Stack minH="25em" minW="43em">
          <ScrollingTextAnimation />
          <Tabs colorScheme="teal">
            <TabList>
              <Tab>Atual</Tab>
              <Tab>2021 - 2022</Tab>
              <Tab>2020 - 2021</Tab>
              <Tab>2018 - 2020</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack maxW={"650px"}>
                  <Flex justify={"space-between"}>
                    <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                      Engenheiro de Front-end
                    </Text>
                    <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                      Mar 2022 - Presente · 2 anos 3 meses
                    </Text>
                  </Flex>
                  <Text as="span">
                    Como engenheiro de front-end desde 2022, lidero projetos de
                    e-commerce e marketplaces, usando React, Node e Next. Faço
                    codificação, integração, teste (unitário, integração,
                    desempenho, funcional e acessibilidade) e crio APIs. Também
                    mantenho código legado, planejo operações, defino metas nas
                    sprints e gerencio pipelines e ambientes Azure e Oracle
                    Cloud.
                  </Text>
                  <Text fontSize={"1em"} color={"white"} mt="20px">
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      React
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Typescript
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Javascript
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      GraphQL
                    </Tag>

                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Next
                    </Tag>
                  </Text>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack maxW={"650px"}>
                  <Flex justify={"space-between"}>
                    <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                      Frontend & UI developer
                    </Text>
                    <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                      Aug 2021 - Mar 2022 · 8 mos
                    </Text>
                  </Flex>
                  <Text as="span">
                    Desenvolvi produtos internos focados no mercado de CRM e
                    operações comerciais, com o objetivo de otimizar o dia a dia
                    dos gestores de vendas. Esse trabalho envolveu a criação de
                    soluções que facilitam a gestão de clientes, a análise de
                    dados de vendas e o acompanhamento de metas, contribuindo
                    para a eficiência e o sucesso das equipes comerciais.
                  </Text>
                  <Text fontSize={"1em"} color={"white"} mt="20px">
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      React
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Typescript
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Javascript
                    </Tag>

                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Node
                    </Tag>
                  </Text>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack maxW={"650px"}>
                  <Flex justify={"space-between"}>
                    <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                      Desenvolvedor Web
                    </Text>
                    <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                      Out 2020 - Jul 2021 · 10 mos
                    </Text>
                  </Flex>
                  <Text as="span">
                    Trabalhei com Manutenção e criação de sites institucionais
                    para garantir a presença online de empresas ou organizações.
                    Isso envolveu desde a atualização de conteúdos e correção de
                    problemas técnicos até o design e desenvolvimento de novas
                    páginas. Foi fundamental garantir que o site esteja sempre
                    atualizado, funcionando corretamente e transmitindo a
                    mensagem desejada aos visitantes.
                  </Text>
                  <Text fontSize={"1em"} color={"white"} mt="20px">
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Javascript
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      JQuery
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Typescript
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      WordPress
                    </Tag>
                  </Text>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack maxW={"650px"}>
                  <Flex justify={"space-between"}>
                    <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                      Arte finalista
                    </Text>
                    <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                      jul 2018 - Abr 2020
                    </Text>
                  </Flex>
                  <Text as="span">
                    Durante meu trabalho, pude realizar projetos de UI/UX, além
                    de desenvolver landing pages e fazer vetorizações. Essas
                    experiências contribuíram significativamente para o meu
                    crescimento profissional e para aprimorar minhas habilidades
                    nessas áreas.
                  </Text>
                  <Text fontSize={"1em"} color={"white"} mt="20px">
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Corel
                    </Tag>
                    <Tag
                      size={"md"}
                      variant="subtle"
                      bgColor="teal"
                      mr="10px"
                      color={"white"}
                    >
                      Figma
                    </Tag>
                  </Text>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Stack mt="20px" display={"flex"} alignItems={"end"} width={"100%"}>
          <a href="https://www.linkedin.com/in/caique-ramos-601782176/">
            <Button
              mt="10px"
              w="200px"
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
              VER COMPLETO
            </Button>
          </a>
        </Stack>
      </VStack>
    </HStack>
  ) : (
    <HStack
      justifyContent={"space-between"}
      alignItems={"normal"}
      background={"#b9dbff1a"}
    >
      <Stack alignItems={"center"} w="full">
        <Stack px="20px" py="70px">
          <ScrollingTextAnimation />

          <Stack>
            <Flex justify={"space-between"} mt="20px">
              <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                Engenheiro de Front-end
              </Text>
              <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                2022 - Presente
              </Text>
            </Flex>
            <Text as="span">
              Como engenheiro de front-end desde 2022, lidero projetos de
              e-commerce e marketplaces, usando React, Node e Next. Faço
              codificação, integração, teste (unitário, integração, desempenho,
              funcional e acessibilidade) e crio APIs. Também mantenho código
              legado, planejo operações, defino metas nas sprints e gerencio
              pipelines e ambientes Azure e Oracle Cloud.
            </Text>
            <Text fontSize={"1em"} color={"white"}>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                React
              </Tag>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Typescript
              </Tag>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Node
              </Tag>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                GraphQL
              </Tag>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Next.js
              </Tag>
            </Text>
          </Stack>

          <Stack>
            <Flex justify={"space-between"} mt="20px">
              <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                Frontend & UI developer
              </Text>
              <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                2021 - 2022
              </Text>
            </Flex>
            <Text as="span">
              Desenvolvi produtos internos focados no mercado de CRM e operações
              comerciais, com o objetivo de otimizar o dia a dia dos gestores de
              vendas. Esse trabalho envolveu a criação de soluções que facilitam
              a gestão de clientes, a análise de dados de vendas e o
              acompanhamento de metas, contribuindo para a eficiência e o
              sucesso das equipes comerciais.
            </Text>
            <Text fontSize={"1em"} color={"white"}>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                React
              </Tag>

              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Node
              </Tag>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Javascript
              </Tag>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Typescript
              </Tag>
            </Text>
          </Stack>

          <Stack>
            <Flex justify={"space-between"} mt="20px">
              <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                Desenvolvedor Web
              </Text>
              <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                2020 - 2021
              </Text>
            </Flex>
            <Text as="span">
              Trabalhei com Manutenção e criação de sites institucionais para
              garantir a presença online de empresas ou organizações. Isso
              envolveu desde a atualização de conteúdo e correção de problemas
              técnicos até o design e desenvolvimento de novas páginas. Foi
              fundamental garantir que o site esteja sempre atualizado,
              funcionando corretamente e transmitindo a mensagem desejada aos
              visitantes.
            </Text>
            <Text fontSize={"1em"} color={"white"}>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Typescript
              </Tag>

              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                JQuery
              </Tag>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Javascript
              </Tag>

              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                WordPress
              </Tag>
            </Text>
          </Stack>

          <Stack>
            <Flex justify={"space-between"} mt="20px">
              <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                Arte finalista
              </Text>
              <Text fontSize={"1em"} color={"white"} fontWeight={"bold"}>
                2018 - 2020
              </Text>
            </Flex>
            <Text as="span">
              Durante meu trabalho, pude realizar projetos de UI/UX, além de
              desenvolver landing pages e fazer vetorizações. Essas experiências
              contribuíram significativamente para o meu crescimento
              profissional e para aprimorar minhas habilidades nessas áreas.
            </Text>
            <Text fontSize={"1em"} color={"white"}>
              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Corel
              </Tag>

              <Tag
                size={"md"}
                variant="subtle"
                bgColor="teal"
                mr="10px"
                color={"white"}
              >
                Figma
              </Tag>
            </Text>
          </Stack>

          <Stack mt="10px" w="full">
            <Stack>
              <a href="https://www.linkedin.com/in/caique-ramos-601782176/">
                <Button
                  w="full"
                  mt="10px"
                  leftIcon={<FaLinkedin />}
                  background="none"
                  bg="linkedin.500"
                  color="white"
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
