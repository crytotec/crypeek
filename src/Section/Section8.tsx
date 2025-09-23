import type { RootState } from "../reduxstore/store";
import { useSelector } from "react-redux";
import type { coin } from "../reduxstore/Slice";
import { motion } from "framer-motion";
import { fadeup, fadein } from "../Components/Motion";
import { Textview } from "./Textview";
function Section8() {
  const view=Textview()
  const coins = useSelector((state: RootState) => state.coins.coins);

  const gainers = [...coins]
    .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 3);

  const losers = [...coins]
    .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
    .slice(0, 3);
  
   
  return (
    <motion.div
  variants={view ? fadeup : fadein}
  initial="initial"
  whileInView="animate"
  transition={{ duration: 0.5 }}
  viewport={{ amount: 0.2 }} 
   className="w-[90%] md:w-full rounded-lg bg-gray-800 shadow-md mt-6 p-6">
      <h2 className="text-lg font-bold text-white mb-4">Market Movers (24h)</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-gray-700 p-4 rounded-xl shadow-sm">
          <h3 className="text-blue-400 font-semibold mb-2">Top Gainers</h3>
          <ul className="space-y-2">
            {gainers.map((coin: coin) => (
              <li
                key={coin.id}
                className="flex justify-between items-center text-white text-sm"
              >
                <span className="flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                  {coin.name}
                </span>
                <span className="text-green-400">
                  +{coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-gray-700 p-4 rounded-xl shadow-sm">
          <h3 className="text-red-400 font-semibold mb-2">Top Losers</h3>
          <ul className="space-y-2">
            {losers.map((coin: coin) => (
              <li
                key={coin.id}
                className="flex justify-between items-center text-white text-sm"
              >
                <span className="flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                  {coin.name}
                </span>
                <span className="text-red-400">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Section8;
