import Hero from "./components/Hero";
import Bento from "./components/Bento";

const page = () => {
  return (
    <>
      <div className="bg-black-100">
        {/* hero */}
        <Hero />
        {/* bento */}
        <Bento />
      </div>
    </>
  );
};

export default page;
