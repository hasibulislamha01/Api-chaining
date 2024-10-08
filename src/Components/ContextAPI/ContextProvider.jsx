import { createContext, useState } from "react";

export const StateProviderContext = createContext()
const ContextProvider = ({ children }) => {

    const [userData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [createdPost, setCreatedPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [customPostId, setCustomPostId] = useState(null);
    const [error, setError] = useState(null)
    console.log(selectedUserId);

    const stateData = {
        userData,
        setUsersData,
        loading, 
        setLoading,
        selectedUserId,
        setSelectedUserId,
        createdPost,
        setCreatedPost,
        comments,
        setComments,
        customPostId, 
        setCustomPostId,
        error, 
        setError
    }

    return (
        <StateProviderContext.Provider value={stateData}>
            {children}
        </StateProviderContext.Provider>
    );
};

export default ContextProvider;