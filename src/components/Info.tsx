import styles from "./Info.module.css";

const Info: React.FC<{ message?: string }> = (props) => {
  return <div className={styles.info}>{props.message ?? ""}</div>;
};

export default Info;
