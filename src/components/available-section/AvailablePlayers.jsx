import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import PlayerList from '../player-list/PlayerList';

const AvailablePlayers = () => {
  const availablePlayers =  useSelector((state) => {
    return state.lists.availablePlayers;
  })

  return (
      <Droppable droppableId="availablePlayers">
        {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={{ border:"2px solid #ccc", height:"600px", overflow:"auto" }}>
              <PlayerList players={availablePlayers}/>
            </div>
        )
        }
      </Droppable>

  )
}

export default AvailablePlayers