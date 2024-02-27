import "./App.scss";
import NavBar1 from "./components/nav/NavBar1";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar2 from "./components/nav/NavBar2";
import NavBar3 from "./components/nav/NavBar3";
import NavBar4 from "./components/nav/NavBar4";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar1 />
        <NavBar2 />
        <NavBar3 />
        <NavBar4 />
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-5xl text-slate-900 font-bold uppercase">
                hello
              </h1>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
