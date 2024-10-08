

const MakeJsonFormat = ({ data, title }) => {


    return (
        <div>
            {data && (
                <>
                    <h1 className="text-white">{title}</h1>
                    <pre id="jsonData"
                        className="max-w-md max-h-72 overflow-auto bg-gray-100 p-4 rounded-lg whitespace-pre-wrap break-all"
                    >
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </>
            )}
        </div>
    );
};

export default MakeJsonFormat;
