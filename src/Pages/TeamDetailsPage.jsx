import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import TeamDetails from '../Components/TeamDetails/TeamDetails';
import Team3 from '../Components/Team/Team3';

const TeamDetailsPage = () => {
    return (
        <div>
               <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
                Title="Team Details"
            ></BreadCumb>       
            <TeamDetails></TeamDetails>  
            <Team3></Team3>    
        </div>
    );
};

export default TeamDetailsPage;