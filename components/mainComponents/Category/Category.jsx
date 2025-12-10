"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import women from "../../../public/images/women.png";
import men from "../../../public/images/men.png";
import electric from "../../../public/images/electric.png"

export default function Category() {
  return (
    <div className={styles.category}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={women} alt="women" fill style={{ objectFit: "cover" }} />
        </div>
        <Link href={"/women's clothing"} className={styles.text}>women's</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={men} alt="men" fill style={{ objectFit: "cover" }} />
        </div>
        <Link href={"/men's clothing"} className={styles.text}>men's</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={electric} alt="men" fill style={{ objectFit: "cover" }} />
        </div>
        <Link href={"/electronics"} className={styles.text}>electronics</Link>
      </div>
    </div>
  );
}
