import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";
const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);
  console.log(error, loading, data);
  if (error) return <p>Something went wrong</p>;
  if (loading) return <p>Loading ... </p>;

  return (
    <div className="character">
      <img
        src={data.character.image}
        alt={data.character.name}
        width={500}
        height={500}
      />
      <div className="character-content" key={data.character.id}>
        <h1>{data.character.name}</h1>
        <i>{data.character.gender}</i>
        <div className="character-episode">
          {data.character.episode.map((episode) => {
            return (
              <p>
                {" "}
                {episode.name} -<b> {episode.episode}</b>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
