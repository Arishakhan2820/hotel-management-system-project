import React from 'react';

const TeamDetails = () => {
    return (
<section className="team-details-section fix section-padding">
            <div className="container">
                <div className="team-details-wrapper">
                    <div className="team-author-items">
                        <div className="shape">
                            <img src="/assets/img/team/shape.png" alt="img" />
                        </div>
                        <div className="thumb">
                            <img src="/assets/img/team/details-1.jpg" alt="img" />
                        </div>
                        <div className="content">
                            <h2>Savannah Nguyen</h2>
                            <span>Tourist Guide</span>
                            <p>
                                Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget lacus a felis accumsan pharetra in dignissim enim. In amet odio mollis urna aliquet volutpat. Sed bibendum nisl vehicula imperdiet imperdiet, augue massa fringilla.
                            </p>
                            <ul>
                                <li>
                                    <span>Experience:</span> 10 Years
                                </li>
                                <li>
                                    <span>Position:</span> Guider 
                                </li>
                                <li>
                                    <span>Phone:</span>
                                    <a href="+208-555-0112">+208-555-0112</a>
                                </li>
                            </ul>
                            <div className="social-icon d-flex align-items-center">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="details-info-items">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="info-content">
                                    <h2>Professional Info</h2>
                                    <p className="mb-3">
                                        Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    </p>
                                    <p>
                                        The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="progress-area">
                                    <div className="progress-wrap">
                                        <div className="pro-items">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Language skills
                                                </h6>
                                                <span className="point">
                                                    86%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value"></div>
                                            </div>
                                        </div>
                                        <div className="pro-items">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Tour Guide
                                                </h6>
                                                <span className="point">
                                                    92%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value style-two"></div>
                                            </div>
                                        </div>
                                        <div className="pro-items">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Pralaning
                                                </h6>
                                                <span className="point">
                                                    92%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value style-three"></div>
                                            </div>
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

export default TeamDetails;