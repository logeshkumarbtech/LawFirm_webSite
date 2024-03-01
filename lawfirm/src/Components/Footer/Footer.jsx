import Logo from "../Home/NavBar/Logo";
import Tab from "../Home/NavBar/Tab";
import styles from "./Footer.module.css";
import Icon1 from "./images/Icon1.png";
import Icon2 from "./images/Icon2.png";
import Icon3 from "./images/Icon3.png";
import Icon4 from "./images/Icon4.png";



function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Logo />
          <Tab />   
          <div className={styles.icons}>
            <img src={Icon1}/>
            <img src={Icon2}/>
            <img src={Icon3}/>
            <img src={Icon4}/>            
          </div>
        </div>

        <div className={styles.bottomText}>
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
