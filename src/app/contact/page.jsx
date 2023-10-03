"use client";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import styles from "./page.module.css";

const Contact = () => {
  const form = useRef();
  const [validationErrors, setValidationErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    subject: false,
    message: false,
  });

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Thank you for reaching me out, I will get back to you as soon as possible.",
      icon: "success",
      timer: 2000,
    });
  };

  const resetForm = () => {
    form.current.reset();
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(validationErrors).forEach((field) => {
      if (!form.current[field].value) {
        errors[field] = true;
      } else {
        errors[field] = false;
      }
    });
    setValidationErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_ah1ro1d",
          "template_chqhgo9",
          form.current,
          "J28S-owUYH0djfM5G"
        )
        .then(
          (result) => {
            console.log(result.text);
            showSuccessAlert();
            resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactPageContainer}>
        <h2 className={styles.contactPageTitle} data-aos="fade-down">Contact Me</h2>
        <form className={styles.contactForm} ref={form} data-aos="fade-up" onSubmit={sendEmail}>
          <div className={styles.formRow}>
            <div className={styles.formCol}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                className={validationErrors.firstName ? styles.validationError : ""}
              />
            </div>
            <div className={styles.formCol}>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                className={validationErrors.lastName ? styles.validationError : ""}
              />
            </div>
          </div>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            className={validationErrors.email ? styles.validationError : ""}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
            className={validationErrors.subject ? styles.validationError : ""}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            id="message"
            className={validationErrors.message ? styles.validationError : ""}
          ></textarea>
          <button type="submit" className={styles.submit}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
