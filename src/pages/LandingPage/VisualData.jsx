import { useContext } from "react";
import { StateProviderContext } from "../../Components/ContextAPI/ContextProvider";
import MakeJsonFormat from "../../Components/JsonViews/CommentsJson";
import Skeleton from "../../Components/Skeleton/Skeleton";

const VisualData = () => {
    const { userData, createdPost, comments, postLoading, commentsLoding } = useContext(StateProviderContext)
    return (
        <div className="space-y-5">
            {
                userData?.length !== 0 &&
                <MakeJsonFormat
                    title={'User Data'}
                    data={userData}
                />

            }
            {
                postLoading ?
                    <Skeleton />
                    :
                    createdPost &&
                    <MakeJsonFormat
                        title={'Created Post'}
                        data={createdPost}
                    />

            }
            {
                commentsLoding ?
                    <Skeleton />
                    :
                    comments &&
                    <MakeJsonFormat
                        title={'Comments'}
                        data={comments}
                    />

            }
        </div>
    );
};

export default VisualData;