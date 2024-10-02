### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

The purpose of react router is to provide/mimic client-side routing allowing your application to update URL from a link click without having to make another request to the server.

- What is a single page application?

A single page application is an application that hot-swaps react components as a user interacts with the application. Data is still preservered and typically doesn't require another request to the server to load a new page.

- What are some differences between client side and server side routing?

Some differences between client/server side routing is the way they request information. Server side routing calls and makes a request to the server anytime a new route link is clicked on, client side routing avoids this and loads data from the component without needing to make another request to your server.

- What are two ways of handling redirects with React Router? When would you use each

Two ways of handling redirects *(as of v5)* is react-routers `Redirect` and `History`. Redirect can be used as a way to catch-all 404s from a user if they enter a URL that doesn't exist for the application. We can also redirect the user by setting history to -1 value which tells the app to load the previous page.

- What are two different ways to handle page-not-found user experiences using React Router? 

You can redirect a user from the 404 with `Redirect` (with react-router v5), or you can display a page showing the 404 error if page is not found.

- How do you grab URL parameters from within a component using React Router?

You can grab URL parameters from within a component with `useParams` or specifying your route handle with `/route/:id` with **:** specifying that this is a dynamic parameter and can take any value.

- What is context in React? When would you use it?

Context in React is a way to provide a parent prop to its child components without prop drilling. Prop drilling is a method of giving a child component its parent props by passing it through multiple components, with some components not needing that prop and only serving to pass it down to the next child, React context avoids this by specifying `useContext()` in the child component allowing it to use the parents prop without having to drill through multiple components.

- Describe some differences between class-based components and function components in React.

Differences between class-based components and function-based components in React are the way it is able to interact with itself. Class Based components is the older version of a react component, it requires a `render()` and extends Reacts Component class. Function-based components allow the use of hooks are generally easier to work with, easier to read, and can have the same props for every child, but can be named differently depending on that components needs.

- What are some of the problems that hooks were designed to solve?

Hooks are designed to solve the boilerplate needed to set up a react component (class-based), helps aid in resuability, simplifies code and therefore readability.
