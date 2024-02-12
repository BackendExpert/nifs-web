import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>        
        <Route path="/Contact" element={<Contact />} ></Route>      
      </Routes>
    </BrowserRouter>
  )
}