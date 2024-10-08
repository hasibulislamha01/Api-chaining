import { useForm } from "react-hook-form";
import axios from "axios";

const CreatePost = ({ selectedUser, setCreatedPost }) => {

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
        console.log(newPost);

        axios.post(api, newPost)
            .then(response => setCreatedPost(response?.data))
            .catch(error => console.error(error?.message))
    }

    return (
        <div className="mt-6">
            {selectedUser &&
                <div>
                    <h1 className="text-center text-xl font-bold">Create a Post</h1>

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
                            {errors.post && <p className="text-red-500">{'post is required'}</p>}
                        </div>

                        <button className="bg-pink-400">Submit</button>
                    </form>
                </div>
            }
        </div>
    );
};

export default CreatePost;