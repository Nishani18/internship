import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Courses from "./components/Courses";
import Blog from "./components/Blog";
import Materials from "./components/Materials";
import Teams from "./components/Teams";
import Tss from "./components/Tss";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Materials" element={<Materials />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Tss" element={<Tss />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
