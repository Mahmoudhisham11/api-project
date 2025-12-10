"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h2>Mahmoud Store</h2>
      </div>
      <div className={styles.middle}>
        <Link href={"/"} className={styles.headerLinks}>
          Home
        </Link>
        <Link href={"/"} className={styles.headerLinks}>
          flash sale
        </Link>
        <Link href="#today" className={styles.headerLinks}>
          today for you!
        </Link>
        <Link href={"/"} className={styles.headerLinks}>
          best selling
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.iconsContainer}>
          <Link href={"/"} className={styles.headerIcons}>
            <IoIosNotificationsOutline />
          </Link>
          <Link href={"/"} className={styles.headerIcons}>
            <CiHeart />
          </Link>
        </div>
        <Link href={"/"} className={styles.login}>
          Login
        </Link>
      </div>

      {/* MOBILE */}
      <div className={styles.rightMobile}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <CgMenu />
        </button>
      </div>

      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <Link
          href={"/"}
          onClick={() => setMenuOpen(false)}
          className={styles.headerLinks}
        >
          Home
        </Link>
        <Link
          href={"/"}
          onClick={() => setMenuOpen(false)}
          className={styles.headerLinks}
        >
          Flash Sale
        </Link>
        <Link
          href="#today"
          onClick={() => setMenuOpen(false)}
          className={styles.headerLinks}
        >
          Today for you!
        </Link>
        <Link
          href={"/"}
          onClick={() => setMenuOpen(false)}
          className={styles.headerLinks}
        >
          Best Selling
        </Link>
        <Link
          href={"/"}
          onClick={() => setMenuOpen(false)}
          className={styles.login}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
