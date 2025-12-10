"use client";
import { useProducts } from "@/app/context/ProductsContext";
import styles from "./Styles.module.css";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

export default function Today() {
  const { products } = useProducts();

  return (
    <div id="today" className={styles.today}>
      <div className={styles.title}>
        <h2>Todays For You!</h2>
      </div>
      <div className={styles.contentContaienr}>
        <div className={styles.content}>
          {products.slice(-5).map((p) => {
            return (
              <div className="card" key={p.id}>
                <div className="cardHead">
                  <Image
                    src={p.image}
                    alt="Image"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="cardBody">
                  <div className="top">
                    <p>${p.title}</p>
                  </div>
                  <div className="price">
                    <strong>{p.price}</strong>
                    <button>
                      <CiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.content}>
          {products.slice(0, 5).map((p) => {
            return (
              <div className="card" key={p.id}>
                <div className="cardHead">
                  <Image
                    src={p.image}
                    alt="Image"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="cardBody">
                  <div className="top">
                    <p>${p.title}</p>
                  </div>
                  <div className="price">
                    <strong>{p.price}</strong>
                    <button>
                      <CiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
