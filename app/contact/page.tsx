import ContactHero from "@/components/contact/ContactHero";
import ContactInputs from "@/components/contact/ContactInputs";
import MyEmailPhoneNumber from "@/components/contact/MyEmailPhoneNumber";

const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <ContactInputs />
      <MyEmailPhoneNumber />
    </main>
  );
};

export default ContactPage;
