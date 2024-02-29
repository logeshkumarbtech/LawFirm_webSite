import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../../asserts/HeroImage.png"
import MailIcon from '@mui/icons-material/Mail';

export default function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>You don't have to Fight them Alone</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.emailWrapper}>
          <MailIcon className={styles.emailIcon} />
          <input type="text" placeholder="Enter your eamil address" />
          <button>Let's Talk</button>
        </div>
      </div>
      <img className={styles.heroImage} src={HeroImage} alt="heroImage" />
    </div>
  );
}
