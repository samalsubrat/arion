import { Instagram, Youtube } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <>
      <MaxWidthWrapper className="border-t border-gray-800 bg-black-100">
        <div className=" w-full flex flex-col md:flex-row items-center justify-between py-10 text-base text-white max-md:space-y-4">
          <div className="text-center">
            &copy; Arion - Mechanical Keyboards and E-Sports Accessories
          </div>
          <div className="gap-4 flex">
            <a href="https://www.instagram.com/arion.in/" target="_blank">
              <Instagram className="hover:cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@ArionByMeckeys" target="_blank"> 
              <Youtube className="hover:cursor-pointer" />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Footer;
