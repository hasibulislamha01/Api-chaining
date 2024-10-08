import axios from "axios";

const UseCreatePost = (newPost) => {

    const api = `https://jsonplaceholder.typicode.com/posts`
    console.log(newPost);

    const createPost = () => {
        axios.post(api, newPost)
        .then(response => console.log(response?.data))
        .catch(error => console.error(error?.message))
    }

    return createPost
    
};

export default UseCreatePost;