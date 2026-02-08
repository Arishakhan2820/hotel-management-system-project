import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import ActivitiesDetails from '../Components/ActivitiesDetails/ActivitiesDetails';

const ActivitiesDetailsPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
                Title="Activities Details"
            ></BreadCumb>       
            <ActivitiesDetails></ActivitiesDetails>      
        </div>
    );
};

export default ActivitiesDetailsPage;