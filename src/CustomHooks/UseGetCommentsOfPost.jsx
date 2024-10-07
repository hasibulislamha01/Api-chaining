import axios from "axios";

const UseGetCommentsOfPost = (postId) => {

    const api = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    console.log(postId)
    

    const getComments = () => {
        axios.get(api)
        .then(response => console.log(response?.data))
        .catch(error => console.error(error?.message))
    }
    getComments()

};

export default UseGetCommentsOfPost;