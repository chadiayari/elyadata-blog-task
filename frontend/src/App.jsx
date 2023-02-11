import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Header title="My header" subtitle="subtitle2" /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      {/* <Footer note="Footer Note" /> */}
    </>
  );
}
export default App;
