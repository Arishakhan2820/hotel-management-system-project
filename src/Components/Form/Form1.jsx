import React, { useState } from 'react';
import TourCard from '../Card/TourCard';

const Form1 = () => {

    const [isActive, setIsActive] = useState('OneWay');

    return (
        <section className="from-booking-section">
            <div className="container">
                <div className="booking-wrapper2">
                    <div className="row">
                        <div className="booking-wrap">
                            <ul className="nav">
                                <li className={`nav-item wow fadeInUp ${isActive === 'OneWay' ? 'active' : ''}`} onClick={() => setIsActive('OneWay')}  >
                                    <a  href="#thumb1" data-bs-toggle="tab" className="nav-link active">
                                        <i className="fa-solid fa-arrow-right"></i>
                                        One Way
                                    </a>
                                </li>
                                <li className={`nav-item wow fadeInUp ${isActive === 'RoundTrip' ? 'active' : ''}`} onClick={() => setIsActive('RoundTrip')} >
                                    <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                                        <i className="fa-solid fa-arrow-right"></i>
                                        Round Trip 
                                    </a>
                                </li>
                                <li className={`nav-item wow fadeInUp ${isActive === 'MultiCity' ? 'active' : ''}`} onClick={() => setIsActive('MultiCity')} >
                                    <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                                        <i className="fa-solid fa-arrow-right"></i>
                                        Multi City
                                    </a>
                                </li>
                                <li className={`nav-item wow fadeInUp ${isActive === 'RandomTrip' ? 'active' : ''}`} onClick={() => setIsActive('RandomTrip')} >
                                    <a href="#thumb4" data-bs-toggle="tab" className="nav-link">
                                        <i className="fa-solid fa-arrow-right"></i>
                                        Random Trip
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className={`tab-pane ${isActive === 'OneWay' ? 'active' : ''}`} >
                                
                                <TourCard/>

                            </div>
                            <div className={`tab-pane ${isActive === 'RoundTrip' ? 'active' : ''}`}>

                                    <TourCard/>

                             </div>
                             <div className={`tab-pane ${isActive === 'MultiCity' ? 'active' : ''}`}>

                                <TourCard/>

                             </div>
                             <div className={`tab-pane ${isActive === 'RandomTrip' ? 'active' : ''}`}>

                                    <TourCard/>

                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form1;