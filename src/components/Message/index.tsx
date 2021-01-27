import React from "react";

import styles from "../../styles/components/Message.module.css";

export interface MessageProps {
  currentTime: number;
  currentHalf: "First" | "Second";
  message: {
    title?: string;
    description: string;
  };
}

const Message: React.FC<MessageProps> = ({
  currentTime,
  currentHalf,
  message,
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.timeContainer}>
        <p className={styles.time}>{currentTime}</p>
        <span className={styles.matchHalf}>
          {currentHalf === "Second" ? "2º TEMPO" : "1º TEMPO"}
        </span>
      </div>
      <div className={styles.messageContainer}>
        {message.title && (
          <strong className={styles.messageTitle}>{message.title}</strong>
        )}
        <p className={styles.message}>{message.description}</p>
      </div>
    </article>
  );
};

export default Message;
