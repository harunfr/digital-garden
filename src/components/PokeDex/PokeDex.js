import React, { useEffect, useRef, useState } from "react";

const PokemonCard = (props) => {
  return (
    <div
      className="poke-card-container"
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <img src={props.imgSrc} className="poke-card-avatar"></img>
      <div className="poke-card-infos">
        <div className="poke-card-id">{props.id}</div>
        <div className="poke-card-name">{props.name}</div>
        <div className="poke-card-type">Type: {props.type}</div>
      </div>
    </div>
  );
};

const PokeDex = () => {
  const pokemonCount = useRef(10);
  const [pokemons, setPokemons] = useState([]);
  const mockPokeArray = useRef([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]);
  const colors = useRef({
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  });

  useEffect(() => {
    const fetchPokemons = async () => {
      const urls = [];
      for (let id = 1; id <= pokemonCount.current; id++) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }
      const requests = urls.map((url) => fetch(url));
      const responses = await Promise.all(requests);
      const errors = responses.filter((response) => !response.ok);

      console.log({ errorCount: errors.length, errors: errors }); //

      const json = responses.map((response) => response.json());
      const data = await Promise.all(json);

      console.log(data);

      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="poke-card-wrapper">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          imgSrc={pokemon.sprites.other.dream_world.front_default}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          backgroundColor={colors.current[pokemon.types[0].type.name]}
        />
      ))}
    </div>
  );
};

export default PokeDex;
