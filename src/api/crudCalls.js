//contains all our CRUD calls
import axios from "axios";
import { POSTS_URI } from "./CONSTANTS";

//READ OPERATION
export const fetchPosts = () => {
  return axios.get(`${POSTS_URI}`);
};
