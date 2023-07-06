import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";

export async function getStaticPaths() {
  const maxPokemons = 1010;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const id = context.params.pokemonId;
  const res = await fetch(`${api}/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default function Pokemon({ pokemon }) {
  function formatNumber(num) {
    if (num < 10) {
      return "00" + num;
    } else if (num < 100) {
      return "0" + num;
    } else {
      return num;
    }
  }

  return (
    <div className={ styles.pokemon_container }>
      <h1 className={ styles.title }>{pokemon.name}</h1>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber(
          pokemon.id
        )}.png`}
        alt="pokemon"
        width="120"
        height="120"
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={ styles.types_container }>
            {pokemon.types.map((item, index) => (
                <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
            ))}
        </div>
      </div>
      <div className={styles.data_container}>
            <div className={styles.data_container}>
                <h4>Altura:</h4>
                <p>{pokemon.height * 10} cm</p>
            </div>
            <div className={styles.data_weight}>
                <h4>Peso:</h4>
                <p>{pokemon.weight / 10} kg</p>
            </div>
      </div>
    </div>
  );
}
