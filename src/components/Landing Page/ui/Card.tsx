import { cn } from "@/lib/utils";
import Image from "next/image";

const Card = ({
  title,
  description,
  img,
  height,
  width,
  link,
  className,
}: {
  title: string;
  description: string;
  img: string;
  height: number;
  width: number;
  link: string;
  className?:string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="p-4 md:p-6 rounded-lg flex flex-col justify-end gap-6 border border-gray-700 w-full md:flex-1">
        <div className="rounded-lg overflow-hidden w-full max-h-[500px] h-64 md:h-full blue-gradient">
          <a href={link} target="_blank">
            <Image
              src={img}
              width={width}
              height={height}
              alt="product"
              draggable="false"
              className={cn("rounded-lg transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer w-full h-full shadow-2xl object-cover",className)}
            />
          </a>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white">
            {title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-extralight text-white">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <div className="text-[#A1E0DC] hover:cursor-pointer hover:underline transition-all duration-300">
              Learn More {">"}
            </div>
            <a href={link} target="_blank">
              <div className="px-8 py-3 text-white bg-[#0A1423] hover:bg-[#1A2331] transition-all duration-300 hover:cursor-pointer border border-gray-700 rounded-full">
                Buy Now
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
