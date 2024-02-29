import styles from "./Tab.module.css";

export default function Tab(){
    return (
        <div className={styles.wrapper}>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
        </div>
    );
}