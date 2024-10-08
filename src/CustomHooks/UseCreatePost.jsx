import axios from "axios";
import { useContext } from "react";
import { StateProviderContext } from "../Components/ContextAPI/ContextProvider";

const UseCreatePost = (newPost) => {

    const { setPostLoading } = useContext(StateProviderContext)
    const api = `https://jsonplaceholder.typicode.com/posts`
    console.log(newPost);

    const createPost = () => {
        setPostLoading(true)
        axios.post(api, newPost)
            .then(response => {
                if (response.data) {
                    setPostLoading(false)
                }
            })
            .catch(error => console.error(error?.message))
    }

    return createPost

};

export default UseCreatePost;