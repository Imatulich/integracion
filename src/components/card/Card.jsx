import styles from "./card.module.css"


function Card(props) {
  const {character, onClose} = props;
   
  return (
      <div className={styles.tarjeta}>
         <button className={styles.boton}onClick={()=>{onClose(character.id)}}>X</button>
         <h2>name:{character.name}</h2>
         <h2>species:{character.species}</h2>
         <h2>gender:{character.gender}</h2>
         <img className={styles.imagen}src={character.image} alt={character.name} />
      </div>
   );
}


export default Card;