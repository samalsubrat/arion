import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Included = () => {
  return (
    <MaxWidthWrapper>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 text-left">
        What&apos;s <span className="text-[#A1E0DC]">included?</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 lg:pt-20">
        <div className="blue-gradient text-white text-center w-full p-5 lg:px-20 lg:py-10 rounded-lg">
          <div className="text-2xl md:text-3xl mb-2 tracking-wide">
            Fully Assembled Version
          </div>
          <div className="text-base md:text-lg font text-slate-300">
            {assembledData.map((item, index) => (
              <div key={index}>
                {item}
                <div className="bg-slate-400/50 w-full h-[0.5px] my-2" />
              </div>
            ))}
          </div>
        </div>

        {/* barebones */}
        <div className="blue-gradient text-white text-center w-full p-10 lg:px-20 lg:py-10 rounded-lg">
          <div className="text-2xl md:text-3xl mb-2 tracking-wide">
            Barebones Version
          </div>
          {barebonesData.map((item, index) => (
            <div
              key={index}
              className="text-base md:text-lg font text-slate-300"
            >
              {item.desc}
              <div className="bg-slate-400/50 w-full h-[0.5px] my-2" />
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Included;

const assembledData = [
  "1x Case",
  "1x PCB",
  "1x Steel Plate",
  "1x Sound Absorbing Foam",
  "1x Silicone Bottom",
  "5 Set of Stabilizers (PCB Screw-In)",
  "1 Set of Keycaps (Double-Shot PBT)",
  "1 Set of Switches (Gateron G Pro 3.0)",
  "1x Type-A to Type-C Cable",
  "1x Switch Puller",
  "1x Keycap Puller",
  "1x Screwdriver",
  "1x Acrylic Dust Cover",
  "3x Extra Switches (K-Pro)",
  "Extra Keycaps",
];

const barebonesData = [
  { desc: "1x Case (Without Aluminum Frame)" },
  { desc: "1x PCB" },
  { desc: "1x Steel Plate" },
  { desc: "1x Sound Absorbing Foam" },
  { desc: "1x Silicone Bottom" },
  { desc: "5 Set of Stabilizers (PCB Screw-In)" },
  { desc: "1x Type-A to Type-C Cable" },
  { desc: "1x Switch Puller" },
  { desc: "1x Keycap Puller" },
  { desc: "1x Screwdriver" },
  { desc: "1x Acrylic Dust Cover" },
  { desc: "3x Extra Switches (K-Pro)" },
];
