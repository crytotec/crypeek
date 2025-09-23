import { useSelector } from "react-redux";
import type { RootState } from "../reduxstore/store";
import type { coin } from "../reduxstore/Slice";
import { motion } from "framer-motion";
import { fadeup, fadein } from "../Components/Motion";
import { Textview } from "./Textview";
function Section9() {
  const view=Textview()
  const coins = useSelector((state: RootState) => state.coins.coins);

  // Calculate total portfolio value
  const totalPortfolio = coins.reduce(
    (acc, coin) => acc + coin.current_price * (coin.total_volume / coin.current_price),
    0
  );

  
  return (
    <motion.div
    variants={view ? fadeup : fadein}
    initial="initial"
    whileInView="animate"
    transition={{ duration: 0.5 }}
    viewport={{amount: 0.2 }}   
     className="w-[90%] md:w-full rounded-lg bg-gray-800 shadow-md mt-6 p-6">
      <h2 className="text-lg font-bold text-white mb-4">Portfolio Summary</h2>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-gray-400 text-sm">
          <span>Total Portfolio Value:</span>
          <span className="text-yellow-400 font-bold">${totalPortfolio.toFixed(2)}</span>
        </div>

        <div className="flex flex-col gap-2">
          {coins.length > 0 ? (
            coins.map((coin: coin) => {
              const allocation =
                (coin.current_price * (coin.total_volume / coin.current_price)) /
                totalPortfolio;

              return (
                <div
                  key={coin.id}
                  className="flex justify-between items-center text-white text-sm bg-gray-700 p-2 rounded"
                >
                  <span className="flex items-center gap-2">
                    <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                    {coin.name}
                  </span>
                  <span>
                    {allocation > 0
                      ? (allocation * 100).toFixed(2) + "%"
                      : "0%"}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No coins in portfolio</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Section9;
