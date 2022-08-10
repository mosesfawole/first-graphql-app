import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
const CharactersList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  console.log({ error, loading, data });
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
