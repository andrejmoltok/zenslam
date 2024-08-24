"use client";

import React from "react";
import Link from "next/link";

import styles from "@/styles/menu.module.css";

export default function Menu() {
  return (
    <section>
      <ul className={styles.menu}>
        <Link href="/" className={styles.item}>
          <li className={styles.li}>Home</li>
        </Link>
        <Link href="/leaderboard" className={styles.item}>
          <li className={styles.li}>Leaderboard</li>
        </Link>
        <Link href="/collection" className={styles.item}>
          <li className={styles.li}>Collection</li>
        </Link>
        {/*AuthN */}
        <Link href="/signin" className={styles.item}>
          <li className={styles.li}>SignIn</li>
        </Link>
        <Link href="/signup" className={styles.item}>
          <li className={styles.li}>SignUp</li>
        </Link>
        {/*<li className={styles.li}>
          <Link href="/submission" className={styles.item}>
            Submit
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/profile" className={styles.item}>
            Profile
          </Link>
        </li> */}
      </ul>
    </section>
  );
}
