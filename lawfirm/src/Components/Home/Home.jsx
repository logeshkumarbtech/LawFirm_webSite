import Navbar from "../Home/NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSection";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>      
        <Navbar />
        <HeroSection />
      </div>
    
  );
}

export default Home;
