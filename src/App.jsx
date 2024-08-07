import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";
import Products from "./pages/products/Products";
import Experience from "./pages/experience/Experience";
import Center from "./pages/center/Center";
import Blog from "./pages/blog/Blog";
import ContactUs from "./pages/contactUs/ContactUs";
import Layout from "./components/layout/Layout";
import AboutUs from "./pages/aboutUs/AboutUs";
import Management from "./pages/management/Management";
import { useEffect,  useState } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import PolyCrystalline from "./pages/products/productsInnerPages/polyCrystalline/PolyCrystalline";
import MonoPerc from "./pages/products/productsInnerPages/monoPerc/MonoPerc";
import Topcon from "./pages/products/productsInnerPages/topcon/Topcon";
import MonoBiFacial from "./pages/products/productsInnerPages/monoBiFacial/MonoBiFacial";
// import BlogSingleItem from "./components/blogSingleItem/BlogSingleItem";
import BlogSingle from "./pages/blog/blogSingle/BlogSingle";
import Download from "./pages/download/Download";
import ScrollTop from "./components/scrollTop/ScrollTop";
import LocomotiveScroll from "locomotive-scroll";
import Career from "./pages/career/Career";
import { useLocation } from "react-router-dom";

function App() {
  // const [handleScroll, setHandleScroll] = useState(window.innerWidth);
  // function handleSmoothScroll() {
  //   setHandleScroll(window.innerWidth);
  // }
  // window.addEventListener("resize", handleSmoothScroll);
  // console.log(handleScroll);


  // useEffect(() => {
  //   if (handleScroll > 991) {
  //     const scroll = new LocomotoveScroll({
  //       smooth: true,
  //     });
  //   }
  // });

  // useEffect(() => {
  //   var prevScrollpos = window.pageXOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("hide-header").style.top = "0";
  //     } else {
  //       document.getElementById("hide-header").style.top =
  //         "-140px"; 
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  // }, [handleScroll]);
  const [handleScroll, setHandleScroll] = useState(window.innerWidth);
  const location = useLocation(); // To track route changes

  function handleResize() {
    setHandleScroll(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (handleScroll > 991) {
      const scroll = new LocomotiveScroll({
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, [handleScroll]);

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const header = document.getElementById("hide-header");
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
      } else {
        header.style.top = "-140px"; // Adjust as needed
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Layout>
      <ScrollTop />
      <Routes>
        <Route index path="/raaj-solar" element={<Home />} />
        <Route path="/raaj-solar/company" element={<Company />} />
        <Route path="/raaj-solar/products" element={<Products />} />
        <Route path="/raaj-solar/experience" element={<Experience />} />
        <Route path="/raaj-solar/center" element={<Center />} />
        <Route path="/raaj-solar/blog" element={<Blog />} />
        <Route path="/raaj-solar/blog/:name" element={<BlogSingle />} />
        <Route path="/raaj-solar/contact-us" element={<ContactUs />} />
        <Route path="/raaj-solar/about-us" element={<AboutUs />} />
        <Route path="/raaj-solar/management" element={<Management />} />
        <Route
          path="/raaj-solar/poly-crystalline"
          element={<PolyCrystalline />}
        />
        <Route path="/raaj-solar/mono-perc" element={<MonoPerc />} />
        <Route path="/raaj-solar/mono-bi-facial" element={<MonoBiFacial />} />
        <Route path="/raaj-solar/topcon" element={<Topcon />} />
        <Route path="/raaj-solar/download" element={<Download />} />
        <Route path="/raaj-solar/career" element={<Career />} />
      </Routes>
    </Layout>
  );
}

export default App;
