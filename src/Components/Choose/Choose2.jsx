import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Choose2 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="choose-us-section section-padding bg-cover fix" data-background="/assets/img/choose-us-bg-2.jpg" >
            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-7 col-lg-6">
                            <div className="choose-us-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Why Choose Us
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Get The Best Travel Experience
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                    There are many variations of passages of  available, but the majority have suffered alteration in <br/> some form, by injected humour words which don't look even slightly believable 
                                </p>
                                <div className="choose-us-area">
                                    <div className="line-shape">
                                        <img src="/assets/img/line-shape2.png" alt="img" />
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".3s">
                                        <h3 className="number">
                                            01
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                Find ans enjoy a Trip that fits Your Lifestyle with <br/>
                                                your Friends
                                            </h4>
                                            <p>
                                                Globally productize flexible potentialities via high-payoff markets. Proactively <br/> revolutionize parallel growth strategies.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <h3 className="number">
                                            02
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                Travel With More Confidence
                                            </h4>
                                            <p>
                                                Globally productize flexible potentialities via high-payoff markets. Proactively <br/> revolutionize parallel growth strategies.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".7s">
                                        <h3 className="number">
                                            03
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                See What you really Get form us
                                            </h4>
                                            <p>
                                                Globally productize flexible potentialities via high-payoff markets. Proactively <br/> revolutionize parallel growth strategies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                            <div className="choose-us-thumb">
                                <img src="/assets/img/choose-us-bg.png" alt="img" className="wow img-custom-anim-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose2;