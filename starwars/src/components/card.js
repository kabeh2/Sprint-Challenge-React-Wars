import React from "react";
import Character from "./Character";

const MediaCard = props => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 1064,
        flexWrap: "wrap",
        margin: "auto",
        justifyContent: "space-between"
      }}
    >
      {props.data.map((character, index) => (
        <Character
          name={character.name}
          data={character}
          key={index}
          index={index}
          expanded={props.expanded}
        />
      ))}
    </div>
  );
};

export default MediaCard;
