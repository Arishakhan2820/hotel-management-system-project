import { Outlet } from 'react-router';
import Footer1 from '../Components/Footer/Footer1';
import Header3 from '../Components/Header/Header3';

const Layout2 = () => {
    return (
        <div className='main-page-area2'>
            <Header3></Header3>
            <Outlet></Outlet>
            <Footer1></Footer1>
        </div>
    );
};

export default Layout2;