import { Stack } from '@chakra-ui/layout';
import HomeProfilePrincipalContent from './components/home-profille-principal-content/home-profile-principal-content';
import HomeProfileGraduation from './components/home-profile-graduation/HomeProfileGraduation';

function HomeProfile() {
  return (
    <Stack>
      <HomeProfilePrincipalContent />
      <HomeProfileGraduation />
    </Stack>
  );
}

export default HomeProfile;
