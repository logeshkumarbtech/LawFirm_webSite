import styles from "./Clients.module.css";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import client1 from "./images/client1.png";
import client2 from "./images/client2.png";
import client3 from "./images/client3.png";
import ClientCard from "./ClientCard/ClientCard";

export default function Clients() {
  const data = [
    {
      id: 1,
      name: "Jane Cooper",
      image: client1,
    },
    {
      id: 2,
      name: "Devon Lane",
      image: client2,
    },
    {
      id: 3,
      name: "Robert Fox",
      image: client3,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.interwrap}>
        <div className={styles.header}>
          <h1>What says our happy clients</h1>
        </div>
        <div className={styles.btn}>
          <IconButton variant="filled" className={styles.btn1}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton variant="filled" className={styles.btn2}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.clients}>
        {data.map((item) => (
          <ClientCard name={item.name} image={item.image} key={item.id} />
        ))}
      </div>
    </div>
  );
}
