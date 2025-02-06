"use client"

import { useState } from "react";
import FoodItem from "./FoodItem";

export default function Checkout() {

  const [items, setItems] = useState([]);

  const getData = async () => {
    const url = "https://bevel-efficient-helicona.glitch.me/foods";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setItems(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <button onClick={getData}>Load Data</button>
      {items.map((item) => {
        return <FoodItem key={item.id} nama={item.nama} harga={item.harga} gambar={item.imageURL} />
      })}
    </div>
  );
}