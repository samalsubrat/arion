import MaxWidthWrapper from "@/components/MaxWidthWrapper";
const Videos = () => {
  return (
    <MaxWidthWrapper className="xl:px-20 2xl:px-60">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="rounded-lg lg:h-[400px] border border-gray-700/50">
          <video
            autoPlay
            muted
            className="rounded-lg object-cover w-full h-full"
            preload="none"
            loop
            draggable="false"
          >
            <source src="/Videos/Frost4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="rounded-lg lg:h-[400px] border border-gray-700/50">
          <video
            autoPlay
            muted
            className="rounded-lg object-cover w-full h-full"
            preload="none"
            loop
            draggable="false"
          >
            <source src="/Videos/Frost5.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Videos;
