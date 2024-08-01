import Features from "./Features";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Feature = () => {
  return (
    <MaxWidthWrapper className="py-20 xl:px-20 2xl:px-60">
        <div className="grid grid-cols-3 lg:grid-cols-6 place-content-center mx-auto">
          {items.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Features
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        </MaxWidthWrapper>
  )
}

export default Feature

const items = [
    {
      image: "/benefits/1.svg",
      title: "Support",
      subtitle: "Program with QMK/Via",
    },
    {
      image: "/benefits/2.svg",
      title: "Switches",
      subtitle: "Hot Swappable",
    },
    {
      image: "/benefits/3.svg",
      title: "Stabilizers",
      subtitle: "PCB mount Stabilizers",
    },
    {
      image: "/benefits/4.svg",
      title: "Connectivity",
      subtitle: "Connect upto 3 Devices",
    },
    {
      image:
        "/benefits/5.svg",
      title: "Platform",
      subtitle: "Mac and Windows",
    },
    {
      "image": "/benefits/6.webp",
      "title": "Warranty",
      "subtitle": "2 Years"
    }
  ];