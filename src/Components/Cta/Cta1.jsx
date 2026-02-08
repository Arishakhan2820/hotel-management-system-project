import React from 'react';
import { Link } from 'react-router';

const Cta1 = () => {
    return (
        <section className="cta-section section-padding">
        <div className="mobile-shape">
            <img src="/assets/img/mobile.png" alt="img" />
        </div>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".3s">
                    <div className="cta-items">
                        <div className="cta-text">
                            <h2>35% OFF</h2>
                            <p>
                                Book Your Dream <br/>
                                Hotel Stay.
                            </p>
                        </div>
                        <Link to="/tour/tour-details" className="theme-btn">BOOK NOW <i className="bi bi-arrow-right"></i></Link>
                        <div className="cta-image">
                            <img src="/assets/img/bag-shape.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".5s">
                    <div className="cta-items style-2">
                        <div className="cta-text">
                            <h2>35% OFF</h2>
                            <p>
                                On Premium Room <br/>
                                Packages Grab This Now.
                            </p>
                        </div>
                        <Link to="/tour/tour-details" className="theme-btn">BOOK NOW <i className="bi bi-arrow-right"></i></Link>
                        <div className="cta-image">
                            <img src="/assets/img/plane-shape.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Cta1;