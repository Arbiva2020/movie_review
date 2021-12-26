// importing everything from "actions" as api, we will have a lot to import, 
//so we will not do it seperatelly
//so we will be able to use fetchPosts lik so:

import * as api from "../api";

//Action Creators:

export const getPosts = () => async(dispatch) => {
    try {
         const { data } = await api.fetchPosts();

         dispatch({ type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message)
    }
}


export const createPost = (post) => async (dispatch) => {
    try {
        //getting the data from the response
        const { data } = await api.createPost(post);
        dispatch({type: "CREATE", payload: data})
    } catch (error) {
console.log(error);
    }
}