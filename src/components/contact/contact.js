import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandTelegram } from "react-icons/tb";

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
    <div className={styles.contact} name="Contact-Me">
      <h2 className={styles.title}>
        Let's <span>Talk</span> About Everything!
      </h2>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <a
            href="mailto:yoftahemerkebu2@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <HiOutlineMail />
            <p className={styles.type}>Email</p>
            <p>Go to Email</p>
          </a>
          <a
            href="https://t.me/PerfectAtImperfection"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <TbBrandTelegram />
            <p className={styles.type}>Telegram</p>
            <p>Go to Telegram</p>
          </a>
          <div
            onClick={() => {
              navigator.clipboard.writeText("+251946699169");
            }}
            className={styles.card}
          >
            <BsTelephone />
            <p className={styles.type}>Phone</p>
            <p>Click to copy</p>
          </div>
        </div>
        <form className={styles.inputContainer} ref={form} onSubmit={sendEmail}>
          <p className={styles.description}>
            Drop a message and let's chat how to bring your <span>vision</span>{" "}
            to life.
          </p>
          <input
            className={styles.input}
            placeholder="Enter Your Full Name"
            name="name"
          />
          <input
            className={styles.input}
            placeholder="Enter Your Email Address"
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
