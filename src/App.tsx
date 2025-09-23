import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Components/Navbar"
import type {coin} from './reduxstore/Slice'
import Mainbody from "./Components/Mainbody"
import About from "./Components/About"
import Contact from "./Components/Contact"
import { Provider } from "react-redux"
import { store } from "./reduxstore/store"
import { useState } from "react"


function App(){
  const [add, setAdd]=useState<coin[]>([])

  return(
    <Provider store={store}>  
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Mainbody add={add} setAdd={setAdd} />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </Provider>
  )
}
export default App
  
