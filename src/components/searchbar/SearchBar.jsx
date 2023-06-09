import styles from "./searchbar.module.css"
import { useState } from "react";

function SearchBar(props) {
   const {onSearch} = props
  const [id , setid]= useState("")

   function changeHandler(e){
      e.preventDefault()
      let imput = e.target.value
      setid(imput);
   }

  
   return (
      <div className={styles.barra}>
          <input type='search'  value={id} onChange={changeHandler}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}


export default SearchBar;