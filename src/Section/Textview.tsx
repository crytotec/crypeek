import { useEffect, useState } from "react";



export function Textview() {
const [isMobile, SetMobile]=useState(false);
useEffect(()=>{
    const win= () => SetMobile(window.innerWidth < 768);
    win();
    window.addEventListener('resize', win);
    return window.removeEventListener('resize', win)
},[])
 return isMobile   
}


