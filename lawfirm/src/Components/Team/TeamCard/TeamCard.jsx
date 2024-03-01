import styles from "./TeamCard.module.css";

function TeamCard({ image, name, cases, selected, onClick }) {
  return (
    <div
      className={selected === true ? styles.wrapperSelected : styles.wrapper} onClick={onClick}
    >
      <img src={image} alt={name} width={68} />
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.cases}>{cases} cases</p>
      </div>
    </div>
  );
}

export default TeamCard;