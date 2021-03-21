//contains all our CRUD calls
import axios from "axios";
import { POSTS_URI } from "./CONSTANTS";

//READ OPERATION
export const fetchPosts = () => {
  return axios.get(`${POSTS_URI}`);
};

//Patch operation
export const updatePosts = (id, data) => {
  return axios.patch(`${POSTS_URI}/${id}`, data);
};

//Post Operation

export const createNewPost = (data) =>{
  return axios.post(`${POSTS_URI}`,data);
}