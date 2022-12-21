import React from "react";
import "./Cart.scss";
import FP3Z from "../../assets/FeaturedProducts/FP3Z.jpg";
import FP3 from "../../assets/FeaturedProducts/FP3.jpg";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: FP3,
      img2: FP3Z,
      title: "Zip-Front Jacket with Insert Pockets",
      desc: 'Zip-Front Jacket with Insert Pockets from Campus Sutra ',
      oldPrice: 3499,
      price: 2499,
    },
  ];

  return (
    <div className="cart">
      <h2>Products in your cart</h2>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h3>{item.title}</h3>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>644</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
