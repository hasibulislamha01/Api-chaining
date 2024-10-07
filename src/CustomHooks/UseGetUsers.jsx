import axios from "axios";
import { useState } from "react";

const UseGetUsers = () => {

    const [userData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const api = `https://jsonplaceholder.typicode.com/users`
    console.log(userData);


    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get(api);
            setUsersData(response.data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    return {userData, loading, getUsers, error}


};

export default UseGetUsers;