import Head from "next/head";
import { useSubscription } from "@apollo/client";
import { MY_SUBSCRIPTION_MESSAGES } from "../queries";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { data, loading, error } = useSubscription(MY_SUBSCRIPTION_MESSAGES);

  if (data) {
    console.log("messages", data.queryMessage);
  }

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    console.log("error", error);
    return <p>an error happened</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Realtime TEST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Realtime</h1>
      <div>
        {data.queryMessage.map(message => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
    </div>
  );
}
