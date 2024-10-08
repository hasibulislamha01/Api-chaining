import axios from "axios";
import { useEffect, useState } from "react";

const useGetPostOptions = () => {

    const [posts, setPosts] = useState([])
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => setPosts(response?.data))
        .catch(error => console.error(error?.message))
    }, [])
    const postOptions = posts?.map(post => {
        return(
            {
                value: post.id,
                label: post.id
            }
        )
    })
    return postOptions
};

export default useGetPostOptions;