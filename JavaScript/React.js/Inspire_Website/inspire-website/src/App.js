import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Sections/Navbar";
import Footer from "./Components/Sections/Footer";
import Menu from "./Components/Pages/Menu";
import Shakes from "./Components/Pages/Shakes";
import Refreshers from "./Components/Pages/Refreshers";
import Treats from "./Components/Pages/Treats";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/menu" exact Component={Menu} />
          <Route path="/shakes" exact Component={Shakes} />
          <Route path="/drinks" exact Component={Refreshers} />
          <Route path="/treats" exact Component={Treats} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
