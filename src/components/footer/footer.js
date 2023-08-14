import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.footer}>
      @ All-rights reserved to YOFTAHE {date.getFullYear()}
    </div>
  );
};

export default Footer;
