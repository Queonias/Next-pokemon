import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css"


export default function Card({pokemon}) {

    function formatNumber(num) {
        if (num < 10) {
          return "00" + num;
        } else if (num < 100) {
          return "0" + num;
        } else {
          return num;
        }
      }
      

    return(
     <div className={ styles.card }>
        <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber(pokemon.id)}.png`} 
        alt="pokemon" 
        width="120" 
        height="120"
        />
        <p className={ styles.id }>#{pokemon.id}</p>
        <h3 className={ styles.title }>{pokemon.name}</h3>
        <Link className={ styles.btn } href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
     </div>
    )
}