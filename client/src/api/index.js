import axios from "axios";

//specifing our url: pointing to the backend route 
const url = "http://localhost:5000/posts";

//to make axios url calls:
const fetchPosts = () => axios.get(url);