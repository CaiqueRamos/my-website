import { Stack, Flex, Text } from '@chakra-ui/layout';
import HomeProfilePrincipalContent from './components/home-profille-principal-content/home-profile-principal-content';
import HomeProfileGraduation from './components/home-profile-graduation/HomeProfileGraduation';
import Timeline from './components/home-profile-timeline-carousel/Timeline';

function HomeProfile() {
  return (
    <Stack>
      <HomeProfilePrincipalContent />
      <HomeProfileGraduation />
      <Timeline />
      <Flex w="100%" justifyContent={'center'} my="10">
        <Text fontFamily={' sans-serif'} _hover={{ color: 'gray' }}>
          Para mais informações -{' '}
          <a href="mailto:caique.dev@hotmail.com">caique.dev@hotmail.com</a>
        </Text>
      </Flex>
    </Stack>
  );
}

export default HomeProfile;
