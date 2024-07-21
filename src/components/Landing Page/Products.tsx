import { motion } from "framer-motion";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Card from "./ui/Card";

const Products = () => {
  return (
    <MaxWidthWrapper className="pb-40">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 text-left ">
          Our <span className="text-[#A1E0DC]">Products</span>
        </h1>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 py-20 gap-6 md:gap-12">
        {items.map((item, i) => (
          // eslint-disable-next-line react/jsx-key
          <Card
            title={item.title}
            description={item.description}
            img={item.img}
            height={item.height}
            width={item.width}
            link={item.link}
          />
        ))} 
      </div>
    </MaxWidthWrapper>
  );
};

export default Products;

const items = [
  {
    title: "Arion Frost",
    description: "Our First Flagship keyboard, upgraded K8 Pro.",
    img: "/frost.jpg",
    height: 500,
    width: 600,
    link: "https://www.meckeys.com/shop/keyboard/80-keyboard/arion-frost/",
  },
  {
    title: "Arion Eclipse Mini",
    description: "Best budget keyboard, doesn't hurt your pocket.",
    img: "/eclipse.png",
    height: 2395,
    width: 3090,
    link: "https://www.meckeys.com/shop/keyboard/80-keyboard/arion-frost/",
  },
  {
    title: "Arion Deskmat",
    description: "Our best deskmat, with premium cordura fabric",
    img: "/deskmat.jpg",
    height: 500,
    width: 600,
    link: "https://www.meckeys.com/shop/keyboard/80-keyboard/arion-frost/",
  },
  {
    title: "Arion Coiled Cable",
    description: "Premium coiled cables, with multiple options",
    img: "/cable.jpg",
    height: 500,
    width: 600,
    link: "https://www.meckeys.com/shop/keyboard/80-keyboard/arion-frost/",
  },
];

// width={689}
// height={534}