import { connect, useDispatch } from "react-redux"
import { useState } from "react";
import Cards from "../../components/Cards/Cards"
import { orderCards, filterCards } from "../../Redux/actions";

function Favorites(props) {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    const handleOrder = (event) => {
      dispatch(orderCards(event.target.value))
      setAux(!aux);
    }

    const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
    }

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="order" disabled="disabled">Order by</option>
          <option value="A">Ascending order</option>
          <option value="D">Descending order</option>
        </select>
        <select onChange={handleFilter}>
          <option value="filter" disabled="disabled">Filter by</option>
          <option value="Male" >Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <Cards characters={props.favorites} />
    </div>
  );
  }
  
  const mapStateToProps = (state) => {
    return {
      favorites: state.myFavorites,
    };
  };
  
  export default connect(mapStateToProps, null)(Favorites);