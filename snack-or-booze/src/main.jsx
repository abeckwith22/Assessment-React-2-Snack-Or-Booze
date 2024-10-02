import "bootstrap/dist/css/bootstrap.min.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as serviceWorker from "./serviceWorker.jsx"
import './styles/index.css';

import { createBrowserRouter, RouterProvider, Navigate, redirect } from 'react-router-dom'

/* Route components */
import Root from './Routes/Root.jsx'
import Menu from "./Routes/Menu.jsx";
import Item from "./Routes/Item.jsx";
import ItemForm from "./Routes/ItemForm.jsx";

/* error components */
import ErrorElement from './Components/ErrorElement.jsx'
import ItemNotFound from './Components/ItemNotFound.jsx'

import SnackOrBoozeApi from './Api.jsx'

import convertNameToId from "./helper.js";

const getSnacks = async () => await SnackOrBoozeApi.getSnacks();
const getDrinks = async () => await SnackOrBoozeApi.getDrinks();

// const snacks = await getSnacks();
// const drinks = await getDrinks();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement/>,
  },

  /* snacks */
  {
    path: "/snacks",
    // loader: () => getSnacks, 
    element: <Menu />,
  },
  {
    path: "/snacks/:id",
    loader: async () => await getSnacks(), 
    element: <Item />,
    errorElement: <ItemNotFound/>
  },
  /* drinks */
  {
    path: "/drinks",
    element: <Menu />,
  },
  {
    path: "/drinks/:id",
    loader: async () => await getDrinks(),
    element: <Item />,
    errorElement: <ItemNotFound/>
  },
  /* post new item */
  {
    path: "/items/new",
    element: <ItemForm />,
    errorElement: <ErrorElement/>,
    action: async ({ request }) => {
      /* request takes formData from submission, converts it to an obj and adds to db.json */
      switch (request.method) {
        case "POST" : {
          const formData = await request.formData();
          // create obj, pass to api
          const whereto = formData.get("item_dropdown"); // used to tell what array were adding our new item to.
          const name = formData.get("item_name");
          const description = formData.get("item_description");
          const recipe = formData.get("item_recipe");
          const serve = formData.get("item_serve");

          const new_item = {
            "id": convertNameToId(name),
            "name":name,
            "description":description,
            "recipe":recipe,
            "serve":serve
          }

          if(whereto === "snacks"){
            await SnackOrBoozeApi.addSnacks(new_item);
          }
          else if(whereto === "drinks"){
            await SnackOrBoozeApi.addDrinks(new_item);
          }

          return redirect(`/${whereto}`);
        }
      }
    }
  },
  /* catch-all */
  {
    path: "*",
    element: <Navigate to={'/'}/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);

serviceWorker.unregister();