import { useContext } from "react";
import SelectDropDown from "../../Components/SelectDropDown/SelectDropDown";
import UseGetUsers from "../../CustomHooks/UseGetUsers";
import CreatePost from "./CreatePost";
import GetComments from "./GetComments";
import { StateProviderContext } from "../../Components/ContextAPI/ContextProvider";
import Visual from "../../Components/VisualPresentation/Visual";
import VisualData from "./VisualData";

const LandingPage = () => {

    const { userData, loading, getUsers } = UseGetUsers()
    const { selectedUserId, createdPost, setSelectedUserId } = useContext(StateProviderContext)
    console.log(selectedUserId, createdPost);

    const handleClick = () => {
        getUsers()
    }

    const userOptions = userData?.map(user => {
        return (
            { value: user?.id, label: user?.id }
        )
    })

    const handleSetUserId = (selectedValue) => {
        setSelectedUserId(selectedValue.value)
    }

    return (
        <section className="min-h-screen container mx-auto space-y-10 pb-32">

            <h1 className="text-center">Api Chaining Dashboard</h1>
            <section className="flex items-start justify-between gap-10">


                <section className="space-y-6">
                    <section className="space-y-4">
                        <button
                            onClick={handleClick}
                            className="bg-gradient-to-r from-lightPink to-darkPink text-white px-6 py-3 font-semibold rounded-full hover:scale-110 transition-all duration-300">
                            {loading ? 'Loading...' : 'Get Users'}
                        </button>

                    </section>

                    <section>
                        {
                            userData.length &&
                            <SelectDropDown
                                placeholder='Select A User Id'
                                options={userOptions}
                                onChange={handleSetUserId}
                            />
                        }
                    </section>

                    {/* if selected a user the following contents will be displayed */}
                    <CreatePost
                        selectedUser={selectedUserId}
                    />

                    <GetComments
                        createdPost={createdPost}
                    />
                </section>

                <section>
                    <VisualData />
                </section>

                <section className="">
                    <Visual />
                </section>

            </section>

        </section>
    );
};

export default LandingPage;