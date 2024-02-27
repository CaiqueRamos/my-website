import { Stack, Text } from '@chakra-ui/layout';
import ScrollIndicator from '../scroll-indicator/scroll-indicator';

function HomeProfileApresentation() {
  return (
    <Stack
      h="100vh"
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Stack></Stack>
      <Stack
        fontFamily={'Bebas Neue, sans-serif'}
        fontWeight={700}
        textAlign={'center'}
        lineHeight={'15rem'}
        color={'white'}
      >
        <Stack as="h1" fontSize={'17em'}>
          <Text
            _hover={{
              color: 'black',
              backgroundImage:
                'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmV3cmd4M214NWllajFoNGFhNzQycmdzY3J2NXE3eDJlMXRwYzc4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NTur7XlVDUdqM/giphy.gif',
              backgroundSize: 'cover',
              backgroundClip: 'text',
              backgroundPosition: 'center',
            }}
          >
            Caique
          </Text>
          <Text
            _hover={{
              color: 'black',
              backgroundImage:
                'https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif?cid=790b76116mz9q1ilq64fiubcdvm2xc8tpbg923enu55abtvi&ep=v1_gifs_search&rid=giphy.gif&ct=g',
              backgroundSize: 'cover',
              backgroundClip: 'text',
              backgroundPosition: 'center',
            }}
          >
            Ramos
          </Text>
        </Stack>
        <Text as="span" fontWeight={70} lineHeight={'1rem'}>
          DESENVOLVEDOR DE SOFTWARE COM LIDEROU E FOI LIDERADO POR PESSOAS
          INCRIVEIS
        </Text>
      </Stack>
      <ScrollIndicator />
    </Stack>
  );
}

export default HomeProfileApresentation;