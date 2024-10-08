import { useContext } from 'react';
import { StateProviderContext } from '../ContextAPI/ContextProvider';

const Visual = () => {
    const { userData, error, selectedUserId, createdPost, comments, customPostId } = useContext(StateProviderContext)
    console.log(comments);
    return (
        <section className='space-y-4'>
            {
                userData &&
                <div className={`${userData?.length === 0 || error ? 'bg-lightPink' : 'bg-green-500'} px-6 py-4 rounded-lg`}>
                    Fetched {userData?.length} Users
                </div>
            }
            {
                selectedUserId &&
                <div className='space-y-1'>
                    <div className={`w-[200px] px-6 py-4 rounded-lg bg-green-500`}>
                        You have selected user who has id: {selectedUserId}
                    </div>
                    <div className={`w-[200px] px-6 py-4 rounded-lg bg-slate-700 text-slate-400 text-pretty`}>
                        Now using the user id you you have selected, you will create a post.
                    </div>
                </div>
            }
            {
                createdPost &&
                <div className='space-y-1'>
                    <div className={`w-[200px] px-6 py-4 rounded-lg bg-green-500`}>
                        You have Created the post with post id {createdPost.id} and user id {createdPost?.userId}
                    </div>
                    <div className={`w-[200px] px-6 py-4 rounded-lg bg-slate-700 text-slate-400 text-pretty`}>
                        Now you will try to fetch comments of the post you have created just now.
                    </div>
                </div>
            }
            {
                comments?.length === 0 &&
                <div className='w-[200px] bg-red-400  px-2 py-4 rounded-lg'>
                    No comments available for the postId: {createdPost?.id}
                </div>

            }
            {
                comments?.length > 0 && customPostId &&
                <div className={`w-[200px] px-6 py-4 rounded-lg bg-green-500`}>
                    Found {comments.length} comments for the postId: {customPostId}
                </div>
            }
        </section>
    );
};

export default Visual;