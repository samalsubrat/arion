const MagicButton = () => {
  return (
    <a href="https://www.meckeys.com/brand/arion/" target="_blank">
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0A1423_0%,#6971A2_50%,#0A1423_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-[#1A2331] to-[#0A1423] px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
       Explore Now
      </span>
    </button>
    </a>
  );
};

export default MagicButton;
