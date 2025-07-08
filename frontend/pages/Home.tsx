import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome Page</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.welcome}>
          {'WELCOME'.split('').map((letter, i) => (
            <span
              key={i}
              className={styles.letter}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </>
  );
}
