import styles from './Massage.modules.css';

export const Message = (props) => {
  return <div className={styles.message}>
    {props.message}
  </div>;
};

const MessageHTML = (message) => {

  return `<div>${message}</div>`
}

MessageHTML('test') // `<div>test</div>`
