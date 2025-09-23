import type { RootState } from "../reduxstore/store";
import { useSelector } from "react-redux";
import type { coin } from "../reduxstore/Slice";
import { motion } from "framer-motion";
import { fadeup,fadein } from "../Components/Motion";
import { Textview } from "./Textview";
function Section7() {
  const view=Textview()
  const coins = useSelector((state: RootState) => state.coins.coins);
  
  return (
    <motion.div 
  variants={view ? fadeup: fadein}
  initial="initial"
  whileInView="animate"
  transition={{ duration: 0.5 }}
  viewport={{ amount: 0.2 }} 
   className="w-[90%] md:w-full rounded-lg bg-gray-800 shadow-md mt-6 p-6">
      <h2 className="text-lg font-bold text-white mb-4">Top Coins Overview</h2>

      {coins.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300">
            <thead className="bg-gray-700 text-gray-400 uppercase text-xs">
              <tr>
                <th className="px-4 py-2 text-left">Coin</th>
                <th className="px-4 py-2 text-right">Price</th>
                <th className="px-4 py-2 text-right">24h Volume</th>
                <th className="px-4 py-2 text-right">High 24h</th>
              </tr>
            </thead>
            <tbody>
              {coins.slice(0, 5).map((item: coin) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-700 hover:bg-gray-700/40"
                >
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="px-4 py-2 text-right">
                    ${item.current_price.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-right truncate max-w-[120px]">
                    {item.total_volume.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-right truncate max-w-[120px]">
                    {item.high_24h.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No coins available</p>
      )}
    </motion.div>
  );
}

export default Section7;
