import React from "react";
import "../../css/Products/products.css";

const Products = ({ id, title, desc, img, price }) => {
  return (
    <div className="product">
      <div className="container">
        <img src={img} alt="img" />
        <div className="content-header">
          <span>{title}</span>
          <span>{price}$</span>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
export default Products;
