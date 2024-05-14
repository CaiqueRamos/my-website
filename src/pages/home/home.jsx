import { MediaProvider } from "../../context/media-context";
import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_MOBILE,
} from "../../constants/media-provider";
import { useMediaQuery } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";
import HomeProfile from "../../ui/home-profile";
import ProfileApresentation from "../../ui/components/profile-apresentation/profile-apresentation";

function Home() {
  const [isMobile, isDesktop] = useMediaQuery([
    MEDIA_QUERY_MOBILE,
    MEDIA_QUERY_DESKTOP,
  ]);
  const mediaType = { isMobile, isDesktop };

  return (
    <MediaProvider mediaType={mediaType}>
      <Stack background={"#0e0e0e"} color="#bfbfbf">
        <Stack>
          <ProfileApresentation />
        </Stack>
        <Stack>
          <HomeProfile />
        </Stack>
      </Stack>
    </MediaProvider>
  );
}

export default Home;
