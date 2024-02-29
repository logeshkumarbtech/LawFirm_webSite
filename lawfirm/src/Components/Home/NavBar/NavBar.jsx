import React from "react";
import styles from "./NavBar.module.css";
import Logo from "./Logo";
import Tab from "./Tab";
import Button from "./Button";


export default function Navbar(){
    return(
        <nav className={styles.wrapper}>
            <Logo/>        
            <Tab />    
            <Button />     
        </nav>
    );

}