import { useState } from "react";
import SelectDropDown from "../../Components/SelectDropDown/SelectDropDown";
import UseGetUsers from "../../CustomHooks/UseGetUsers";
import CreatePost from "./CreatePost";
import GetComments from "./GetComments";

const LandingPage = () => {

    const { userData, loading, getUsers, error } = UseGetUsers()
    const [selectedUser, setSelectedUser] = useState(null)
    const [createdPost, setCreatedPost] = useState(null);
    console.log(selectedUser, createdPost);

    const handleClick = () => {
        getUsers()
    }

    const userOptions = userData?.map(user => {
        return (
            { value: user?.id, label: user?.id }
        )
    })

    const handleOptionChange = (selectedValue) => {
        setSelectedUser(selectedValue.value)
        // console.log(selectedValue.value);
    }

    return (
        <section className="min-h-screen container mx-auto">

            <h1 className="text-center">Api Chaining Dashboard</h1>


            <button
                onClick={handleClick}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-semibold rounded-lg hover:scale-95 transition-all duration-100">
                {loading ? 'Loading...' : 'Get Users'}
            </button>

            <div>

                <h1>We have {userData?.length}</h1>

                {error && <p className="text-red-500 font-semibold text-lg">Error: {error.message}</p>}

                {userData?.length !== 0 && <p className="text-green-500 font-semibold">Succesfully fetched users</p>}

            </div>

            {
                userData.length &&
                <SelectDropDown
                    placeholder='Select A User Id'
                    options={userOptions}
                    onChange={handleOptionChange}
                />
            }

            {/* if selected a user the following contents will be displayed */}
            <CreatePost
                selectedUser={selectedUser}
                setCreatedPost={setCreatedPost}
            />

            <GetComments
                createdPost={createdPost}
            />
        </section>
    );
};

export default LandingPage;