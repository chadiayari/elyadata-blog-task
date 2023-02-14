import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateBlog from "./views/CreateBlog";
import { BlogPage } from "./views/BlogPage";

function App() {
  return (
    <>
      <Header title="My header" subtitle="subtitle2" />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create-blog" exact element={<CreateBlog />} />
        <Route path="/blog/:id" exact element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
