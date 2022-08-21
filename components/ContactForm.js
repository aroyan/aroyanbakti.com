import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
  Box,
  InputGroup,
  VStack,
  InputLeftElement,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjdlqg");
  const rechaptaRef = React.createRef();

  const onSubmit = () => {
    const rechaptaValue = rechaptaRef.current.getValue();
    this.props.onSubmit(rechaptaValue);
  };

  if (state.succeeded) {
    return <Text textAlign={"center"}>Thanks for your message!</Text>;
  }
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      shadow="base"
    >
      <VStack spacing={5}>
        <FormControl isRequired onSubmit={handleSubmit} as="form" method="post">
          <FormLabel htmlFor="email">Email</FormLabel>

          <InputGroup>
            <InputLeftElement>
              <MdOutlineEmail />
            </InputLeftElement>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </InputGroup>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>

          <Textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows={6}
            resize="none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </FormControl>

        <ReCAPTCHA
          ref={rechaptaRef}
          sitekey="6LepxVwgAAAAAIse-Nm-igSDVmV5DU-Wl_NaFbGL"
        />
        <Button
          colorScheme="blue"
          bg="blue.400"
          color="white"
          _hover={{
            bg: "blue.500",
          }}
          isFullWidth
          type="submit"
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}
