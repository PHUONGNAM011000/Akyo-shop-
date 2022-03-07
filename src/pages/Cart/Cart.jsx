import Layout from "../../components/Layout/Layout/Layout";
import "./Cart.scss";
import product1 from "../../assets/images/gallery-1.jpg";

const Cart = () => {
  return (
    <Layout>
      <div id="cart">
        <div className="cart__container">
          <div className="cart__title">
            <span className="cart__title--uppercase">GIỎ HÀNG </span>
            <span className="cart__title--lowercase">(4 sản phẩm) </span>
          </div>
          <div className="cart__content">
            <div className="cart__content--product">
              <div className="cart__content--product-image">
                <img src={product1} alt="product1" />
              </div>
              <div className="cart__content--product-description">
                <div className="cart__content--product-description-text">
                  <div className="cart__content--product-description-text-name">
                    <a href="/product1">
                      Áo thun Paradox THE NEW ERA BUTTERFLY TEE (Black) - M
                    </a>
                    <button>Xóa</button>
                  </div>
                  <div className="cart__content--product-description-price">
                    <p>159.000₫</p>
                  </div>
                </div>
                <div className="cart__content--product-description-quantity">
                  <button className="cart__content--product-description-quantity-btn__decrease">
                    -
                  </button>
                  <input value={1} type="text" />
                  <button className="cart__content--product-description-quantity-btn__increase">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="cart__content">
            <div className="cart__content--product">
              <div className="cart__content--product-image">
                <img src={product1} alt="product1" />
              </div>
              <div className="cart__content--product-description">
                <div className="cart__content--product-description-text">
                  <div className="cart__content--product-description-text-name">
                    <a href="/product1">
                      Áo thun Paradox THE NEW ERA BUTTERFLY TEE (Black) - M
                    </a>
                    <button>Xóa</button>
                  </div>
                  <div className="cart__content--product-description-price">
                    <p>159.000₫</p>
                  </div>
                </div>
                <div className="cart__content--product-description-quantity">
                  <button className="cart__content--product-description-quantity-btn__decrease">
                    -
                  </button>
                  <input value={1} type="text" />
                  <button className="cart__content--product-description-quantity-btn__increase">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart__content--main">
          <div className="cart__content--main-gift">
            <p>
              Còn <strong>500.000₫</strong>{" "}
            </p>
            <p>
              để nhận ngay <strong>HỘP QUÀ CHO ĐƠN </strong>
            </p>
            <p>
              <strong>TRÊN 999K</strong>
            </p>
            <button>Chọn quà tặng</button>
          </div>
          <div className="cart__content--main-provisional">
            <p>Tạm tính:</p>
            <p>
              <strong>636.000₫</strong>
            </p>
          </div>
          <div className="cart__content--main-provisional cart__content--main-money">
            <p>Thành tiền:</p>
            <p>
              <strong>1.000.000₫</strong>
            </p>
          </div>
          <button className="cart__content--main-button cart__content--main-payment">
            THANH TOÁN NGAY
          </button>
          <button className="cart__content--main-button cart__content--main-continue">
            TIẾP TỤC MUA HÀNG
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
