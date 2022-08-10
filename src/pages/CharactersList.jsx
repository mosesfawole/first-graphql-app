import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} className="" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h5>{character.name}</h5>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
