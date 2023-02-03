import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjdlqg");
  const rechaptaRef = React.createRef();

  // const onSubmit = () => {
  //   const rechaptaValue = rechaptaRef.current.getValue();
  //   this.props.onSubmit(rechaptaValue);
  // };

  if (state.succeeded) {
    return <p textAlign={"center"}>Thanks for your message!</p>;
  }
  return (
    <div borderRadius="lg" p={8} shadow="base">
      <div spacing={5}>
        <form isRequired onSubmit={handleSubmit} as="form" method="post">
          <label htmlFor="email">Email</label>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </form>

        <label htmlFor="message">Message</label>

        <textarea
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

        <ReCAPTCHA
          ref={rechaptaRef}
          sitekey="6LepxVwgAAAAAIse-Nm-igSDVmV5DU-Wl_NaFbGL"
        />
        <button
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
        </button>
      </div>
    </div>
  );
}
