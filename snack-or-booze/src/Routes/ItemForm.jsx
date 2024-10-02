import { Form } from "react-router-dom";
import { Button } from "reactstrap";
import "../styles/ItemForm.css"

/** Component that allows user to submit a new item (snack, drink) */
const ItemForm = () => {
    return (
        <>
        <h1>Add a new Menu Item</h1>
        <Form method="post" action={`/items/new`}>
            <div className="mb-3">
                <label htmlFor="item_dropdown">Snack or Drink?</label>
                <div className="mb-5">
                    <select name="item_dropdown" id="item_dropdown" required>
                        <option value="snacks">Snack</option>
                        <option value="drinks">Drink</option>
                    </select>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="item_name">Name</label>
                <div className="mb-5">
                    <input type="text" id="item_name" name="item_name" placeholder="Name" required/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="item_description">Description</label>
                <div className="mb-5">
                    <input type="text" id="item_description" name="item_description" placeholder="Description" required/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="item_recipe">Recipe</label>
                <div className="mb-5">
                    <input type="text" id="item_recipe" name="item_recipe" placeholder="Recipe" required/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="item_server">Serve</label>
                <div className="mb-5">
                    <input type="text" id="item_server" name="item_serve" placeholder="Serve" required/>
                </div>
            </div>
            <Button>Add Item!</Button>
        </Form>
        </>
    );
}

export default ItemForm;
