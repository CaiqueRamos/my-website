/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { MediaProvider } from "../../context/media-context";
import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_MOBILE,
  MEDIA_QUERY_SMALL_HEIGHT,
} from "../../constants/media-provider";
import { HStack, Stack, useMediaQuery } from "@chakra-ui/react";
import ProfileApresentation from "../../ui/components/profile-apresentation/profile-apresentation";
import VerticalCarousel from "../../ui/components/vertical-carousel/vertical-carousel";
import HomeProfileGraduation from "../../ui/components/profile-graduation/HomeProfileGraduation";
import ContactMe from "../../ui/components/profile-contact/profile-contact";
import ProfileResume from "../../ui/components/profile-resume/profile-resume";

function Home() {
  const [isMobile, isDesktop, isSmallHeight] = useMediaQuery([
    MEDIA_QUERY_MOBILE,
    MEDIA_QUERY_DESKTOP,
    MEDIA_QUERY_SMALL_HEIGHT,
  ]);
  const mediaType = { isMobile, isDesktop, isSmallHeight };

  const components = [
    <ProfileApresentation />,
    <ProfileResume />,
    <HomeProfileGraduation />,
    <ContactMe />,
  ];

  return (
    <MediaProvider mediaType={mediaType}>
      {isDesktop ? (
        <HStack
          h="100vh"
          justifyContent={"center"}
          alignItems={"center"}
          background={"#0e0e0e"}
          color="#bfbfbf"
        >
          <VerticalCarousel components={components} />
        </HStack>
      ) : (
        <Stack background={"#0e0e0e"} color="#bfbfbf">
          <ProfileApresentation />
          <ProfileResume />
          <HomeProfileGraduation />
          <ContactMe />
        </Stack>
      )}
    </MediaProvider>
  );
}

export default Home;
