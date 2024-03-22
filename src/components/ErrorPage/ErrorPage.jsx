import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oopsie! Error Occurred</h1>
            <Link className="btn" to={'/'}>Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;