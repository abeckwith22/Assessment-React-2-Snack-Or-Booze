import { Card, CardBody, CardTitle } from "reactstrap"
import NavBar from "../Components/NavBar";
import "../styles/Root.css"

/* Diplays homepage for user with a navbar to navigate to 'Snacks', 'Booze', or add new drink form */
const Root = () => {
    return (
    <>
        <NavBar/>
        <main>
            <section className="col-md-8">
                <Card>
                    <CardBody className="text-center">
                        <CardTitle>
                            <h3 className="font-weight-bold">
                                Welcome to Silicon Valley&apos;s premier dive cafe!
                            </h3>
                        </CardTitle>
                    </CardBody>
                </Card>
            </section>
    </main>
    </>
    )
}

export default Root;
