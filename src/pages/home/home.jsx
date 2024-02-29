import { Stack, Text } from '@chakra-ui/layout';
import HomeProfile from '../../ui/home-profile';
import HomeProfileApresentation from '../../ui/components/home-profile-apresentation/home-profile-apresentation';

function Home() {
  return (
    <Stack background={'#0e0e0e'} color="#bfbfbf">
      <Stack>
        <HomeProfileApresentation />
      </Stack>
      <Stack>
        <HomeProfile />
      </Stack>
    </Stack>
  );
}

export default Home;
