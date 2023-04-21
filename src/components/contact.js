import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandTelegram } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import styles from "./contact.module.css";
const Contact = () => {
  const [isSent, setIsSent] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(null);
    emailjs
      .sendForm(
        "service_y5ctqmi",
        "template_vtoezvf",
        form.current,
        "1G89GjuDXT4QEkv-X"
      )
      .then(
        (result) => {
          setIsSent(result.text);
          setTimeout(() => {
            setIsSent(null);
          }, 3000);
        },
        (error) => {
          setIsSent(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div className={styles.contact} name="contact">
      <h2>Contact-Me</h2>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <a
            href="mailto:yoftahemerkebu@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <HiOutlineMail />
            <p className={styles.title}>Email</p>
            <p>Go to Email</p>
          </a>
          <a
            href="https://t.me/PerfectAtImperfection"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <TbBrandTelegram />
            <p className={styles.title}>Telegram</p>
            <p>Go to Telegram</p>
          </a>
          <div
            onClick={() => {
              navigator.clipboard.writeText("+251946699169");
            }}
            className={styles.card}
          >
            <BsTelephone />
            <p className={styles.title}>Phone</p>
            <p >Click to copy</p>
          </div>
        </div>
        <form className={styles.inputContainer} ref={form} onSubmit={sendEmail}>
          <label>Enter Your Information</label>
          <input
            className={styles.input}
            placeholder="Enter Your Full Name"
            name="name"
          />
          <input
            className={styles.input}
            placeholder="Enter Your Email "
            name="email"
          />
          <textarea
            className={styles.textarea}
            placeholder="Enter Your Message"
            name="message"
          />
          <div className={styles.wrap}>
            <button className={styles.button} type="submit">
              Send
            </button>
            {isSent != null && (
              <p className={isSent === "OK" ? styles.success : styles.error}>
                {isSent === "OK" ? "Sent" : isSent}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
