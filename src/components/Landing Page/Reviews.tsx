import MaxWidthWrapper from "../MaxWidthWrapper";
import { Check } from "lucide-react";
import Marquee from "../magicui/marquee";
import { cn } from "@/lib/utils";

const Reviews = () => {
  const ReviewCard = ({ name, review, gradientClass }: { name: string; review: string; gradientClass?: string }) => {
    return (
      <div className="flex w-full">
        <div className="rounded-xl p-10 blue-gradient space-y-2 w-full">
          <div className="flex gap-4 items-center">
            <div className={cn("size-10 rounded-full",gradientClass)} />
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl text-white !leading-tight">
                {name}
              </h1>
              <div className="font-extralight text-sm flex gap-2 items-center">
                <Check className="size-4 text-[#A1E0DC]" />
                Verified Purchase
              </div>
            </div>
          </div>
          <p className="text-base md:text-lg font-extralight text-white !leading-normal">
            {review}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <MaxWidthWrapper>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 text-left mb-10">
          Hear from our <span className="text-[#A1E0DC]">customers.</span>
        </h1>

        <div className="relative h-[75vh] overflow-hidden">
          <div className="flex flex-col md:flex-row w-full ">
            {/* For large screens */}
            <div className="hidden 2xl:flex flex-row w-full">
              <div className="flex w-full gap-2">
                <Marquee pauseOnHover vertical className="[--duration:20s] w-1/3 flex-shrink-0">
                  {firstRow.map((item, index) => (
                    <ReviewCard
                      key={index}
                      name={item.name}
                      review={item.review}
                      gradientClass = {item.gradientClass}
                    />
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  vertical
                  className="[--duration:30s] w-1/3 flex-shrink-0"
                >
                  {secondRow.map((item, index) => (
                    <ReviewCard
                      key={index}
                      name={item.name}
                      review={item.review}
                      gradientClass = {item.gradientClass}
                    />
                  ))}
                </Marquee>
                <Marquee pauseOnHover vertical className="[--duration:10s] w-1/3 flex-shrink-0">
                  {thirdRow.map((item, index) => (
                    <ReviewCard
                      key={index}
                      name={item.name}
                      review={item.review}
                      gradientClass = {item.gradientClass}
                    />
                  ))}
                </Marquee>
              </div>
            </div>
            {/* For medium screens */}
            <div className="hidden md:flex 2xl:hidden flex-row w-full">
              <Marquee pauseOnHover vertical className="[--duration:20s] w-1/2 flex-shrink-0">
                {firstRow.map((item, index) => (
                  <ReviewCard
                    key={index}
                    name={item.name}
                    review={item.review}
                    gradientClass = {item.gradientClass}
                  />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                vertical
                className="[--duration:30s] w-1/2 flex-shrink-0"
              >
                {secondRow.map((item, index) => (
                  <ReviewCard
                    key={index}
                    name={item.name}
                    review={item.review}
                    gradientClass = {item.gradientClass}
                  />
                ))}
              </Marquee>
            </div>
            {/* For small screens */}
            <div className="md:hidden flex flex-col w-full">
              <Marquee pauseOnHover vertical className="[--duration:20s] w-full">
                {items.map((item, index) => (
                  <ReviewCard
                    key={index}
                    name={item.name}
                    review={item.review}
                    gradientClass = {item.gradientClass}
                  />
                ))}
              </Marquee>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black-100"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black-100"></div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Reviews;

const items = [
  {
    name: "Coding Stella",
    review:
      "Top-notch quality, ergonomic design, seamless multi-device connectivity, and durable build make it an ideal coding companion for comfortable and efficient typing.",
    gradientClass: "bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500" 
  },
  {
    name: "Vasudev",
    review:
      "Great out of the box experience without needing a firmware update on Android, windows and iPhone. Very happy with the purchase considering the fact it is my first mechanical keyboard and feels similar to a typewriter in the 90s office.",
    gradientClass: "bg-gradient-to-br from-green-400 via-blue-500 to-purple-600" 
  },
  {
    name: "Wizy",
    review:
      "Arion deskmat is the best deskmat I have used in my life. It is extremely fast and has a smooth surface.",
    gradientClass: "bg-gradient-to-tr from-blue-400 via-teal-500 to-green-500" 
  },
  {
    name: "Kunal",
    review:
      "This mat is definitely up there with Artisan (Japanese) in terms of QC. The quality of stitching is above and beyond any other Indian company",
    gradientClass: "bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500" 
  },
  {
    name: "Alok",
    review:
      "Excellent build quality and very comfortable to use. Highly recommended!",
    gradientClass: "bg-gradient-to-tl from-indigo-500 via-blue-600 to-purple-700" 
  },
  {
    name: "Meera",
    review:
      "Beautiful design and top-notch performance. Couldn't be happier with my purchase.",
    gradientClass: "bg-gradient-to-bl from-pink-400 via-yellow-500 to-orange-600" 
  },
  {
    name: "Raj",
    review:
      "The esports deskmat is a game-changer! The surface is perfect for quick movements and precise control. It’s definitely enhanced my gaming performance.",
    gradientClass: "bg-gradient-to-tr from-red-400 via-orange-500 to-yellow-500" 
  },
  {
    name: "Sanya",
    review:
      "I was blown away by the premium keyboard. The build quality is unmatched, the keys are incredibly responsive, and it feels luxurious to type on.",
    gradientClass: "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600" 
  },
  {
    name: "Akash",
    review:
      "These colorful coiled cables are not just a visual treat but also offer fantastic flexibility. They add a vibrant touch to my setup while maintaining durability.",
    gradientClass: "bg-gradient-to-bl from-pink-500 via-red-500 to-purple-600" 
  },
  {
    name: "Priya",
    review:
      "The esports deskmat offers exceptional comfort during long gaming sessions. The anti-slip base keeps it securely in place, and it’s easy to clean.",
    gradientClass: "bg-gradient-to-tr from-green-500 via-blue-600 to-purple-700" 
  },
  {
    name: "Nikhil",
    review:
      "Absolutely love the premium keyboard! The tactile feedback is perfect, and the backlighting options add a nice touch to my gaming rig.",
    gradientClass: "bg-gradient-to-bl from-blue-400 via-indigo-500 to-purple-600" 
  },
];


const third = Math.ceil(items.length / 3);
const firstRow = items.slice(0, third);
const secondRow = items.slice(third, 2 * third);
const thirdRow = items.slice(2 * third);
