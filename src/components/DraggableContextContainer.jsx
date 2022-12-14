import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import Sections from "./Sections";

const DraggableContextContainer = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  console.log("STATE is --> ", state);


  const handleDragEnd = (result) => {
    console.log("dragging is ended, dropped on: ", result.destination);

    if (!result.destination) {
      return;
    }

    dispatch({
      type: "ADD_TO_LIST",
      payload: {
        destination: result.destination.droppableId,
        index: result.destination.index,
        item: state.lists[result.source.droppableId][result.source.index],
      },
    });
    dispatch({
      type: "REMOVE_FROM_LIST",
      payload: {
        destination: result.source.droppableId,
        index: result.source.index,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Sections />
    </DragDropContext>
  );
};

export default DraggableContextContainer;
