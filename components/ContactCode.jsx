import styles from '../styles/ContactCode.module.css';



const ContactCode = (props) => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.{props.title}</span> &#123;
      </p>
      {props.code.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {props.code.slice(8, props.code.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
