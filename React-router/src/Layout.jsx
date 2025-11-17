import { Outlet } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}