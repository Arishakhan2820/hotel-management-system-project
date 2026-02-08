import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router';

const Cta3 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="cta-section-2 section-padding fix">
        <div className="left-shape float-bob-x">
            <img src="/assets/img/tree-shape.png" alt="img" />
        </div>
        <div className="container">
            <div className="cta-wrapper-2 bg-cover" data-background="/assets/img/cta-color-bg.jpg">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="cta-content">
                            <div className="section-title">
                                <span className="sub-title text-white wow fadeInUp">
                                    Special offer for you
                                </span>
                                <h2 className="text-white wow fadeInUp wow" data-wow-delay=".3s">
                                    50% Offer For Online 
                                    1stApp Booking
                                </h2>
                            </div>
                            <p className="text-white wow fadeInUp wow" data-wow-delay=".5s">
                                It is a long established fact that a reader will be distracted the readable content of a page when looking at layout.
                            </p>
                            <div className="app-image wow fadeInUp wow" data-wow-delay=".7s">
                                <Link to="/contact">
                                    <img src="/assets/img/apple-shape.png" alt="img" />
                                </Link>
                                <Link to="/contact">
                                    <img src="/assets/img/google-shape.png" alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-image">
                            <img src="/assets/img/Group-phone.png" alt="img" />
                            <div className="shape float-bob-y">
                                <img src="/assets/img/cta-shape.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    );
};

export default Cta3;