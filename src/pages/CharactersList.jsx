import React from "react";
import { useCharacters } from "../hooks/useCharacters";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div className="" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h5>{character.name}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
