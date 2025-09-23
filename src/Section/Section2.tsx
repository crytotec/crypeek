import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../reduxstore/store";
import { setCoins, type coin } from "../reduxstore/Slice";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadein, fadeup } from "../Components/Motion";
import {Textview} from './Textview'

interface Props{
  add:coin[]
}
function Section2({add}:Props) {
  const view=Textview()
  const dispatch = useDispatch<AppDispatch>();
  const coins = useSelector((state: RootState) => state.coins.coins);

  useEffect(() => {
    const fetchCions = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const result = await res.json();
      dispatch(setCoins(result));
    };
    fetchCions();
  }, [dispatch]);
  
  const show = coins.filter((item)=>add.some((items)=>items.id===item.id))

   

  return (
    <motion.div
    variants={view ? fadeup : fadein}
  initial="initial"
  whileInView="animate"
  transition={{ duration: 0.5 }}
  viewport={{amount: 0.2 }} 
   className="md:p-3 lg:p-4 w-full mx-auto">
      <div className="flex flex-col mt-4 gap-3">
        {show.map((items) => (
          <div
            key={items.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 rounded-md bg-gray-800 text-white gap-4 shadow-md"
          >
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <img
                src={items.image}
                alt={items.name}
                className="w-6 h-6 sm:w-10 sm:h-10"
              />
              <div>
                <h1 className="text-sm sm:text-base font-semibold">{items.name}</h1>
                <p className="text-xs text-gray-400">Vol: {items.total_volume}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:flex sm:gap-8 w-full sm:w-auto text-xs sm:text-sm">
              <div className="flex flex-col items-start">
                <p className="text-gray-400">High 24h</p>
                <h1 className="font-medium">{items.high_24h}</h1>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-400">Low 24h</p>
                <h1 className="font-medium">{items.low_24h}</h1>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gray-400">Change 24h</p>
                <h1
                  className={`font-medium ${
                    items.price_change_percentage_24h > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {items.price_change_percentage_24h.toFixed(2)}%
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Section2;
