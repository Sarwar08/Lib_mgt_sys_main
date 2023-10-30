import {Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBooks from "./pages/DeleteBooks";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home1 />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/Details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBooks/>} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      
      
    </Routes>
  )
}

export default App