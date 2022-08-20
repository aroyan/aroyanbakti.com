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
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjdlqg");
  const outlineFormColor = useColorModeValue("blackAlpha.700", "gray.900");
  const rechaptaRef = React.createRef();

  const onSubmit = () => {
    const rechaptaValue = rechaptaRef.current.getValue();
    this.props.onSubmit(rechaptaValue);
  };

  if (state.succeeded) {
    return <Text textAlign={"center"}>Thanks for your message!</Text>;
  }
  return (
    <FormControl onSubmit={handleSubmit} as="form" method="post">
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        mb="4"
        borderColor={outlineFormColor}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <FormLabel htmlFor="message">Message</FormLabel>
      <Textarea
        id="message"
        name="message"
        placeholder="Message"
        mb="4"
        isRequired
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Flex direction={"row"} justify="end" w="full" gap="4" wrap="wrap">
        <ReCAPTCHA
          ref={rechaptaRef}
          sitekey="6LepxVwgAAAAAIse-Nm-igSDVmV5DU-Wl_NaFbGL"
        />
        <Button
          disabled={state.submitting}
          type="submit"
          colorScheme={"orange"}
        >
          Submit
        </Button>
      </Flex>
    </FormControl>
  );
}
