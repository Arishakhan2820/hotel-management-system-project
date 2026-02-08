import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Counter2 = () => {

         useEffect(() => {
             loadBackgroudImages();
         }, []);   

    return (
        <section className="cta-offer-section section-padding fix bg-cover" data-background="/assets/img/offer/bg2.png" >
            <div className="container">
                <div className="cta-offer-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="offer-content">
                                <div className="section-title">
                                    <span className="sub-title text-white wow fadeInUp">What we’re Offering</span>
                                    <h2 className="text-white wow fadeInUp wow" data-wow-delay=".2s">
                                        Get 30% Discount Every <br/>
                                         Tour
                                    </h2>
                                </div>
                                <div className="coming-soon-timer">
                                    <div className="timer-content wow fadeInUp" data-wow-delay=".2s">
                                        <h3 id="day">04</h3>
                                        <p>Days</p>
                                    </div>
                                    <div className="timer-content wow fadeInUp" data-wow-delay=".4s">
                                        <h3 id="hour">15</h3>
                                        <p>HRS</p>
                                    </div>
                                    <div className="timer-content wow fadeInUp" data-wow-delay=".6s">
                                        <h3 id="min">41
                                        </h3>
                                        <p>MINS</p>
                                    </div>
                                    <div className="timer-content wow fadeInUp" data-wow-delay=".8s">
                                        <h3 id="sec">55</h3>
                                        <p>SECS</p>
                                    </div>
                                </div>
                                <a href="tour-details.html" className="theme-btn wow fadeInUp wow" data-wow-delay=".9s">Explore Flight<i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="offer-image">
                                <img src="/assets/img/offer/circle.png" alt="img" />
                                <div className="circle">
                                    <div className="text-item">
                                        <div className="icon">
                                            <a href="tour-details.html">
                                                <img src="/assets/img/icon/16.svg" alt="img" />
                                            </a>
                                        </div>
                                        <div className="image">
                                            <img src="/assets/img/offer/text.png" alt="img" />
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

export default Counter2;