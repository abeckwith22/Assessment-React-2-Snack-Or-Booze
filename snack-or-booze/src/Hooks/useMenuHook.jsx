import { useState, useEffect } from "react";
import SnackOrBoozeApi from "../Api";

/** loads data for menu component to render */
const useMenu = (data=[], isLoading=true) => {
    const [items, setItems] = useState(data);
    const [loading, setLoading] = useState(isLoading);
    
    // used to tell whether or not user is in snacks/drinks route. 
    // since this hook isn't being used for anything other than those two routes, felt safe to just use a shorthand if.
    const snackOrDrink = window.location.toString().includes('snacks') ? "snacks" : "drinks" 

    // Depending on URL (snacks/ or drinks/), gets snacks/drinks from api and sets items to response.
    useEffect(() => {
        async function getItems() {
            // console.log(snackExist);
            let items;
            if(snackOrDrink === "snacks"){
                items = await SnackOrBoozeApi.getSnacks();
            }
            else if(snackOrDrink === "drinks"){ // assume drinks
                items = await SnackOrBoozeApi.getDrinks();
            }
            setItems(items);
            setLoading(!isLoading);
        }
        getItems();
    }, []);

    return { items, loading, snackOrDrink};
}

export default useMenu;
