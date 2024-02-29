import React from "react";
import styles from "./Logo.module.css";
import LogoImage from "../../../asserts/igstudio.png";

export default function Logo(){
    return <img src={LogoImage} className={styles.LogoImage} alt="QTify Logo" width={65} />
}