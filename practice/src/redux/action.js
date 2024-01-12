import axios from 'axios';
 export const  FETCH_TASK = "FETCH_TASK";
 export const  ADD_TASK = "ADD_TASK";
 export const  UPDATE_TASK = "FETCH_TASK";
 export const  DELETE_TASK = "ADD_TASK";

export const fetchTask = () => async(dispatch) => {
const response = await axios.get("http://localhost:3001/task");
dispatch({type : FETCH_TASK, payload : response.data})
}
export const addTask = (task) => async(dispatch) => {
    console.log(task, "tetsing")
    const response = await axios.post("http://localhost:3001/task",{ title : task});
    
    dispatch({type : ADD_TASK, payload : response.data})
    }

    export const updateTask = (id,updatedTask) => async(dispatch) => {
        const response = await axios.put(`http://localhost:3001/task/${id}`, updatedTask);
        dispatch({type : UPDATE_TASK, payload : response.data})
        }

        export const deleteTask = (id) => async(dispatch) => {
            const response = await axios.delete(`http://localhost:3001/task/${id}`);
            dispatch({type : DELETE_TASK, payload : id})
            }