import React from "react";
import "./Item.scss";

export default function Item({ data, getId }) {
  function handleClick() {
    getId(data.idDrink);
  }
  return (
    <>
      <div className="item" onClick={handleClick}>
        <div className="item__img">
          <img src={data.strDrinkThumb} alt="" />
        </div>
        <div className="item__name">{data.strDrink}</div>
      </div>
    </>
  );
}
