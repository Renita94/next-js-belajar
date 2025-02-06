"use client"
import { useState } from "react";

function FoodItem(props) {
  const [count, setCount] = useState(0);

  // Placeholder image
  const placeholderImage =
    "https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg?semt=ais_hybrid";

  const tambah = () => {
    setCount(count + 1);
  };

  const kurang = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div>
      <img
        src={props.gambar || placeholderImage} // Use placeholder if no image provided
        alt={props.nama || "Food Item"}
        style={{ width: "300px", height: "200px", objectFit: "cover" }}
      />
      <p>{props.nama || "Unknown Food"}</p> {/* Default name if not provided */}
      <p>{props.harga || "Price not available"}</p> {/* Default price if not provided */}
      {count === 0 && <button onClick={tambah}>Tambah</button>}
      {count >= 1 && <div><button onClick={kurang}>-</button>
        {count}<button onClick={tambah}>+</button>          
        </div>
      }
    </div>
  );
}

export default FoodItem;
