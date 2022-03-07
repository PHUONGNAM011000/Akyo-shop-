import Product1 from "../../assets/images/product-1.jpg";
import Product2 from "../../assets/images/product-2.jpg";
import Product3 from "../../assets/images/product-3.jpg";
import Product4 from "../../assets/images/product-4.jpg";
import Product5 from "../../assets/images/product-5.jpg";
import Product6 from "../../assets/images/product-6.jpg";
import Product7 from "../../assets/images/product-7.jpg";
import Product8 from "../../assets/images/product-8.jpg";
import Product9 from "../../assets/images/product-9.jpg";
import Product10 from "../../assets/images/product-10.jpg";
import Product11 from "../../assets/images/product-11.jpg";
import Product12 from "../../assets/images/product-12.jpg";
import React, { useState, useEffect } from "react";
import './Home.scss';

const Home = () => {
  const products = [
    {
      id: 1,
      image: Product1,
      name: "CRUCIATE TEE",
      price: "100.000",
    },
    {
      id: 2,
      image: Product2,
      name: "ZOMBIEAR TEE",
      price: "190.000",
    },
    {
      id: 3,
      image: Product3,
      name: "YELLOW SIDE IRONY",
      price: "310.000",
    },
    {
      id: 4,
      image: Product4,
      name: "X-RAY TEE",
      price: "200.000",
    },
    {
      id: 5,
      image: Product5,
      name: "WILD ANIMALS TEE",
      price: "175.000",
    },
    {
      id: 6,
      image: Product6,
      name: "UNICORN GOT LOVED TEE",
      price: "350.000",
    },
    {
      id: 7,
      image: Product7,
      name: "TROPHY HUNTING TEE",
      price: "150.000",
    },
    {
      id: 8,
      image: Product8,
      name: "CRUCIATE TEE",
      price: "270.000",
    },
    {
      id: 9,
      image: Product9,
      name: "WEASEL TEE",
      price: "250.000",
    },
    {
      id: 10,
      image: Product10,
      name: "UNICORN GOT LOVED",
      price: "240.000",
    },
    {
      id: 11,
      image: Product11,
      name: "ADVENTURE TIME TEE",
      price: "220.000",
    },
    {
      id: 12,
      image: Product12,
      name: "WARFARE TEE",
      price: "230.000",
    },
  ];

  const [data, setData] = useState([]);

  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        priceIncrease: "price",
        nameIncrease: "name",
        priceDecrease: "price",
        nameDecrease: "name",
      };
      const sortProperty = types[type];
      const sorted =
        sortProperty === "name"
          ? type === "nameDecrease"
            ? [...products]
                .sort((a, b) =>
                  a[sortProperty] > b[sortProperty]
                    ? 1
                    : b[sortProperty] > a[sortProperty]
                    ? -1
                    : 0
                )
                .reverse()
            : [...products].sort((a, b) =>
                a[sortProperty] > b[sortProperty]
                  ? 1
                  : b[sortProperty] > a[sortProperty]
                  ? -1
                  : 0
              )
          : type === "priceDecrease"
          ? [...products].sort((a, b) => b[sortProperty] - a[sortProperty])
          : [...products]
              .sort((a, b) => b[sortProperty] - a[sortProperty])
              .reverse();

      setData(sorted);
    };

    sortArray(sortType); // eslint-disable-next-line
  }, [sortType]);

  return (
    <div id="show-product">
      <div id="product">
        <div className="small-container">
          <div className="row row-2">
            <h2>All Products</h2>
            <div className="select">
              <p>Ưu tiên theo:&nbsp;</p>
              <select
                defaultValue="Thứ Tự"
                onChange={(e) => setSortType(e.target.value)}
              >
                <option disabled>Thứ Tự</option>
                <option value="priceIncrease">Giá tăng dần</option>
                <option value="priceDecrease">Giá giảm dần</option>
                <option value="nameIncrease">Tên A-Z</option>
                <option value="nameDecrease">Tên Z-A</option>
              </select>
            </div>
          </div>
          <div className="row">
            {data.map((product) => (
              <div className="col-4 hover" key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.name}</h4>
                <p>{product.price}&nbsp;VNĐ</p>
              </div>
            ))}
          </div>
          <div className="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
