import UseGetUsers from "../../CustomHooks/UseGetUsers";

const LandingPage = () => {

    const { userData, loading, getUsers, error } = UseGetUsers()

    const handleClick = () => {
        getUsers()
    }



    return (
        <section className="min-h-screen container mx-auto">

            <h1 className="text-center">Api Chaining Dashboard</h1>


            <button
                onClick={handleClick}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-semibold rounded-lg hover:scale-95 transition-all duration-100">
                {loading ? 'Loading...' : 'Get Users'}
            </button>
            <h1>We have {userData?.length}</h1>
            {error && <p className="text-red-500 font-semibold text-lg">Error: {error.message}</p>}
            {userData?.length !== 0 && <p className="text-green-500 font-semibold">Succesfully fetched users</p>}
        </section>
    );
};

export default LandingPage;