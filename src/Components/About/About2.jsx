import React from 'react';
import { Link } from 'react-router';

const About2 = () => {
    return (
<section className="about-section section-padding fix">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="/assets/img/about/aboutt1.png" alt="img" className="wow img-custom-anim-left" />
                                <div className="shape-image float-bob-y">
                                    <img src="/assets/img/about/aboutt3.png" alt="img" />
                                </div>
                                <div className="group-image float-bob-x">
                                    <img src="/assets/img/about/group.png" alt="img" />
                                </div>
                                <div className="about-image-2">
                                    <img src="/assets/img/about/aboutt2.png" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                                    <div className="plane-shape">
                                        <img src="/assets/img/about/plane-shape2.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Get About Us
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        We're Strived Only For The
                                        Best In The World
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form, by injected humour words which don't look even slightly believable injected humour words which
                                </p>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/check.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Easy Booking <br/> System
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Our hotel also prides itself on <br/> offering exceptional services.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/check.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Easy Booking <br/> System
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Our hotel also prides itself on <br/> offering exceptional services.
                                        </p>
                                    </div>
                                </div>
                                <Link to="/about" className="theme-btn wow fadeInUp wow" data-wow-delay=".7s">Discover More<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;