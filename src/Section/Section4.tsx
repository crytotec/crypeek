import { useSelector } from "react-redux"
import type { coin } from "../reduxstore/Slice"
import type { RootState } from "../reduxstore/store";
import { motion } from "framer-motion";
import { fadeup, fadein } from "../Components/Motion";
import { Textview } from "./Textview";
interface Props{
    add:coin[]
}

function Section4({add}:Props) {
    const view=Textview()
    const filtered=useSelector((state:RootState)=>state.coins.coins)

    const show=filtered.filter((item)=>add.some((ite)=>ite.id===item.id))
   
    return(
        <motion.div 
         variants={view ? fadeup : fadein}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.5 }}
        viewport={{amount: 0.2 }} 
          className="h-auto w-[90%] md:w-full bg-gray-800">
            <div className="flex flex-col md:flex-row justify-between p-4">
              <div className="flex justify-between gap-4">
               <div className="flex flex-col">
                 {show.length > 0 ?(
                    show.map((item)=>(
                        <div className="flex items-center gap-2" key={item.id}>
                            <img src={item.image} className="w-10 h-10"/>
                            <div className="flex items-center justify-between gap-20">
                            <p>{item.name}</p>
                            <p>${item.current_price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                   ) :(<p>No Data yet</p>)}

               </div>
              </div>
              
             <div className="flex flex-col md:flex-row justify-between gap-4 bg-gray-500 w-auto rounded p-2">
                {show.length > 0 ?(
                    show.map((item)=>(
                        <div className="flex  items-center gap-2" key={item.id}>
                            <img src={item.image} className="w-10 h-10"/>
                            <div className="flex items-center justify-between gap-10 lg:gap-20">
                           <div className="flex flex-col">
                           <p>USD</p>
                           <p>United State Dollar</p>
                          </div>
                            <p>${item.current_price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                   ) :(<p>No Data yet</p>)}
              </div>

              </div>
        </motion.div>
    )
}
export default Section4