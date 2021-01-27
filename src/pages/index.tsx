import Head from "next/head";
import { useSubscription } from "@apollo/client";
import { MY_SUBSCRIPTION_MESSAGES } from "../queries";
import Message from "../components/Message";
import MatchHeader from "../components/MatchHeader";

import styles from "../styles/Home.module.css";

export default function Home() {
  const { data, loading, error } = useSubscription(MY_SUBSCRIPTION_MESSAGES);
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
      <MatchHeader
        teams={{
          home: "INTERNACIONAL",
          away: "GRÊMIO",
        }}
        score={{
          home: 1,
          away: 0,
        }}
      />
      <h1 style={{ marginBottom: 10 }}>Tempo-real</h1>
      <div>
        {data.queryMessage.map(message => (
          <Message
            key={message.id}
            currentTime={message.time}
            currentHalf={message.half}
            message={{ title: message.title, description: message.text }}
          />
        ))}
      </div>
    </div>
  );
}
