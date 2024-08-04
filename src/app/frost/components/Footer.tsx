import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const Footer = () => {
  return (
    <MaxWidthWrapper className="pb-40">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 text-left">
        Explore <span className="text-[#A1E0DC]">Arion.</span>
      </h1>
      <div className="blue-gradient rounded-lg p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-20 ">
        {/* eclipse mini  */}
        <div className="text-center space-y-2">
          <div className="">
            <Image
              src="/eclipse.png"
              height={1270}
              width={3090}
              alt="eclipse"
              className="object-top"
            />
          </div>
          <div className="text-2xl md:text-3xl tracking-wide">Arion Eclipse Mini</div>
          <p className="text-base md:text-lg lg:text-xl font-extralight text-white">
            Best budget keyboard,<br/>doesn&apos;t hurt your pocket.
          </p>
          <div className="flex justify-around items-center">
            <div className="text-[#A1E0DC] hover:cursor-pointer hover:underline transition-all duration-300">
              Learn More {">"}
            </div>
            <a href="" target="_blank">
              <div className="px-4 py-2 text-white bg-[#0A1423] hover:bg-[#1A2331] transition-all duration-300 hover:cursor-pointer border border-gray-700 rounded-full">
                Buy Now
              </div>
            </a>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            60% Layout
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Tri-Mode: Wired, BT, 2.4G
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Hot-swappable
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Fully Customizable
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Multi Platform Support
          </p>
        </div>

        {/* deskmat  */}
        <div className="text-center space-y-2">
          <div className="">
            <Image
              src="/eclipse.png"
              height={1270}
              width={3090}
              alt="eclipse"
              className="object-top"
            />
          </div>
          <div className="text-2xl md:text-3xl tracking-wide">Arion Deskmat</div>
          <p className="text-base md:text-lg lg:text-xl font-extralight text-white">
            Best budget keyboard,<br/>doesn&apos;t hurt your pocket.
          </p>
          <div className="flex justify-around items-center">
            <div className="text-[#A1E0DC] hover:cursor-pointer hover:underline transition-all duration-300">
              Learn More {">"}
            </div>
            <a href="" target="_blank">
              <div className="px-4 py-2 text-white bg-[#0A1423] hover:bg-[#1A2331] transition-all duration-300 hover:cursor-pointer border border-gray-700 rounded-full">
                Buy Now
              </div>
            </a>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            60% Layout
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Tri-Mode: Wired, BT, 2.4G
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Hot-swappable
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Fully Customizable
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Multi Platform Support
          </p>
        </div>

        {/* coiled cable  */}
        <div className="text-center space-y-2">
          <div className="">
            <Image
              src="/eclipse.png"
              height={1270}
              width={3090}
              alt="eclipse"
              className="object-top"
            />
          </div>
          <div className="text-2xl md:text-3xl tracking-wide">Arion Coiled Cable</div>
          <p className="text-base md:text-lg lg:text-xl font-extralight text-white">
            Best budget keyboard,<br/>doesn&apos;t hurt your pocket.
          </p>
          <div className="flex justify-around items-center">
            <div className="text-[#A1E0DC] hover:cursor-pointer hover:underline transition-all duration-300">
              Learn More {">"}
            </div>
            <a href="" target="_blank">
              <div className="px-4 py-2 text-white bg-[#0A1423] hover:bg-[#1A2331] transition-all duration-300 hover:cursor-pointer border border-gray-700 rounded-full">
                Buy Now
              </div>
            </a>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            60% Layout
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Tri-Mode: Wired, BT, 2.4G
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Hot-swappable
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Fully Customizable
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal text-white">
            Multi Platform Support
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
