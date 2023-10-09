import axios from "axios"
import { useNavigate } from "react-router-dom";
const API = "http://localhost:8000";
export const addTodos = (data) => async (dispatch) => {
    try {
        const jwttoken = localStorage.getItem('jwttoken');
        console.log(jwttoken);
        const res = await axios.post(`${API}/addtodo`, { data }, {
            headers: {
                'token': jwttoken
            }
        })
        console.log(res);
        dispatch({ type: "ADDNEW_TODO", payload: res.data })

    } catch (error) {
        console.log("Failed to Add new TODO", error.message);
    }

}

export const getAlltodos = async (dispatch) => {
    try {
        const jwttoken = localStorage.getItem('jwttoken');
        const res = await axios.get(`${API}/addtodo`, {
            headers: {
                'token': jwttoken
            }
        })
        dispatch({ type: "GETALL_TODO", payload: res.data })

    } catch (error) {
        console.log("Failed to load Todos", error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const jwttoken = localStorage.getItem('jwttoken');
        console.log(jwttoken);
        const res = await axios.get(`${API}/addtodo/${id}`, {
            headers: {
                'token': jwttoken
            }
        })
        dispatch({ type: "TOGGLE_TODO", payload: res.data })

    } catch (error) {
        console.log("Failed to load Todos", error.message);
    }
}
export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const jwttoken = localStorage.getItem('jwttoken');
        const res = await axios.put(`${API}/addtodo/${id}`, { data }, {
            headers: {
                'token': jwttoken
            }
        });

        dispatch({ type: "UPDATE_TODO", payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const jwttoken = localStorage.getItem('jwttoken');
        const res = await axios.delete(`${API}/todos/${id}`, {
            headers: {
                'token': jwttoken
            }
        });

        dispatch({ type: "DELETE_TODO", payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: "TOGGLE_TAB", selected: tab })
}

export const adduser = async (user) => {
    try {
        const res = await axios.post(`${API}/register`, { user })
    } catch (error) {
        console.log("Failed to Add new USer", error.message);
    }

}

export const UpdateProfile = async (update) => {
    try {
        const jwttoken = localStorage.getItem('jwttoken');
        const res = await axios.post(`${API}/updateprofile`, { update }, {
            headers: {
                'token': jwttoken
            }
        })
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);

    }
}
