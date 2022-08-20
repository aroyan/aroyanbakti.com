import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

export default function SocialMediaShare({ slug }) {
  return (
    <SimpleGrid placeContent={"center"}>
      <Text width={"full"} textAlign={"center"} mb={"4"}>
        Share this article
      </Text>
      <HStack>
        <FacebookShareButton url={`https://www.aroyanbakti.com/blog/${slug}`}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={`https://www.aroyanbakti.com/blog/${slug}`}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TelegramShareButton url={`https://www.aroyanbakti.com/blog/${slug}`}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TwitterShareButton url={`https://www.aroyanbakti.com/blog/${slug}`}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={`https://www.aroyanbakti.com/blog/${slug}`}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </HStack>
    </SimpleGrid>
  );
}
