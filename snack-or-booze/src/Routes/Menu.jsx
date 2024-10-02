import { Link } from "react-router-dom";
import "../styles/Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import useMenuHook from "../Hooks/useMenuHook";

/** Loads data from useMenuHook, displays Menu to user, used to list snacks and drinks */
const Menu = () => {
  const { items, loading, snackOrDrink} = useMenuHook();

  // renders a loading screen if api isn't loaded
  if (loading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content
          </CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${snackOrDrink}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
};

export default Menu;
