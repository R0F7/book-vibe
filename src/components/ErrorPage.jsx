import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { status, statusText, data } = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">
            <h4 className="text-9xl text-red-500 font-bold">{status}</h4>
            <p className="text-9xl font-bold">{statusText}</p>
            <h6 className="text-6xl font-bold mb-10 mt-5">{data}</h6>
            <div>
                <Link to="/" className="bg-[#59C6D2] py-2 px-3 lg:py-3 lg:px-7 text-white Work-Sans text-sm lg:text-lg font-semibold rounded-lg">Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;