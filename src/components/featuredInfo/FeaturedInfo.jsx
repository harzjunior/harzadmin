import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured__item">
        <span className="featured__title">Revenue</span>
        <div className="featured__money-container">
          <span className="featured__money">$ 1,570</span>
          <span className="featured__money-rate">
            -11.5% <ArrowDownward className="featured__icon negative" />
          </span>
        </div>
        <span className="featured__subtitle">Compred to last month</span>
      </div>

      <div className="featured__item">
        <span className="featured__title">Sales</span>
        <div className="featured__money-container">
          <span className="featured__money">$3,270</span>
          <span className="featured__money-rate">
            -1.5% <ArrowDownward className="featured__icon negative" />
          </span>
        </div>
        <span className="featured__subtitle">Compred to last month</span>
      </div>

      <div className="featured__item">
        <span className="featured__title">Cost</span>
        <div className="featured__money-container">
          <span className="featured__money">$2,435</span>
          <span className="featured__money-rate">
            + 5.5% <ArrowUpward className="featured__icon positive" />
          </span>
        </div>
        <span className="featured__subtitle">Compred to last month</span>
      </div>
    </div>
  );
}
