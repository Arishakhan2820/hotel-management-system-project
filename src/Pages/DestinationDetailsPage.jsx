import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import DestinationDetails from '../Components/DestinationDetails/DestinationDetails';

const DestinationDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb/destinationbg.jpg"
                Title="Destination Details"
            ></BreadCumb>    
            <DestinationDetails></DestinationDetails>        
        </div>
    );
};

export default DestinationDetailsPage;