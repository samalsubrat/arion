import Hero from "./components/Hero";
import Bento from "./components/Bento";
import Feature from "./components/Feature";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Videos from "./components/Videos";
import Specs from "./components/Specs";
import Included from "./components/Included";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
const page = () => {
  return (
    <>
      <div className="bg-black-100">
        <Hero />
        <Bento />
        <Feature />
        <Videos />
        <Specs />
        <Included/>
        <Gallery/>
        <Footer/>
      </div>
    </>
  );
};

export default page;
