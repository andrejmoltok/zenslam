"use client";

import React from "react";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";

import Icon from "@mdi/react";
import {
  mdiLogin,
  mdiHome,
  mdiRhombusSplit,
  mdiBillboard,
  mdiSendCircle,
  mdiFaceManProfile,
  mdiLogout,
} from "@mdi/js";
import styles from "@/styles/menu.module.css";

export default function Menu() {
  const { user } = useUser();

  return (
    <section>
      <ul className={styles.menu}>
        <Link href="/" className={styles.item}>
          <li className={styles.li}>
            <Icon path={mdiHome} size={0.7} />
            Home
          </li>
        </Link>
        <Link href="/leaderboard" className={styles.item}>
          <li className={styles.li}>
            <Icon path={mdiBillboard} size={0.7} />
            Leaderboard
          </li>
        </Link>
        <Link href="/collection" className={styles.item}>
          <li className={styles.li}>
            <Icon path={mdiRhombusSplit} size={0.7} />
            Collection
          </li>
        </Link>
        {/*AuthN */}
        {user ? (
          <>
            <Link href="/submission" className={styles.item}>
              <li className={styles.li}>
                <Icon path={mdiSendCircle} size={0.7} />
                Submit
              </li>
            </Link>
            <Link href="/profile" className={styles.item}>
              <li className={styles.li}>
                <Icon path={mdiFaceManProfile} size={0.7} />
                Profile
              </li>
            </Link>
            <Link href="/api/auth/logout" className={styles.item}>
              <li className={styles.li}>
                <Icon path={mdiLogout} size={0.7} />
                LogOut
              </li>
            </Link>
          </>
        ) : (
          <>
            <Link href="/api/auth/login" className={styles.item}>
              <li className={styles.li}>
                <Icon path={mdiLogin} size={0.7} />
                SignIn/SignUp
              </li>
            </Link>
          </>
        )}
      </ul>
    </section>
  );
}
