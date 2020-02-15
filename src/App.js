import React, { useState, useEffect } from "react";
import "./App.scss";
import Input from "./components/Input/Input";
import axios from "axios";
import Item from "./components/Item/Item";
import Cocktail from "./components/Cocktail/Cocktail";
import Header from "./components/Header/Header";

const API_DRINK_LIST = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/search.php"
});
const API_DRINK_ID = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php"
});

function App() {
  const [query, setQuery] = useState("?s=mojito");
  const [resList, setResList] = useState([]);
  const [drinkId, setDrinkId] = useState("");
  const [drinkData, setDrinkData] = useState("");
  const [drinkSelected, setDrinkSelected] = useState(false);

  useEffect(() => {
    API_DRINK_LIST.get(query)
      .then(res => {
        setResList(res.data.drinks);
      })
      .catch(err => {
        console.log(err);
      });
  }, [query]);

  useEffect(() => {
    API_DRINK_ID.get(drinkId)
      .then(res => {
        setDrinkData(res.data.drinks[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [drinkId]);

  // create querys
  function queryDrinkList(drinkName) {
    const queryDL = "?s=" + drinkName;
    setQuery(queryDL);
    setDrinkSelected(false);
  }
  function queryDrinkId(drinkId) {
    const queryDId = "?i=" + drinkId;
    setDrinkId(queryDId);
    setDrinkSelected(true);
  }

  // render functions
  function viewDrinkList() {
    if (resList) {
      return resList.map(res => {
        return <Item key={res.strDrink} data={res} getId={queryDrinkId} />;
      });
    } else {
      return "No data";
    }
  }
  function renderBody() {
    if (drinkSelected === true) {
      return <Cocktail data={drinkData} />;
    } else {
      return <div className="resList">{viewDrinkList()}</div>;
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Input handleSubmit={queryDrinkList} />
        {renderBody()}
      </div>
    </div>
  );
}

export default App;
