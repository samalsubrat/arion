import MaxWidthWrapper from "../MaxWidthWrapper";
import { Check } from "lucide-react";
import Marquee from "@/components/magicui/marquee";

const Reviews = () => {
  return (
    <>
      <MaxWidthWrapper>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 text-left mb-10">
          Hear from our <span className="text-[#A1E0DC]">customers.</span>
        </h1>
      </MaxWidthWrapper>
      <div className="relative pb-40 overflow-hidden">
        <div>
          <Marquee pauseOnHover>
            <div className="flex space-x-6">
              {items.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <div className="flex w-96 md:w-[450px]">
                  <div className="rounded-xl p-10 blue-gradient space-y-4">
                    <div className="flex gap-4 items-center">
                      <div className="rounded-full size-10 bg-white/60" />
                      <div>
                        <h1 className="text-lg md:text-xl lg:text-2xl text-white !leading-tight">
                          {item.name}
                        </h1>
                        <div className="font-extralight text-sm flex gap-2 items-center">
                          <Check className="size-4 text-[#A1E0DC]" />
                          Verified Purchase
                        </div>
                      </div>
                    </div>
                    <p className="text-base md:text-lg font-extralight text-white !leading-normal">
                      {item.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
          <div className="pointer-events-none absolute z-[10] inset-y-0 -left-10 w-1/3 bg-gradient-to-r from-black-100 to-transparent blur-lg overflow-hidden"></div>
          <div className="pointer-events-none absolute z-[10] inset-y-0 -right-10 w-1/3 bg-gradient-to-l from-black-100 to-transparent blur-lg overflow-hidden"></div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

const items = [
  {
    name: "Coding Stella",
    review:
      "Top-notch quality, ergonomic design, seamless multi-device connectivity, and durable build make it an ideal coding companion for comfortable and efficient typing.",
  },
  {
    name: "Vasudev",
    review:
      "Great out of the box experience without needing a firmware update on Android, windows and iPhone. Very happy with the purchase considering the fact it is my first mechanical keyboard and feels similar to a typewriter in the 90s office.",
  },
  {
    name: "Wizy",
    review:
      "Arion deskmat is the best deskmat I have used in my life. It is extremely fast and has a smooth surface.",
  },
  {
    name: "Kunal",
    review:
      "This mat is definitely up there with Artisan (Japanese) in terms of QC. The quality of stitching is above and beyond any other Indian company",
  },
];
