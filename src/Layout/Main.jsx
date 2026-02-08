import { Outlet } from "react-router";
import Header3 from "../Components/Header/Header3";
import Footer1 from "../Components/Footer/Footer1";

const Main = () => {
    return (
        <div className='main-page-area'>
            <Header3></Header3>
            <Outlet></Outlet>
            <Footer1></Footer1>
        </div>
    );
};

export default Main;