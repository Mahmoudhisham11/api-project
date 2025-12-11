"use client";
import styles from "./styles.module.css";
import { IoIosFlash } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useProducts } from "@/app/context/ProductsContext";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

export default function FlashSales() {
  const { products } = useProducts();

  return (
    <div className={styles.flashSales}>
      <div className={styles.title}>
        <h2>
          <span>
            <IoIosFlash />
          </span>
          <span>Flash Sales</span>
        </h2>
      </div>
      <div className={styles.content}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1.5}
          spaceBetween={100}
          breakpoints={{
            0: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {products.slice(0, 10).map((p) => {
            return (
              <SwiperSlide key={p.id}>
                <div className="card">
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
                      <p>{p.title}</p>
                    </div>
                    <div className="price">
                      <strong>${p.price}</strong>
                      <button>
                        <CiShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
