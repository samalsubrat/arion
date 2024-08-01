const ReelContainer = ({
  source,
  title,
}: {
  source: string;
  title: string;
}) => {
  return (
    <div className="aspect-w-9 aspect-h-16 relative rounded-xl hover:cursor-pointer  hover:scale-105 transform transition-transform duration-300 border border-gray-800 shadow-lg overflow-clip">
      <p className="absolute z-10 bottom-5 left-5 text-base md:text-lg lg:text-xl text-white">
        {title}
      </p>
      <div className="absolute z-0 inset-0 bg-gradient-to-t from-black "></div>

      <video
        autoPlay
        muted
        className="rounded-xl object-cover w-full h-full"
        preload="none"
        loop
        draggable="false"
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export default ReelContainer;
