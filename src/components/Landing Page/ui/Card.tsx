import Image from "next/image";

const Card = ({
  title,
  description,
  img,
  height,
  width,
  link,
}: {
  title: string;
  description: string;
  img: string;
  height: number;
  width: number;
  link: string;
}) => {
  return (
    <div className="flex gap-10">
      <div className="p-4 md:p-6 rounded-xl flex flex-col justify-end gap-10 border border-gray-700 flex-1">
        <div className="rounded-xl overflow-hidden w-full max-h-[500px] h-full blue-gradient">
          <a href={link} target="_blank">
            <Image
              src={img}
              width={width}
              height={height}
              alt="product"
              className="rounded-xl transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer w-full h-full shadow-2xl object-cover"
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
            <div className="text-[#A1E0DC] hover:cursor-pointer hover:underline transition-all duration-300">Learn More {">"}</div>
            <a href={link} target="_blank">
              <div className="px-8 py-3 bg-[#0A1423] hover:bg-[#1A2331] transition-all duration-300 hover:cursor-pointer border border-gray-700 rounded-full">
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