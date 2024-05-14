import { Stack, Flex, Text } from "@chakra-ui/layout";

import ProfileResume from "./components/profile-resume/profile-resume";
import HomeProfileGraduation from "./components/profile-graduation/HomeProfileGraduation";
// import Timeline from "./components/profile-timeline-carousel/Timeline";

function HomeProfile() {
  return (
    <Stack>
      <ProfileResume />
      <HomeProfileGraduation />
      {/* <Timeline /> */}
      <Flex w="100%" justifyContent={"center"} my="10">
        <Text fontFamily={" sans-serif"} _hover={{ color: "gray" }}>
          Para mais informações -{" "}
          <a href="mailto:caique.dev@hotmail.com">caique.dev@hotmail.com</a>
        </Text>
      </Flex>
    </Stack>
  );
}

export default HomeProfile;
("");
