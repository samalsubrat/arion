import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReelContainer from "@/components/Landing Page/ui/ReelContainer";

const Reels = () => {
  return (
    <>
      <MaxWidthWrapper className="py-40">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black text-left ">
          Get to know <span className="text-[#A1E0DC]">Arion.</span>
        </h1>
        <div className=" gap-6 pt-10">
          <Carousel>
            <CarouselContent className="py-10 pr-10 mr-2">
              {items.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <CarouselItem className="basis-1/2 md:basis-1/3 2xl:basis-1/4"> 
                  <ReelContainer source={item.source} title={item.title}/>
                </CarouselItem>
              ))}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Reels;

const items = [
  {
    source: "/v1.mp4",
    title:"Arion"
  },
  {
    source: "/v2.mp4",
    title:"Dope Motions"
  },
  {
    source: "/v3.mp4",
    title:"Trick Pilot"
  },
  {
    source: "/v4.mp4",
    title:"Ratin Ray"
  },
  {
    source: "/v5.mp4",
    title:"Rakazone Gaming"
  },
  {
    source: "/v6.mp4",
    title:"Ashish Gandhi"
  },
];
