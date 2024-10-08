import axios from "axios";
import { useContext } from "react";
import { StateProviderContext } from "../Components/ContextAPI/ContextProvider";

const UseGetUsers = () => {

    const {userData, setUsersData, loading, setLoading, error, setError} = useContext(StateProviderContext)

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