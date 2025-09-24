import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../reduxstore/store";
import { setForm } from "../reduxstore/form";
import type { coin } from "../reduxstore/Slice";
import { motion } from "framer-motion";
import { fadein, fadeup } from "../Components/Motion";
import { Textview } from "./Textview";

interface Props {
  add: coin[];
  setAdd: React.Dispatch<React.SetStateAction<coin[]>>;
}

function Section1({ add, setAdd }: Props) {
  const views = Textview();
  const [drop, setDrop] = useState<boolean>(false);
  const [selectedCoinId, setSelectedCoinId] = useState<string>("bitcoin");
  const [formInput, setForminput] = useState<string>("");

  const dispatch = useDispatch();
  const coins = useSelector((state: RootState) => state.coins.coins);

  const selectedCoin = coins.find(
    (coin) => coin.id.toLowerCase() === selectedCoinId
  );
  const otherCoins = coins.filter(
    (coin) => coin.id.toLowerCase() !== selectedCoinId
  );
  const Filtercoins = formInput
    ? coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(formInput.toLowerCase()) ||
          coin.symbol.includes(formInput.toLowerCase())
      )
    : otherCoins;

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const updateDrop = (): void => setDrop((prev) => !prev);

  const updateform = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForminput(e.target.value);
  };

  const updateShowForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formInput) {
      const coin = coins.find(
        (item) =>
          item.name.toLowerCase() === formInput.toLowerCase() ||
          item.symbol.toLowerCase() === formInput.toLowerCase()
      );
      if (coin) {
        const exist = add.some((ite) => ite.id === coin.id);
        if (!exist) {
          dispatch(setForm({ name: coin.name }));
          setAdd([coin]);
        }
      }
      setForminput("");
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDrop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const HandleClick = (coin: coin) => {
    const check = add.find((c) => c.id === coin.id);
    if (!check) {
      setSelectedCoinId(coin.id);
      setForminput(coin.name);
      dispatch(setForm({ name: coin.name }));
      setAdd((prev) => [...prev, coin]);
      setDrop(false);
    } else {
      console.log("error");
    }
  };

  return (
    <motion.div
      variants={views ? fadeup : fadein}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.2 }}
      className="w-[90%] md:p-4 mt-4 md:w-full bg-gray-800"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex justify-between md:justify-around items-center gap-2 text-xs md:text-sm">
          <p>
            Cryptocurrencies <span className="font-bold">1589</span>
          </p>
          <p>
            Market <span className="font-bold">1589</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-start sm:justify-around gap-2 md:gap-4 w-full sm:w-auto">
          {/* Search input */}
          <form
            onSubmit={updateShowForm}
            className="relative w-full sm:w-auto"
          >
            <FaSearch className="absolute top-2 left-2 text-white" />
            <input
              value={formInput}
              onChange={updateform}
              type="text"
              placeholder="Search"
              className="w-full sm:w-40 md:w-52 text-white pl-8 py-2 rounded border-0 bg-gray-500 focus:outline-none"
            />
          </form>

          {/* Dropdown */}
          <div
            ref={dropdownRef}
            className="flex flex-col w-full sm:w-32 md:w-40"
          >
            {/* Button */}
            <div
              onClick={updateDrop}
              className="flex justify-between items-center w-full p-2 rounded bg-gray-500 text-white font-bold cursor-pointer"
            >
              <span className="truncate">
                {selectedCoin ? selectedCoin.name : "Not found"}
              </span>
              {drop ? <FaArrowUp /> : <FaArrowDown />}
            </div>

            {/* Dropdown content (now pushes content down) */}
            {drop && (
              <div className="mt-1 w-full bg-gray-500 rounded shadow-lg max-h-60 overflow-auto">
                {Filtercoins.length > 0 ? (
                  Filtercoins.map((coin) => (
                    <div
                      key={coin.id}
                      onClick={() => HandleClick(coin)}
                      className="w-full text-white text-center cursor-pointer hover:bg-gray-600 py-1"
                    >
                      {coin.name}
                    </div>
                  ))
                ) : (
                  <p className="text-center text-sm p-2">No other coins</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Section1;
