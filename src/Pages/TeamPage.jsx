import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Team2 from '../Components/Team/Team2';

const TeamPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
                Title="Our Team"
            ></BreadCumb>  
            <Team2></Team2>            
        </div>
    );
};

export default TeamPage;