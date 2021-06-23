import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";
import "./App.css";
import RecipeModal from "./Components/RecipeModal/RecipeModal";

function App() {
  const [searchTimer, setSearchTimer] = useState("");
  const [apiData, setApiData] = useState([]);
  const [modal, setModal] = useState(false);
  const [dishName, setDishName] = useState();
  const [dishURL, setDishURL] = useState();
  const [ingredientLines, setIngredientLines] = useState();
  const URL = "https://www.youtube.com/results?search_query=how+to+make+";

  //debouncing concept
  const handleSearch = (event) => {
    clearTimeout(searchTimer);
    const timeout = setTimeout(() => {
      axios
        .get(
          `https://api.edamam.com/search?q=${event.target.value}&app_id=4c2a518f&app_key=578f6fcfcbe465acc02994ef02bcbb40`
        )
        .then((response) => {
          setApiData(response.data.hits);
        });
    }, 200);
    setSearchTimer(timeout);
  };

  const handleRecipeLink = (name) => {
    const iteam = name.replace(/\s/g, "+");
    window.open(URL + iteam, "_blank");
  };

  const handleIngredients = (name, ingredientLines, url) => {
    setModal(!modal);
    setDishName(name);
    setIngredientLines(ingredientLines);
    setDishURL(url);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <Cards apiData={apiData} handleIngredients={handleIngredients} />
      {modal === true ? (
        <RecipeModal
          modal={modal}
          dishName={dishName}
          ingredientLines={ingredientLines}
          setModal={setModal}
          handleRecipeLink={handleRecipeLink}
          dishURL={dishURL}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
