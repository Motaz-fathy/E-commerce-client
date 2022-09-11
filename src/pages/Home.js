import React from "react";
import { useParams } from "react-router";
import Search from "../components/Search";
import { Footer } from "../components/footer";
import "./pages.css";

// import  pages
import  ShopSection  from "../components/homeComponent/shopSection";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
const Home = () => {
  const {keyword , pagenumber} = useParams()
  return (
    <>
    <Navbar />
    <Header />
    <div className="container">
  <div className="row">
    <div className="col-0">
    </div>
    <div className="col-12">
     <Search />
     <ShopSection keyword={keyword} pagenumber={pagenumber} />
    </div>
    <div className="col-0">
    </div>
  </div>

</div>
<Footer />
    </>

  );
};
export default Home;
