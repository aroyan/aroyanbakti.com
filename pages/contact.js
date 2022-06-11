import Layout from "../components/layout/layout";
import ContactForm from "../components/ContactForm";

export default function contact() {
  return (
    <Layout title={"Contact"} content={"Contact form"}>
      <ContactForm />
    </Layout>
  );
}
