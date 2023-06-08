import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, removeFavorite } from '../../Redux/actions';

function Card(props) {
  const { character, onClose, addFavorite, removeFavorite, favorites } = props;

  const [fav, setFav] = useState(false);

  useEffect(() => {
    favorites.forEach((fav) => {
       if (fav.id === character.id) {
          setFav(true);
       }
    });
 }, [favorites, character.id]);

  function handleFavorite(character){
    if(!fav){
      addFavorite(character)
      setFav(true)
    }
    else{
      removeFavorite(character)
      setFav(false)
    }
  }

  return (
    <div className={styles.divTarjeta}>

      <button onClick={() => onClose(character.id)} className={styles.closeBtn}>X</button>

      <div className={styles.divGif}>
        <img src={character.image} alt={character.name} />
      </div>

      <button className={styles.info}>
        <Link to={`/detail/${character.id}`} className={styles.linkStl}>
          <h3 className="card-name">{character.name}</h3>
        </Link>
      </button>

      {
      fav ? (
          <button onClick={()=>handleFavorite(character.id)}>❤️</button>
      ) : (
          <button onClick={()=>handleFavorite(character)}>🤍</button>
      )
}
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return{
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id))
  }

}

const mapStateToProps = (state) => {
  return{
    favorites: state.myFavorites 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
