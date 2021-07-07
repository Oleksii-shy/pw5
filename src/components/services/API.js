import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

let getUsers = () => axiosInstance('/users');
let getPosts = () => axiosInstance('/posts');
let getUserPosts = (id) => axiosInstance('/users/' + id + '/posts');
let getComments = () => axiosInstance('/comments');
let getPostComments = (id) => axiosInstance('/posts/' + id + '/comments');

export {getUsers, getPosts, getUserPosts, getComments, getPostComments}