import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");
   function changeHandler (e) {
      e.preventDefault();
      let input = e.target.value;

      setId(input);
   }


   return (
      <div>
         <input type="search" value={id} onChange={changeHandler} className={styles.searchInput}/>
         <button onClick={()=>onSearch(id)} className={styles.agregarBar}>Agregar</button>
      </div>
   );
}
