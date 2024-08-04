import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const measurementData = [
  "Typing Angle: 3.5º, 7.5º and 10.5º",
  "Length: 359 mm",
  "Width: 127 mm",
  "Front height including keycaps: 35 mm",
  "Weight: 1146 g",
];

const pcbLayoutData = [
  "Polling Rate (Wired Mode): 1000Hz",
  "Polling Rate (Wireless Mode): 90Hz",
  "N-Key Rollover (NKRO): Yes for both wireless and wired modes",
  "Firmware: QMK/VIA Supported or Keychron Launcher",
  "MCU: ARM Cortex-M4 32-bit STM32L432",
];

const materialsData = [
  "Frame Material: ABS + Aluminum frame",
  "Keycaps: Double-shot PBT",
  "Keycap Profile: OSA (OEM with spherical-angle)",
  "Plate Material: Aluminum",
  "Weight: 1146 g",
];

const Specs = () => {
  return (
    <MaxWidthWrapper className="py-40 xl:px-20 2xl:px-60">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 text-left">
        Technical <span className="text-[#A1E0DC]">specifications.</span>
      </h1>
      <div className="blue-gradient rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 lg:px-20 lg:py-10 mt-10 lg:mt-20">
        {/* Measurements */}
        <div className="text-center space-y-2">
          <div className="text-sm md:text-base font-medium text-white mb-4">
            Measurement
          </div>
          {measurementData.map((item, index) => (
            <div key={index}>
              <p className="text-base md:text-lg font text-slate-300">{item}</p>
              <div className="bg-slate-400/50 my-2 w-full h-[0.5px]" />
            </div>
          ))}
        </div>

        {/* PCB & Layout */}
        <div className="text-center space-y-2">
          <div className="text-sm md:text-base font-medium text-white mb-4">
            PCB & Layout
          </div>
          {pcbLayoutData.map((item, index) => (
            <div key={index}>
              <p className="text-base md:text-lg font text-slate-300">{item}</p>
              <div className="bg-slate-400/50 my-2 w-full h-[0.5px]" />
            </div>
          ))}
        </div>

        {/* Materials */}
        <div className="text-center space-y-2">
          <div className="text-sm md:text-base font-medium text-white mb-4">
            Materials
          </div>
          {materialsData.map((item, index) => (
            <div key={index}>
              <p className="text-base md:text-lg font text-slate-300">{item}</p>
              <div className="bg-slate-400/50 my-2 w-full h-[0.5px]" />
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Specs;
