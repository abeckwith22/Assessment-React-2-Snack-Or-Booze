import { useRouteError } from "react-router-dom";

/** If item isn't found returns an error component */
const ItemNotFoundError = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error">
            <h1>Item Not Found!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>Item not found!</i>
            </p>
            <p>
                <i>{ error.statusText || error.message }</i>
            </p>
        </div>
    );
};

export default ItemNotFoundError;
