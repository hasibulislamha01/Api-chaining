import axios from "axios";
import { useContext, useState } from "react";
import SelectDropDown from "../../Components/SelectDropDown/SelectDropDown";
import useGetPostOptions from "../../CustomHooks/useGetPostOptions";
import { StateProviderContext } from "../../Components/ContextAPI/ContextProvider";

const GetComments = ({ createdPost }) => {

    const { comments, setComments, customPostId, setCustomPostId, setCommentsLoading } = useContext(StateProviderContext)
    const [showCustomField, setShowCustomField] = useState(false)
    const postOptions = useGetPostOptions()
    // console.log(createdPost, comments?.length, postOptions);
    // console.log(comments);

    const handleGetComments = async (postId) => {
        setCommentsLoading(true)
        const api = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`

        console.log(api);
        try {
            const response = await axios.get(api)
            console.log(response)
            setComments(response?.data)
            setCommentsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handlePostIdChange = (selectedValue) => {
        setCustomPostId(selectedValue.value)
        // console.log(selectedValue.value);
    }

    return (
        <div className="mt-12">
            {
                createdPost &&
                <div>
                    <div className="">
                        <button
                            onClick={() => handleGetComments(createdPost?.id)}
                            className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:scale-95 transition-all duration-100"
                        >Get comments for the post id: {createdPost?.id}</button>
                        {comments?.length === 0 &&

                            <p className="py-2 text-red-500">No Comments available for the post with post id {createdPost?.id} </p>
                        }
                    </div>


                    <button
                        onClick={() => setShowCustomField(true)}
                        className={`${comments?.length !== 0 ? 'hidden' : 'block mt-2 bg-gradient-to-r from-lightPink to-darkPink text-white px-6 py-3 font-semibold rounded-full hover:scale-95 transition-all duration-300'}`}
                    >Search Comments for another post</button>

                    {
                        showCustomField &&
                        <div className="mt-3 space-y-1">
                            <SelectDropDown
                                placeholder={'Select a postId value'}
                                options={postOptions}
                                onChange={handlePostIdChange}
                            />
                            <div className="flex items-center gap-6">
                                <button
                                    disabled={!customPostId}
                                    onClick={() => handleGetComments(customPostId)}
                                    className={`${customPostId ? 'bg-lightPink hover:bg-darkPink text-white hover:scale-95' : 'text-slate-800 bg-slate-400'} px-4 py-2 rounded-lg transition-all duration-200`}
                                >Get Comments</button>

                                <button
                                    onClick={() => {
                                        setShowCustomField(false)
                                        setCustomPostId(null)
                                    }}
                                    className="text-slate-900 bg-slate-400 px-4 py-2 rounded-lg hover:scale-95 transition-all duration-200"
                                >Cancel</button>
                            </div>
                        </div>
                    }
                </div>

            }
        </div>
    );
};

export default GetComments;