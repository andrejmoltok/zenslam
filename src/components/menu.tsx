"use client";

import React from "react";
import Link from "next/link";

import styles from "@/styles/menu.module.css";

export default function Menu() {
  return (
    <section>
      <ul className={styles.menu}>
        <li className={styles.li}>
          <Link href="/" className={styles.item}>
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/leaderboard" className={styles.item}>
            Leaderboard
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/collection" className={styles.item}>
            Collection
          </Link>
        </li>
        {/*AuthN */}
        <li className={styles.li}>
          <Link href="/signin" className={styles.item}>
            SignIn
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/signup" className={styles.item}>
            SignUp
          </Link>
        </li>
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
