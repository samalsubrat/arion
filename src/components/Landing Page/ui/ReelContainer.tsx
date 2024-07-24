const ReelContainer = ({ source }: { source: string }) => {
  return (
    <div className="aspect-w-9 aspect-h-16 rounded-xl">
      <video
        autoPlay
        muted
        className="rounded-xl object-cover w-full h-full"
        preload="none"
        loop
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export default ReelContainer;
