import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { RootState } from "../reduxstore/store";
import CustomLegend from "./customLegend";
import { motion } from "framer-motion";
import { fadeup, fadein } from "../Components/Motion";
import { Textview } from "./Textview";

function Section5() {
  const view=Textview()
  const data = useSelector((state: RootState) => state.coins.coins);


  return (
    <motion.div 
    variants={view ? fadeup : fadein}
    initial="initial"
     whileInView="animate"
    transition={{ duration: 0.5 }}
    viewport={{amount: 0.2 }} 
    className="h-[250px] w-[90%] md:w-full flex-2 bg-gray-800 rounded-lg p-4 shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#555" strokeDasharray="5 5" />
          <XAxis
            dataKey="name"
            tick={{ fill: "white", fontSize: 12 }}
            interval={0}
          />
          <YAxis
            width={60}
            tick={{ fill: "white", fontSize: 12 }}
            label={{
              value: "Price (USD)",
              angle: -90,
              position: "insideLeft",
              fill: "white",
              fontSize: 12,
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", borderRadius: 8 }}
            itemStyle={{ color: "white" }}
          />
          <Line
            type="monotone"
            dataKey="current_price"
            stroke="#3b82f6" // Tailwind blue-500
            strokeWidth={2}
            name="Coin Price"
            dot={{ r: 3 }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            content={<CustomLegend />}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default Section5;
