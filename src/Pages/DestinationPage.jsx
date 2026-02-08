import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Destination4 from '../Components/Destination/Destination4';

const DestinationPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb/destinationbg.jpg"
                Title="Destination"
            ></BreadCumb>
             <Destination4></Destination4>
        </div>
    );
};

export default DestinationPage;