import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const About3 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="about-section section-padding bg-color" data-background="/assets/img/about/about-bg-2.jpg" >
            <div className="container">
                <div className="left-shape float-bob-x">
                    <img src="/assets/img/about/bag-shape.png" alt="img" />
                </div>
                <div className="about-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image wow fadeInUp wow" data-wow-delay=".3s">
                                <img src="/assets/img/about/06.png" alt="img" />
                                <div className="about-image-2 wow fadeInUp wow" data-wow-delay=".5s">
                                    <img src="/assets/img/about/07.png" alt="img" />
                                    <div className="plane-shape float-bob-y">
                                        <img src="/assets/img/about/plane-shape3.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">Get About Us</span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Take The Best Weekend <br/>
                                         And Enjoy Your Place
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form, by injected humour words which don't look even slightly believable injected humour words which
                                </p>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/icon/13.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                Set Travel Plan
                                            </h4>
                                            <p>
                                                There are many variations of passages <br/>
                                                of  available, but the majority
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/icon/14.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                Explore Around
                                            </h4>
                                            <p>
                                                There are many variations of passages <br/>
                                                 of  available, but the majority
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About3;