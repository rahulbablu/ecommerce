import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import FP1 from "../../assets/FeaturedProducts/FP1.jpg";
import FP1Z from "../../assets/FeaturedProducts/FP1Z.jpg";
import FP2Z from "../../assets/FeaturedProducts/FP2Z.jpg";
import FP2 from "../../assets/FeaturedProducts/FP2.jpg";
import FP3Z from "../../assets/FeaturedProducts/FP3Z.jpg";
import FP3 from "../../assets/FeaturedProducts/FP3.jpg";
import FP4Z from "../../assets/FeaturedProducts/FP4Z.jpg";
import FP4 from "../../assets/FeaturedProducts/FP4.jpg";

const List = () => {
  const data = [
    {
      id: 1,
      img: FP1,
      img2: FP1Z,
      title: "Color-Block Hooded Sweatshirt",
      isNew: true,
      oldPrice: 1899,
      price: 1139,
    },
    {
      id: 2,
      img: FP2,
      img2: FP2Z,
      title: "Floral Print Anarkali Kurta Set",
      isNew: true,
      oldPrice: 3999,
      price: 1600,
    },
    {
      id: 1,
      img: FP3,
      img2: FP3Z,
      title: "Zip-Front Jacket with Insert Pockets",
      oldPrice: 3499,
      price: 2499,
    },
    {
      id: 4,
      img: FP4,
      img2: FP4Z,
      title: "Chevrons Bodycon Dress",
      oldPrice: 2099,
      price: 1148,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;