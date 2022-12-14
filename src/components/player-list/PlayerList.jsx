import React from "react";
import { Draggable } from "react-beautiful-dnd";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ players }) => {
  return players.map((player, index) => {
    return (
      <Draggable key={player.id} draggableId={player.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <PlayerCard playerDetails={player} />
          </div>
        )}
      </Draggable>
    );
  });
};

export default PlayerList;
