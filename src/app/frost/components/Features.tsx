import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Image from "next/image";

const Features = (
  {
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}
) => {
  return (
      <div className="max-lg:my-4 ">
        <div className="text-white text-center flex flex-col justify-center items-center gap-2">
          <div className="aspect-square p-4 rounded-2xl size-24 lg:h-32 lg:w-32 border-2 border-white flex justify-center items-center">
            <Image
              src={image}
              alt="QMK Via"
              height={80}
              width={80}
              draggable="false"
              className="h-[50px] lg:h-[80px] object-contain"
            />
          </div>
          <div className="space-y-1">
            <div className="text-xl md:text-2xl tracking-wide w-auto">
              {title}
            </div>
            <p className="text-sm text-slate-200 md:text-base font-extralight">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
  );
};

export default Features;
