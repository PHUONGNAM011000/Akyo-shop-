import Layout from "../../components/Layout/Layout/Layout";
import "./ShowProduct.scss";
import product1 from "../../assets/images/gallery-1.jpg";
import product2 from "../../assets/images/gallery-2.jpg";
import product3 from "../../assets/images/gallery-3.jpg";
import product4 from "../../assets/images/gallery-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ShowProduct = () => {
  return (
    <Layout>
      <div id="show__product">
        <div className="row__image">
          <div className="row__image--main">
            <img src={product1} alt="product1" />
          </div>
          <div className="row__image--next">
            <div className="row__image--next-border">
              <img src={product1} alt="product1" />
            </div>
            <div className="row__image--next-border">
              <img src={product2} alt="product2" />
            </div>
            <div className="row__image--next-border">
              <img src={product3} alt="product3" />
            </div>
            <div className="row__image--next-border">
              <img src={product4} alt="product4" />
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div className="owl-next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="product__content">
          <div className="product__content--title">
            <h1>Áo thun Paradox THE NEW ERA BUTTERFLY TEE (Black)</h1>
          </div>
          <div className="product__content--price">
            <span className="product__content--price-sale">159.000đ</span>
            <span className="product__content--price-origin">450.000₫</span>
            <span className="product__content--discount">
              (<span>-65%</span>)
            </span>
          </div>
          <div className="product__size">
            <div className="product__size--title">Size</div>
            <div className="product__size--description">
              <div className="box__size">S</div>
              <div className="box__size">M</div>
              <div className="box__size">L</div>
              <div className="box__size">XL</div>
            </div>
          </div>
          <div className="product__order">
            <div className="product__order--amount">
              <button className="button__decrease">-</button>
              <input type="text" value="1" />
              <button className="button__increase">+</button>
            </div>
            <div className="product__order--button">
              <button className="button__buynow">MUA NGAY</button>
              <button className="button__add">THÊM VÀO GIỎ HÀNG</button>
            </div>
            <div className="product__order--icon">
              <span>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="product__gift">
            <div className="product__gift--title">NHẬP MÃ</div>
            <div className="product__gift--description">
              <span className="product__gift--description-icon">
                <img
                  src="https://bizweb.dktcdn.net/100/419/232/themes/809377/assets/egageneralproductoffers1icon.png?1641896153166"
                  alt="#"
                />
              </span>
              <div className="product__gift--description-content">
                <strong>GIFT35K </strong>để được giảm 35k cho đơn từ 700k
                <div>
                  <button className="product__gift--button">Copy</button>
                </div>
              </div>
            </div>
            <div className="product__gift--description">
              <span className="product__gift--description-icon">
                <img
                  src="https://bizweb.dktcdn.net/100/419/232/themes/809377/assets/egageneralproductoffers1icon.png?1641896153166"
                  alt="#"
                />
              </span>
              <div className="product__gift--description-content">
                <strong>GIFT35K </strong>để được giảm 35k cho đơn từ 700k
                <div>
                  <button className="product__gift--button">Copy</button>
                </div>
              </div>
            </div>
            <div className="product__gift--description">
              <span className="product__gift--description-icon">
                <img
                  src="https://bizweb.dktcdn.net/100/419/232/themes/809377/assets/egageneralproductoffers1icon.png?1641896153166"
                  alt="#"
                />
              </span>
              <div className="product__gift--description-content">
                <strong>GIFT35K </strong>để được giảm 35k cho đơn từ 700k
                <div>
                  <button className="product__gift--button">Copy</button>
                </div>
              </div>
            </div>
            <div className="product__gift--description">
              <span className="product__gift--description-icon">
                <img
                  src="https://bizweb.dktcdn.net/100/419/232/themes/809377/assets/egageneralproductoffers1icon.png?1641896153166"
                  alt="#"
                />
              </span>
              <div className="product__gift--description-content">
                <strong>GIFT35K </strong>để được giảm 35k cho đơn từ 700k
                <div>
                  <button className="product__gift--button">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowProduct;
