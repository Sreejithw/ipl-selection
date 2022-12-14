import playerData from "../../data/playerData.json";
import produce from "immer";

const initialState = {
    lists: {
        availablePlayers: playerData.players,
        selectedPlayers: [],
    },
    totalBudget: 100000,
}


function appReducer(state = initialState, action ) {
    switch(action.type) {
        case 'ADD_TO_LIST': {
            const newState = produce(state, (draftState) => {
                draftState.lists[action.payload.destination].splice(action.payload.index, 0, action.payload.item)
            })
            return newState;
        }
        case 'REMOVE_FROM_LIST': {
            const newState = produce(state, (draftState) => {
                draftState.lists[action.payload.destination].splice(action.payload.index, 1)
            })
            return newState;
        }
        default:
            return state;
    }
}

export default appReducer;