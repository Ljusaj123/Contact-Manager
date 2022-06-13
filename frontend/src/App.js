import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import "./styles/css/styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts/:id" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
