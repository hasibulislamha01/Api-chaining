import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { StateProviderContext } from "../../Components/ContextAPI/ContextProvider";

const CreatePost = ({ selectedUser }) => {

    const {createdPost, setCreatedPost} = useContext(StateProviderContext) 
    // console.log(selectedUser);

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()
    const api = `https://jsonplaceholder.typicode.com/posts`

    const handleAddPost = (newPostData) => {
        const userId = selectedUser
        const newPost = {
            ...newPostData,
            userId
        }
        // console.log(newPost);

        axios.post(api, newPost)
            .then(response => setCreatedPost(response?.data))
            .catch(error => console.error(error?.message))
    }

    return (
        <section className="mt-6">
            {selectedUser &&
                <div>
                    <h1 className="text-white text-center text-xl font-bold mb-6">Create a Post for user {selectedUser}</h1>

                    <form onSubmit={handleSubmit(handleAddPost)}
                        className="flex flex-col gap-4"
                    >

                        <div className="flex flex-col gap-1">
                            <input
                                {...register('title', { required: true })}
                                placeholder="Post Title"
                                type="text"
                                className="h-12 px-2 border border-slate-600 rounded-lg"
                            />
                            {errors.title && <p className="text-red-500">{'title is required'}</p>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <textarea
                                {...register('body', { required: true })}
                                placeholder="Post here"
                                className="h-12 px-2 border border-slate-600 rounded-lg"
                            />
                            {errors.body && <p className="text-red-500">{'post is required'}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-lightPink to-darkPink text-white px-6 py-3 font-semibold rounded-full hover:scale-95 transition-all duration-300"
                        >Submit</button>
                    </form>
                </div>



            }
            
        </section>
    );
};

export default CreatePost;