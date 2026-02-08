import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router';

const Choose1 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="travel-feature-section section-padding fix" data-background="/assets/img/travel-bg.jpg" >
            <div className="shape-1 float-bob-y">
                <img src="/assets/img/plane-shape1.png" alt="img" />
            </div>
            <div className="shape-2 float-bob-x">
                <img src="/assets/img/plane-shape2.png" alt="img" />
            </div>
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="feature-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Looking for the perfect stay?
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                        World Leading Online Hotel Booking Platform
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>
                               <div className="feature-area">
                                    <div className="line-shape">
                                        <img src="/assets/img/line-shape.png" alt="img" />
                                    </div>
                                <div className="feature-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="feature-icon-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/08.svg" alt="img" /> 
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Premium Hotel <br/> 
                                                Accommodations
                                            </h5>
                                        </div>
                                    </div>
                                    <ul className="circle-icon">
                                        <li>
                                            <i className="fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>
                                                There are many variations of <br/>
                                                 passages of available,
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-items wow fadeInUp wow" data-wow-delay=".7s">
                                    <div className="feature-icon-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/09.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Best Comfort <br/>
                                                 Starts Here
                                            </h5>
                                        </div>
                                    </div>
                                    <ul className="circle-icon">
                                        <li>
                                            <i className="fa-solid fa-badge-check"></i>
                                        </li>
                                       <li>
                                            <span>
                                                There are many variations of <br/>
                                                passages of available,
                                            </span>
                                       </li>
                                    </ul>
                                </div>
                               </div>
                               <Link to="/contact" className="theme-btn wow fadeInUp wow" data-wow-delay=".9s">Contact US<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-image wow img-custom-anim-left">
                                <img src="/assets/img/ocean.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose1;