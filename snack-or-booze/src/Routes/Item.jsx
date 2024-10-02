import { useLoaderData, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import useItem from "../Hooks/useItemHook";

/* Gets item from useItem hook, displays to user item information (name, description, recipe, serve */
const Item = () => {
  const { id } = useParams();
  const items = useLoaderData();
  const item = useItem(id, items);

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
};

export default Item;
