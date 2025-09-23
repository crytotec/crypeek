import type { RootState } from "../reduxstore/store";
import { FaCoins } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { coin } from "../reduxstore/Slice";
import { motion } from "framer-motion";
import { fadein, fadeup } from "../Components/Motion";
import { Textview } from "./Textview";

interface Props {
  add: coin[];
  setAdd: React.Dispatch<React.SetStateAction<coin[]>>; 
}

function Section3({ add}: Props) {
  const view=Textview()
  const [buy, setBuy] = useState<coin[]>(() => {
    try {
      const stored = localStorage.getItem("buy");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Failed to parse localStorage 'buy':", err);
      return [];
    }
  });

  const coinprice = useSelector((state: RootState) => state.coins.coins);
  const show = coinprice.filter((item) =>
    add.some((items) => items.id === item.id)
  );

  useEffect(() => {
    try {
      localStorage.setItem("buy", JSON.stringify(buy));
    } catch (err) {
      console.error("Failed to save 'buy' to localStorage:", err);
    }
  }, [buy]);

  const handleBuy = (coin: coin) => {
    const exists = buy.find((c) => c.id === coin.id);
    if (!exists) {
      setBuy((prev) => [...prev, coin]);
      alert(`You bought ${coin.name} for $${coin.current_price.toFixed(2)}`);
    } else {
      alert(`${coin.name} is already in your portfolio!`);
    }
  };


  return (
    <motion.div 
     variants={view ? fadeup : fadein}
  initial="initial"
  whileInView="animate"
  transition={{ duration: 0.5 }}
  viewport={{amount: 0.2 }} 
   className="w-[90%] md:w-full rounded lg:w-1/3 h-auto lg:p-4 bg-gray-800">
      <div className="flex flex-col">
        <div className="bg-gray-500 mx-auto mt-4 w-full p-4 rounded">
          <div className="flex gap-4 items-center">
            <FaCoins className="text-white" />
            <p>Price</p>
          </div>

          {show.length > 0 ? (
            <div className="flex flex-col gap-4 mt-4">
              {show.map((item) => (
                <div
                  className="flex flex-col items-center gap-2 bg-blue-900 w-full p-4 rounded"
                  key={item.id}
                >
                  <p className="text-white font-semibold">
                    ${item.current_price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleBuy(item)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    Buy {item.name}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No price available</p>
          )}
        </div>

        <div className="bg-gray-500 mx-auto mt-4 w-full p-4 rounded">
          <div className="flex flex-col">
            <h3 style={{ color: "blue", fontWeight: "bold" }}>All Orders</h3>
            <div className="flex justify-between">
              <h3>Order History</h3>
              <h3>Trade History</h3>
            </div>
          </div>
        </div>

  
        <div className="bg-gray-500 mx-auto mt-4 w-full p-4 rounded">
          <div className="flex flex-col gap-2">
            {show.length > 0 ? (
              show.map((item) => (
                <div className="flex items-center gap-2" key={item.id}>
                  <img src={item.image} className="w-10 h-10" />
                  <div className="flex justify-between w-full">
                    <p>{item.name}</p>
                    <p>${item.current_price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No Data yet</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Section3;
