import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";

export default function Product() {
  return (
    <div className="product">
      <div className="product__product-tileContainer">
        <h1 className="product__title">Product</h1>
        <Link to="/new-product">
          <button className="product__add-btn">Create</button>
        </Link>
      </div>

      {/* product top */}
      <div className="product__top">
        {/* charts from chart component */}
        <div className="product__top-left">
          {/* get (productData) as prop */}
          <Chart
            data={productData}
            title="Sles Performance"
            grids
            dataKeyValue="sales"
          />
        </div>

        {/* Info */}
        <div className="product__top-right">
          {/* product info */}
          <div className="product__info-top">
            <img
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/rfb-macbook-gold-select-201901?wid=4000&hei=3072&fmt=jpeg&qlt=95&.v=1546549130208"
              alt="product"
              className="product-info-image"
            />
            <span className="product__name">Apple Mabook Air 12 inches</span>
          </div>
          {/* product sales details */}
          <div className="product__info-bottom">
            <div className="product__info-item">
              <span className="product__info-key">id:</span>
              <span className="product__info-value">123</span>
            </div>

            {/* sales */}
            <div className="product__info-item">
              <span className="product__info-key">sales:</span>
              <span className="product__info-value">1932</span>
            </div>

            {/* active */}
            <div className="product__info-item">
              <span className="product__info-key">active:</span>
              <span className="product__info-value">active</span>
            </div>

            {/* in stock */}
            <div className="product__info-item">
              <span className="product__info-key">in stock:</span>
              <span className="product__info-value">no</span>
            </div>
          </div>
        </div>
      </div>

      {/* product bottom */}
      <div className="product__bottom">
        <div className="product__bottom-left"></div>
      </div>
    </div>
  );
}
