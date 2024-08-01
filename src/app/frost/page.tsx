import Hero from "./components/Hero";
import Bento from "./components/Bento";
import Feature from "./components/Feature";
const page = () => {
  return (
    <>
      <div className="bg-black-100">
        <Hero />
        <Bento />
        <Feature />
      </div>
    </>
  );
};

export default page;
