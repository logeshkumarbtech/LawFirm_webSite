import styles from "./FAQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

export default function FAQ() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>FAQ</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.accordion}>
        <Accordion className={styles.accordiontab} defaultExpanded>
          <AccordionSummary
            expandIcon={<AddCircleRoundedIcon className={styles.icon}/>}
            aria-controls="panel1-content"
            id="panel1-header"
            className={styles.question}
          >
            Do I need a personal injury report?
          </AccordionSummary>
          <AccordionDetails className={styles.ans}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordiontab}>
          <AccordionSummary
            expandIcon={<AddCircleRoundedIcon className={styles.icon}/>}
            aria-controls="panel2-content"
            id="panel2-header"
            className={styles.question}
          >
            How much is my case worth?
          </AccordionSummary>
          <AccordionDetails className={styles.ans}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.accordiontab}
          
        >
          <AccordionSummary
            expandIcon={<AddCircleRoundedIcon className={styles.icon}/>}
            aria-controls="panel3-content"
            id="panel3-header"
            className={styles.question}
          >
            What should I do right after car accidect
          </AccordionSummary>
          <AccordionDetails className={styles.ans}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </AccordionDetails>          
        </Accordion>
      </div>
    </div>
  );
}
