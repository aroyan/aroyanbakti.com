import { useForm, ValidationError } from "@formspree/react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjdlqg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <FormControl onSubmit={handleSubmit}>
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <Input id="email" type="email" name="email" placeholder="Email" mb="2" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <FormLabel htmlFor="message">Message</FormLabel>
      <Textarea id="message" name="message" placeholder="Message" mb="2" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button disabled={state.submitting} type="submit" colorScheme={"orange"}>
        Submit
      </Button>
    </FormControl>
  );
}
