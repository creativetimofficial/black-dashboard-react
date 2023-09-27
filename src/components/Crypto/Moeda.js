import React from "react";
import "../../assets/css/Moeda.css";

const Moeda = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className="moeda-container">
      <div className="moeda-row" style={{marginLeft: "100px"}}>
        <div className="moeda">
          <img src={image} alt="crypto" />
          <h2 style={{marginTop: "30px"}}>{name}</h2>
          <p className="moeda-symbol">{symbol}</p>
        </div>
        <div className="moeda-data">
          <p className="moeda-price">${price}</p>
          <p className="moeda-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="moeda-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="moeda-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="moeda-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moeda;
