/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

export const Grid = () => {
  return (
    <>
      <div className="bg-black-100 text-white">
        <MaxWidthWrapper className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6 relative w-full">
            <div className="relative overflow-hidden rounded-3xl font-bold border border-gray-600/50 min-h-[400px] lg:min-h-[600px] lg:col-span-1">
              <div className="absolute inset-0 top-0 rounded-xl">
                <Image
                  src="/b1.png"
                  alt="long-life"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                  loading="eager"
                  className="rounded-xl"
                />
              </div>
              <div className="relative z-10 flex flex-col justify-end text-left max-w-full rounded-xl min-h-[400px] lg:min-h-[600px] ">
                <div className="z-10">
                  <div className="text-3xl p-10 font-bold max-md:text-xl bottom-0">
                    Exquisite Precision Engineering and Craftsmanship
                  </div>
                </div>
                <div className="absolute z-0 w-full bg-gradient-to-b from-transparent to-black-100 left-0 right-0 top-0 -bottom-10 rounded-xl"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-2 min-h-[300px] max-md:min-h-[500px] lg:col-span-1">
              <div className="relative flex justify-center blue-gradient p-10 rounded-3xl border border-gray-600/50 overflow-hidden">
                <div className="absolute inset-0 rounded-3xl mix-blend-screen overflow-hidden bottom-0">
                  <Image
                    src="/b3.png"
                    alt="long-life"
                    className="rounded-3xl mix-blend-screen object-cover w-full h-full object-bottom"
                    layout="fill"
                  />
                </div>
                <div className="md:hidden lg:block">
                  <div className="p-3 px-6 bg-gradient-to-t from-transparent to-black-100 absolute rounded-full border border-gray-700 left-10 bottom-20 max-xl:bottom-10 max-xl:py-2 max-xl:px-3 max-md:text-[10px]">
                    Cordura Fabric
                  </div>
                  <div className="p-3 px-6 bg-gradient-to-t from-transparent to-black-100 absolute rounded-full border border-gray-700 bottom-10 max-xl:bottom-5 max-xl:py-2 max-xl:px-3 max-md:text-[10px]">
                    PBT Double-shot
                  </div>
                  <div className="p-3 px-6 bg-gradient-to-t from-transparent to-black-100 absolute rounded-full border border-gray-700 bottom-32 max-xl:bottom-20 right-10 max-sm:right-2 max-sm:bottom-16 max-xl:py-2 max-xl:px-3 max-md:text-[10px]">
                    Pure Copper
                  </div>
                </div>
                <div className="absolute left-10 z-10 flex flex-col justify-start text-left max-w-full rounded-xl max-lg:left-6 max-md:left-10">
                  <div className="z-10">
                    <div className="text-3xl leading-9 tracking-wide font-bold max-md:text-xl top-0">
                      Unparalleled Durability <br />
                      and Longevity for Reliable <br />
                      Performance
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center blue-gradient p-10 rounded-3xl border border-gray-600/50 overflow-hidden">
                <div className="md:hidden lg:block absolute space-y-4  text-center flex max-md:flex-col items-center justify-center lg:-top-16 -top-20 right-10 text-sm lg:text-[16px]">
                <div className="bg-[#101A2E] px-4 py-3 h-20 w-40 items-center flex justify-center border border-gray-800/20 rounded-lg"></div>
                <div className="bg-[#101A2E] px-4 py-3 h-20 w-40 items-center flex justify-center border border-gray-800/20 rounded-lg">Adjustable<br/>feet</div>
                <div className="bg-[#101A2E] px-4 py-3 h-20 w-40 items-center flex justify-center border border-gray-800/20 rounded-lg">XXL Mat</div>
                <div className="bg-[#101A2E] px-4 py-3 h-20 w-40 items-center flex justify-center border border-gray-800/20 rounded-lg">OSA Profile</div>
                </div>
                <div className="left-10 z-10 flex items-center text-left max-w-full rounded-xl">
                  <div className="z-10">
                    <p className="text-sm">Ergonomic design for</p>
                    <h1 className="text-3xl leading-9 tracking-wide font-bold max-md:text-xl top-0">
                      Effortless Comfort
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottoms */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-6 relative w-full">
            <div className="grid grid-rows-2 gap-6">
              <div className="relative flex justify-center blue-gradient p-10 rounded-3xl border border-gray-600/50 overflow-hidden pb-48">
                <div className="absolute inset-0 rounded-3xl mix-blend-screen overflow-hidden bottom-0">
                  <Image
                    src="/b4.png"
                    alt="long-life"
                    className="rounded-3xl mix-blend-screen object-cover w-full h-full object-bottom"
                    layout="fill"
                  />
                </div>

                <div className="absolute px-10 z-10 flex flex-col justify-start text-left max-w-full rounded-xl">
                  <div className="z-10 ">
                    <div className="text-3xl leading-9 tracking-wide font-bold max-md:text-xl top-0">
                      Multi-Device Pairing for Versatile Use Across Platforms
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center bg-gradient-custom bg-400% animate-gradient p-10 rounded-3xl border border-gray-600/50 overflow-hidden">
                <div className="left-10 z-10 flex flex-col text-center max-w-full rounded-xl">
                  <div className="z-10">
                    <h1 className="text-3xl leading-9 tracking-wide font-bold max-md:text-xl top-0">
                      Optimized for Maximum Productivity
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl w-full font-bold border border-gray-600/50 ">
              <div className="absolute inset-0 bottom-0 rounded-xl">
                <Image
                  src="/b5.jpeg"
                  alt="long-life"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                  priority
                  className="rounded-xl"
                />
              </div>

              <div className="relative flex items-center py-52 rounded-3xl overflow-hidden">
                <div className=" z-10 flex flex-col text-left max-w-full rounded-xl">
                  <div className="z-10 px-10 space-y-2">
                    <p className="text-sm lg:text-[16px] font-light tracking-wider">
                      BUILT TO ATTRACT
                    </p>
                    <h1 className="text-3xl leading-9 tracking-wide font-bold max-md:text-xl top-0">
                    Sleek and Modern<br/>Design to Complement<br/>Any Workspace
                    </h1>
                  </div>
                </div>
              </div>
              <div className="absolute z-0 inset-0 bg-gradient-to-bl from-transparent to-black-100/70 rounded-xl h-lvh w-lvw scale-150"></div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      
    </>
  );
};
