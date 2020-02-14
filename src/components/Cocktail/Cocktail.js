import React from "react";
import "./Cocktail.scss";
import uuidv4 from "uuid/v4";

export default function Cocktail({ data }) {
  function renderIngredients() {
    const ingList = [
      data.strIngredient1,
      data.strIngredient2,
      data.strIngredient3,
      data.strIngredient4,
      data.strIngredient5,
      data.strIngredient6
    ];
    console.log(ingList);
    if (ingList) {
      return ingList.map(ing => {
        return <div key={uuidv4()}> {ing} </div>;
      });
    } else {
      return "No data";
    }
  }
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img src={data.strDrinkThumb} alt="" />
        </div>
        <div className="card__content">
          <div className="card__name">{data.strDrink}</div>
          <div className="card__cat-glass">
            <div>{data.strCategory}</div>
            <div>{data.strGlass}</div>
          </div>
          <div className="card__text">{data.strInstructions}</div>
          <div className="card__heading">Ingredients</div>
          <div className="card__ingredients">{renderIngredients()}</div>
        </div>
      </div>
    </>
  );
}
