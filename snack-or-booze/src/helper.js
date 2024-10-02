/** Helper function, takes params 'name' and converts into an id which is safe for url
 * "Cheeseburger" > "cheeseburger"
 * "Gin and Tonic" > "gin-and-tonic" 
*/
const convertNameToId = (name) => {
    return name.toLowerCase().replaceAll(" ", "-");
}

export default convertNameToId;
