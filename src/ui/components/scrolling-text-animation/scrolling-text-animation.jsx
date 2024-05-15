import { Stack, Text } from "@chakra-ui/react";
import "./scrolling-text-animation.css";
import { useMediaContext } from "../../../hooks/use-media-context";

function ScrollingTextAnimation() {
  const { isDesktop, isSmallHeight } = useMediaContext();
  console.log("the max", isSmallHeight);
  return isDesktop ? (
    <Stack>
      <Text
        as="h1"
        color={"white"}
        fontFamily={"Bebas Neue, sans-serif"}
        fontSize={"11em"}
        lineHeight={isSmallHeight ? "120px" : "90px"}
        marginLift="-5px"
      >
        {"EU SOU"}
      </Text>
      {!isSmallHeight && (
        <Stack height="4em" overflow=" hidden" position="relative">
          <ul className="content__container__list">
            <h1 className="content__container__list__item">BACK-END</h1>
            <h1 className="content__container__list__item">FRONT-END</h1>
            <h1 className="content__container__list__item">FULL-STACK</h1>
            <h1 className="content__container__list__item">DEVELOPER</h1>
          </ul>
        </Stack>
      )}
    </Stack>
  ) : (
    <Stack>
      <Text
        display={"flex"}
        justifyContent={"center"}
        as="h1"
        color={"white"}
        fontFamily={"Bebas Neue, sans-serif"}
        fontSize={"8rem"}
        lineHeight={"70px"}
        marginLeft={"-5px"}
      >
        {"EU SOU"}
      </Text>
      <Stack
        height="75px"
        overflow=" hidden"
        position="relative"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ul className="content__container__list">
          <h1 className="content__container__list__item">BACK-END</h1>
          <h1 className="content__container__list__item">FRONT-END</h1>
          <h1 className="content__container__list__item">FULL-STACK</h1>
          <h1 className="content__container__list__item">DEVELOPER</h1>
        </ul>
      </Stack>
    </Stack>
  );
}

export default ScrollingTextAnimation;
