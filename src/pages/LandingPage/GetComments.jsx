import axios from "axios";
import { useState } from "react";

const GetComments = ({ createdPost }) => {

    const [comments, setComments] = useState(null);
    console.log(createdPost, comments);

    const handleGetComments = async (postId) => {
        const api = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        console.log(api);
        try {
            const response = await axios.get(api)
            console.log(response)
            setComments(response?.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="mt-12">
            {
                createdPost &&
                <div>
                    <button
                        onClick={() => handleGetComments(createdPost?.id)}
                        className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:scale-95 transition-all duration-100">Get Comments</button>
                </div>
            }
        </div>
    );
};

export default GetComments;