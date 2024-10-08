import { useContext } from "react";
import { StateProviderContext } from "../../Components/ContextAPI/ContextProvider";
import MakeJsonFormat from "../../Components/JsonViews/CommentsJson";

const VisualData = () => {
    const { userData, createdPost, comments } = useContext(StateProviderContext)
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
                createdPost &&
                <MakeJsonFormat
                    title={'Created Post'}
                    data={createdPost}
                />

            }
            {
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