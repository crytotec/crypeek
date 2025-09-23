import type { coin } from "../reduxstore/Slice";
import { DollarSign, BarChart3, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeup,fadein } from "../Components/Motion";
import { Textview } from "./Textview";
function Section6() {
  const view=Textview()
  const [buy, setBuy] = useState<coin[]>(() => {
    try {
      const stored = localStorage.getItem("buy");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    const handleStorage = () => {
      const stored = localStorage.getItem("buy");
      setBuy(stored ? JSON.parse(stored) : []);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const totalValue = buy.reduce((acc, coin) => acc + coin.current_price, 0);
  
  return (
    <motion.div 
  variants={view ? fadeup : fadein}
  initial="initial"
  whileInView="animate"
  transition={{ duration: 0.5 }}
  viewport={{amount: 0.2 }} 
   className="w-[90%] md:w-full rounded-lg lg:w-1/3 bg-gray-800 shadow-md">
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-sm">
          <DollarSign className="text-blue-400 w-6 h-6 mb-2" />
          <p className="text-gray-400 text-sm">Price (USDT)</p>
          {buy.length > 0 ? (
            buy.map((item) => (
              <p key={item.id} className="text-lg font-bold text-white truncate">
                ${item.current_price.toFixed(2)}
              </p>
            ))
          ) : (
            <p className="text-gray-500">N/A</p>
          )}
        </div>

    
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-sm">
          <BarChart3 className="text-green-400 w-6 h-6 mb-2" />
          <p className="text-gray-400 text-sm">24h Volume</p>
          {buy.length > 0 ? (
            buy.map((item) => (
              <p key={item.id} className="text-green-400 font-semibold truncate">
                {item.total_volume.toLocaleString()}
              </p>
            ))
          ) : (
            <p className="text-gray-500">N/A</p>
          )}
        </div>

    
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-xl shadow-sm">
          <Wallet className="text-yellow-400 w-6 h-6 mb-2" />
          <p className="text-gray-400 text-sm">Portfolio Value</p>
          <p className="text-yellow-400 font-bold">${totalValue.toFixed(2)}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Section6;
