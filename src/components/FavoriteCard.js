import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import shareIconPath from '../images/shareIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
// import './css/DoneCard.css';

const FavCard = ({ favRecipe, index, handleClickShare }) => {
  const { favoriteRcps, setFavoriteRcps } = useContext(AppContext);
  const [heartIcon, setHeartIcon] = useState(
    favoriteRcps.some((r) => r.id === favRecipe) ? blackHeart : whiteHeart,
  );
  console.log(heartIcon);

  return (
    <div className="fav-recipe-container">
      <Link
        to={ `${favRecipe.type}s/${favRecipe.id}` }
        className="horizontal-image-link"
      >
        <img
          src={ favRecipe.image }
          alt="Imagem da Receita"
          data-testid={ `${index}-horizontal-image` }
          className="horizontal-image"
        />
      </Link>
      <div className="fav-recipe-details">
        <div className="category-share-container">
          <span
            className="fav-recipe-category"
            data-testid={ `${index}-horizontal-top-text` }
          >
            { favRecipe.type === 'comida' ? (
              `${favRecipe.area} - ${favRecipe.category}`
            ) : (
              `${favRecipe.alcoholicOrNot}`
            ) }
          </span>
          <input
            type="image"
            id={ `${favRecipe.type}s-${favRecipe.id} ${index}` }
            className="fav-recipe-share-icon"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIconPath }
            alt="Share"
            onClick={ handleClickShare }
          />
          <input
            type="image"
            className="fav-recipe-share-icon"
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ heartIcon }
            alt="Share"
            // onClick={ handleClickShare }
          />
        </div>
        <Link
          to={ `${favRecipe.type}s/${favRecipe.id}` }
          className="fav-recipe-name-link"
        >
          <span
            className="fav-recipe-name"
            data-testid={ `${index}-horizontal-name` }
          >
            { favRecipe.name }
          </span>
        </Link>
        <span
          className="fav-recipe-date"
          id={ `fav-recipe-info-${index}` }
          data-testid={ `${index}-horizontal-fav-date` }
        >
          {/* { `Feita em: ${favRecipe.favDate}` } */}
        </span>
        {/* <div className="fav-recipe-tag-container">
          { (favRecipe.type === 'comida') && (favRecipe.tags.length > 0) ? (
            (favRecipe.tags.slice(0, 2)).map((tag, tagIndex) => (
              <span
                key={ tagIndex }
                className="fav-recipe-tag"
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                { tag }
              </span>
            ))
          ) : (
            <> </>
          )}
        </div> */}
      </div>
    </div>
  );
};

FavCard.propTypes = {
  favRecipe: PropTypes.PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
  handleClickShare: PropTypes.func.isRequired,
};

export default FavCard;
