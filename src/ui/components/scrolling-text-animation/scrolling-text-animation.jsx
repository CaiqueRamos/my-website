import { Stack, Text } from '@chakra-ui/react';
import './scrolling-text-animation.css';

function ScrollingTextAnimation() {
  return (
    <Stack>
      <Text
        as="h1"
        color={'white'}
        fontFamily={'Bebas Neue, sans-serif'}
        fontSize={'22rem'}
        lineHeight={'120px'}
      >
        {'EU SOU'}
      </Text>
      <Stack
        width="600px"
        height="150px"
        overflow=" hidden"
        position="relative"
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
