import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDrinkRecipe } from '../services/fetchRecipe';
import { IngredientsTaskList } from '../components';
import {
  addIngInProgressStorage,
  rmvIngFromProgressStorage,
  isDrinkInLocalStorage,
} from '../helpers/inProgressLocalStorage';

function DrinksInProgress() {
  const { id } = useParams();
  const [rcp, setRcp] = useState({
    ingList: [],
  });
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    async function getRcps() {
      const response = await fetchDrinkRecipe(id);
      const ingredients = Object.keys(response)
        .filter((e) => e.includes('strIngredient') && response[e])
        .map((e) => ({
          ing: response[e],
          checked: isDrinkInLocalStorage(response[e], id),
        }));

      setRcp({ ...response, ingList: ingredients });
    }
    getRcps();
  }, [id]);

  const handleCheckIngredient = ({ target }) => {
    const { checked, name } = target;
    const { ingList } = rcp;
    const ingredientIndex = ingList.findIndex((e) => e.ing === name);

    setRcp({
      ...rcp,
      ingList: [
        ...ingList.slice(0, ingredientIndex),
        { ing: name, checked },
        ...ingList.slice(ingredientIndex + 1),
      ],
    });

    if (checked) return addIngInProgressStorage(id, name, 'cocktails');
    rmvIngFromProgressStorage(id, name, 'cocktails');
  };

  function isFinished() {
    const { ingList } = rcp;
    if (ingList.length && ingList.every(({ checked }) => checked)) {
      setBtnDisable(false);
    }
  }

  useEffect(isFinished, [rcp]);

  return (
    <>
      <img data-testid="recipe-photo" src={ rcp.strDrinkThumb } alt={ rcp.strDrink } />
      <h1 data-testid="recipe-title">{rcp.strDrink}</h1>
      <button data-testid="share-btn" type="button">
        Compartilhar
      </button>
      <button data-testid="favorite-btn" type="button">
        Favoritar
      </button>
      <p data-testid="instructions">{rcp.strInstructions}</p>
      <h1 data-testid="recipe-category">{rcp.strAlcoholic}</h1>
      <IngredientsTaskList
        ingList={ rcp.ingList }
        handleCheckIngredient={ handleCheckIngredient }
      />
      <button data-testid="finish-recipe-btn" type="button" disabled={ btnDisable }>
        Finalizar
      </button>
    </>
  );
}

export default DrinksInProgress;
