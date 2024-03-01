import styles from "./Newsletter.module.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function Newsletter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1 className={styles.heading}>Subscribe Our Newsletter</h1>
        <div className={styles.content}>
          <TextField id="outlined-basic" label="Name:" variant="outlined" className={styles.field1}/>
          <TextField id="outlined-basic" label="Enter your Email" variant="outlined" className={styles.field2}/>          
          <Button variant="contained" className={styles.btn}>SEND</Button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
