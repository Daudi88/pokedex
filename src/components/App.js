import React from "react";
import Routes from "../routes/Routes";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Navbar />
        <Footer />
      </Routes>
    </div>
  );
}

export default App;
