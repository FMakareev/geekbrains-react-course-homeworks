import styles from './Massage.modules.css';

export const Message = (props) => {
  return <div className={styles.message}>{props.text}</div>;
};
