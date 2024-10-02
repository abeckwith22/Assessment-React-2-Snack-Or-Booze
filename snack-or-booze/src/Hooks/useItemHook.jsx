import { redirect } from "react-router-dom";

/** loads item data from api for Item component to render */
const useItem = (id, items) => {
    const snackOrDrink = window.location.toString().includes("snacks") ? "snacks" : "drinks";
    let item;
    item = items.find((item) => item.id === id);
    if (!item) return redirect(`/${snackOrDrink}`); // if no item exists return to Menu

    return item;
}

export default useItem;
