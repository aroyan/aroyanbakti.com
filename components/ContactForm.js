import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
} from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjdlqg");
  const rechaptaRef = React.createRef();

  const onSubmit = () => {
    const rechaptaValue = rechaptaRef.current.getValue();
    this.props.onSubmit(rechaptaValue);
  };

  function onChange(value) {
    console.log("Chapta value:", value);
  }

  if (state.succeeded) {
    return <Text colorScheme={"cyan"}>Thanks for joining!</Text>;
  }
  return (
    <FormControl onSubmit={handleSubmit} as="form" method="post">
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <Input id="email" type="email" name="email" placeholder="Email" mb="2" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <FormLabel htmlFor="message">Message</FormLabel>
      <Textarea id="message" name="message" placeholder="Message" mb="2" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <ReCAPTCHA
        ref={rechaptaRef}
        sitekey="6LepxVwgAAAAAIse-Nm-igSDVmV5DU-Wl_NaFbGL"
        onChange={onChange}
      />
      <Button disabled={state.submitting} type="submit" colorScheme={"orange"}>
        Submit
      </Button>
    </FormControl>
  );
}
