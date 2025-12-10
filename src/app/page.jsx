"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/mainComponents/Header/Header";
import Hero from "../../components/mainComponents/Hero/Hero";
import Category from "../../components/mainComponents/Category/Category";
import FlashSales from "../../components/mainComponents/FlashSale/FlashSale";
import Today from "../../components/mainComponents/Today/Today";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Category />
      <FlashSales />
      <Today />
    </div>
  );
}
