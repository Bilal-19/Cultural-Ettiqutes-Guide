import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Countries from "./Pages/Countries";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import CountryDetail from "./Pages/CountryDetail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="/country/detail/:id" element={<CountryDetail />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}