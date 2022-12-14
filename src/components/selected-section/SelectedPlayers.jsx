import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import PlayerCard from "../player-list/PlayerCard";

const SelectedPlayers = () => {

  const selectedPlayers = useSelector((state) => {
    return state.lists.selectedPlayers;
  })
  return (
    <Droppable droppableId="selectedPlayers">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <Container
            style={{
              border: "2px solid #ccc",
              height: "600px",
              overflow: "auto",
            }}
          >
            {selectedPlayers.map((player, index) => {
              return (
                <Draggable
                  key={player.id}
                  draggableId={player.id}
                  index={index}
                >
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
            })}
          </Container>
        </div>
      )}
    </Droppable>
  );
};

export default SelectedPlayers;
