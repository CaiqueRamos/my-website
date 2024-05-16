import { Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { useMediaContext } from "../../../hooks/use-media-context";
import ModalBlurExpand from "../modal-blur-expand";
import zema from "../../assets/zema.png";
import lighthouse from "../../assets/lighthouse.png";
import nagem from "../../assets/nagem.png";
import nagemlp from "../../assets/nagem-lp.png";
import hubkn from "../../assets/hubkn.png";
import hubknlp from "../../assets/hubkn-lp.png";
import zemalp from "../../assets/zema-lp.png";
import bonafide from "../../assets/bonafide.png";
import brasil from "../../assets/brasil.png";
import brasillp from "../../assets/brasil-lp.png";

export function HomeProfileProjects() {
  const { isDesktop } = useMediaContext();
  const projects = [
    {
      name: "Zema",
      src: zema,
      srcLp: zemalp,
      bgColor: "#004B8F",
      content: `Neste projeto, atuei como programador frontend,
       desempenhando um papel fundamental na construção 
       de produtos internos e no desenvolvimento do marketplace
       da empresa (zema.com). Durante esse período, trabalhei 
       com diversas ferramentas e tecnologias, incluindo o OSF 
       (Open Storefront Framework), OIC (Oracle Integration Cloud), 
       React e Next.js. Minha contribuição foi essencial para o 
       sucesso desses projetos, garantindo sua qualidade e eficiência
       por meio de um desenvolvimento cuidadoso e alinhado com as necessidades do negócio.`,
    },
    {
      name: "Nagem",
      src: nagem,
      srcLp: nagemlp,
      bgColor: "#0067FE",
      content: `Na minha atuação como desenvolvedor Front-end, fui responsável 
      por liderar equipes na implementação de projetos e features para o 
      e-commerce nagem.com.br, além de colaborar em projetos internos. 
      Durante esse período, utilizei tecnologias como React, Next, Angular e 
      PHP para garantir um desenvolvimento eficiente e alinhado com as necessidades 
      do negócio. Minha liderança e expertise foram fundamentais para o sucesso desses projetos, 
      contribuindo diretamente para a melhoria da experiência do usuário e o crescimento do negócio.`,
    },
    {
      name: "Hubkn",
      src: hubkn,
      srcLp: hubknlp,
      bgColor: "white",
      content: `A Hubkn é uma startup de Curitiba com um objetivo claro: 
      desenvolver um produto inovador para o mercado de CRM 
      (Customer Relationship Management). Tive a oportunidade 
      de ingressar nesse projeto desde o seu início, assumindo 
      a responsabilidade pela nossa presença online. Isso incluiu
       a criação das páginas web e das interfaces dos produtos
        utilizando React. Além disso, eu também era responsável 
        pela criação de protótipos no Figma, bem como pela vetorização 
        e manutenção visual da marca. Minha atuação nesse contexto foi 
        fundamental para estabelecer uma presença digital sólida e atrativa, 
        alinhada com a proposta inovadora da empresa.`,
    },
    {
      name: "Lighthouse",
      src: lighthouse,
      bgColor: "#FF0042",
      content: `O projeto Lighthouse é um produto interno 
      que será utilizado para o gerenciamento dos funcionários, 
      incluindo solicitações de férias e outras demandas do 
      departamento de Recursos Humanos. Gostaria de destacar 
      esse projeto, pois foi desenvolvido sob minha liderança, 
      com uma equipe de estagiários. Essa experiência foi muito 
      enriquecedora, pois pude compartilhar meus conhecimentos 
      e orientar novos profissionais, o que considero fundamental 
      para o meu desenvolvimento profissional e minha busca por uma posição mais sênior.`,
    },
    {
      name: "Bonafide",
      src: bonafide,
      bgColor: "white",
      content: `Os projetos desenvolvidos para a Bonafide não
       representaram grandes desafios técnicos, mas sim
        desafios relacionados à hospedagem e à persuasão 
        dos clientes, que em sua maioria eram advogados.
         Foi necessário convencê-los de que ter um site e
          uma presença online eram diferenciais essenciais 
          para qualquer profissional da área. Essa experiência 
          demonstrou a importância não apenas das habilidades
           técnicas, mas também das habilidades de comunicação 
           e persuasão no desenvolvimento de projetos de sucesso.`,
    },
    {
      name: "Meu Brasil",
      src: brasil,
      srcLp: brasillp,
      bgColor: "#0F1527",
      content: `Este projeto inacabado é algo que me motiva, 
      porém ainda está em construção devido a débitos tecnológicos
       e de conhecimentos administrativos relacionados ao contexto 
       brasileiro. Minha ideia com esse projeto é criar uma plataforma
        que simplifique o complexo funcionamento da documentação e de 
        eventos administrativos no Brasil. Acredito que essa plataforma
         possa facilitar a vida das pessoas e empresas que lidam com essas 
         questões, tornando os processos mais eficientes e acessíveis.`,
    },
  ];

  return (
    <Stack>
      <VStack
        justifyContent={"space-between"}
        alignItems={isDesktop ? "flex-start" : "center"}
        m="auto"
      >
        <Stack>
          <Text
            as="h1"
            fontSize={isDesktop ? "9em" : "4em"}
            fontFamily={"Bebas Neue, sans-serif"}
            color={"white"}
            ml="-10px"
            lineHeight="1em"
            transition="all 0.3s"
          >
            PROJETOS
          </Text>
        </Stack>

        <Flex
          display={"grid"}
          gridTemplateColumns={isDesktop ? "auto auto" : " auto"}
          gridTemplateRows={isDesktop ? "auto auto" : " auto"}
          gap="10px"
        >
          {projects.map((item) => (
            <ModalBlurExpand
              title={item.name}
              key={item.name}
              img={item.src}
              bgColor={item.bgColor}
              content={item.content}
              srcLp={item.srcLp}
            />
          ))}
        </Flex>
      </VStack>
      <Flex width={"100%"} justifyContent={"center"} mt="20px">
        <Text textAlign={"center"}>
          A maioria dos projetos está sob acordos de confidencialidade, então só
          posso mencionar os que estão disponíveis ao público.
        </Text>
      </Flex>
    </Stack>
  );
}

export default HomeProfileProjects;
