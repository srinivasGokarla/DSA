import { FETCH_TASK, ADD_TASK, DELETE_TASK,UPDATE_TASK } from "./action"

const reducer = (state = [], action) => {
    switch(action.type) {
        case  FETCH_TASK : 
        return action.payload;
        case  ADD_TASK : 
        return [...state, action.payload];
        case  UPDATE_TASK : 
        return state.map(task => task.id === action.payload.id ? {...task, ...action.payload} : task);
        case   DELETE_TASK : 
        return state.filter((task) => task.id !== action.payload.id);

        default 
    :
    return state;


}
}


export default reducer