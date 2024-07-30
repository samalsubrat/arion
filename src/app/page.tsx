import { Grid } from "@/components/Landing Page/Grid";
import About from "@/components/Landing Page/About";
import Products from "@/components/Landing Page/Products";
import Reels from "@/components/Landing Page/Reels";
import Reviews from "@/components/Landing Page/Reviews";
import Aurora from "@/components/Landing Page/Aurora";
import Ending from "@/components/Landing Page/Ending";

const page = () => {
  return (
    <>
      <div className="bg-black-100">
        <Aurora />
        <div className="relative -mt-32 z-40">
          <Grid />
        </div>
        <About />
        <Products />
        <Reels />
        <Reviews />
        <Ending />
      </div>
    </>
  );
};

export default page;
