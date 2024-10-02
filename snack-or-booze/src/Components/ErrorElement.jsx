import { useRouteError } from "react-router-dom";

/** displays an error for a nicer catch-all page. Also good for debugging */
const ErrorElement = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{ error.statusText || error.message }</i>
            </p>
        </div>
    );
};

export default ErrorElement;
