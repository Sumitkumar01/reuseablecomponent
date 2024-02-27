import "./App.scss";
import NavBar1 from "./components/NavBar1";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar1 />
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
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
