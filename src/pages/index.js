import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    
    <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="nextjs, huntingcoder blog, hunting coder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>

        <main className={styles.main}>
          <h3>Welcome To Hunting Coder ...</h3>
          <p>A Blog For Hunting coders by a Hunting Coder </p>
        </main>
      </div>

  );
}
