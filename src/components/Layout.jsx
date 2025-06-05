import { Outlet } from "react-router-dom";
import NavBar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}