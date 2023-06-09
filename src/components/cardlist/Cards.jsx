import Card from '../card/Card';
import style from "./cards.module.css"


function Cards(props) {
   const {characters, onClose} = props
   return(
     <div className={style.container}>
      {characters.map((character)=> (
       <Card key={character.id} character={character} onClose={onClose} />
      ))}
   </div>
)
}
export default Cards