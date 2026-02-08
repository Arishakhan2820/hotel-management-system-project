import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import About2 from '../Components/About/About2';
import Counter4 from '../Components/Counter/Counter4';
import Team1 from '../Components/Team/Team1';

const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/breadcrumb/aboutbg.jpg"
                Title="About Us"
            ></BreadCumb>
            <About2></About2>
            <Counter4></Counter4>
            <Team1></Team1>
        </div>
    );
};

export default AboutPage;