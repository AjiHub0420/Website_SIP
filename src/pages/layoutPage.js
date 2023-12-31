import { Outlet } from "react-router-dom";
import NavLayout from "../components/navbarComponent";
import Container from 'react-bootstrap/Container'
const BaseLayout = () => {
    return (<>
        <NavLayout />
        <Container>
            <Outlet />
        </Container>
    </>)
};

export default BaseLayout;