import React, { useState } from "react";
import "./Product.scss";
import img1 from "../../assets/FeaturedProducts/FP3.jpg";
import img2 from "../../assets/FeaturedProducts/FP3Z.jpg";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [img1, img2];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h3>CAMPUS SUTRA - Zip-Front Bomber Jacket</h3>
        <span className="price">price</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          ad quae at voluptatibus reprehenderit perferendis, asperiores odio
          maiores quas id natus quidem sunt iure ipsa deserunt ab eveniet cum
          obcaecati.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="wishlist">
          <FavoriteBorderIcon />
          SAVE TO WISHLIST
        </div>
        <div className="info">
          <h4>Product Details</h4>
          <h5>CAMPUS SUTRA</h5>
          <ul>
            <li>Winterwear</li>
            <li>
              Wear this stylish Suede jacket from the house of Campus Sutra. The
              Suede jacket is comfortable to wear as the fabrics are light on
              the skin.
            </li>
            <li>Regular Fit</li>
            <li>Package contains : 1 jacket</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
