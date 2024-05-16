import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Message received, thank you very much!");
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know!
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
            />
          </div>

          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>

            <input
              type="text"
              id="subject"
              placeholder="Subject for your message"
              className="form_input mt-1"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label">
              Your Message
            </label>

            <textarea
              rows="6"
              type="email"
              id="email"
              placeholder="Leave a comment"
              className="form_input mt-1"
            />
          </div>
          <button type="submit " className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
