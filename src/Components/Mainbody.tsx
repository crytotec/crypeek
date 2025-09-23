import React from "react";
import type { coin } from "../reduxstore/Slice";

import Section1 from "../Section/Section1";
import Section2 from "../Section/Section2";
import Section3 from "../Section/Section3";
import Section4 from "../Section/Section4";
import Section5 from "../Section/Section5";
import Section6 from "../Section/Section6";
import Section7 from "../Section/Section7";
import Section8 from "../Section/Section8";
import Section9 from "../Section/Section9";

interface Props {
  add: coin[];
  setAdd: React.Dispatch<React.SetStateAction<coin[]>>;
}

function Mainbody({ add, setAdd }: Props) {





  return (
    <div className="flex flex-col justify-center bg-[#191d20] mx-auto h-auto md:w-[98%] w-[100%] p-4 border">
      <Section1 add={add} setAdd={setAdd} />
      <Section2 add={add} />

      <div className="flex flex-col lg:flex-row justify-between p-3 gap-4 mx-auto w-[100%]">
        <Section3 add={add} setAdd={setAdd} />

        <div className="flex flex-col gap-5 w-[100%]">
          <Section4 add={add} />
          <Section5 />
        </div>

        
        <Section6 />
      </div>

      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
}

export default Mainbody;
