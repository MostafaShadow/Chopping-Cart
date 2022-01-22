import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data/data.json";
const App = () => {
  const [product] = useState(data);
  return (
    <main className="layout">
      <Header />
      <div className="content">
        <div className="wrapper">
          <div className="product-container">
            {product.map(({ id, title, desc, img, price }) => (
              <Products
                key={id}
                title={title}
                img={img}
                price={price}
                desc={desc}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default App;
