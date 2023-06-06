import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";

function ContactMe() {
  return (
    <div className="flex flex-col my-10 text-white lg:flex-row">
      <div className="px-6 py-24 bg-blue lg:w-1/3">
        <p className="text-2xl text-left font-bold mb-2">Get in touch</p>
        <p className="text-base text-left font-semibold">
          Don't be shy! Hit me up
        </p>
        <p className="text-left mb-2">
          You can contact me on my social media either send me an email.
        </p>
      </div>
      <div className="px-3 py-9 lg:w-2/3">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactMe;
