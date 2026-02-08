import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const HeroBanner2 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);    

        const [isActive, setIsActive] = useState('tour');

    return (
<section className="hero-section-2">
            <div className="hero-2 bg-cover" data-background="/assets/img/hero/hero2.jpg">
                <div className="container custom-container-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="sub-title wow fadeInUp">
                                    Get unforgettable pleasure with us
                                </div>
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                    Discover Your Next <br/>
                                     Handpicked Journey
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    There are many variations of passages of  available, but the majority have suffered alteration in <br/> some form, by injected humour words which don't look even slightly believable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-price-section mb-0">
                <div className="container custom-container-3">
                    <div className="hero-bottom">
                        <div className="row">
                            <div className="best-price-wrapper">
                                <div className="content wow fadeInUp" data-wow-delay=".3s">
                                    <h2>Find The Best Place</h2>
                                </div>
                                <ul className="nav">
                                    <li className={`nav-item wow fadeInUp ${isActive === 'hotel' ? 'active' : ''}`} onClick={() => setIsActive('hotel')} data-wow-delay=".3s">
                                        <a className="nav-link"  data-bs-toggle="tab">
                                            Hotels
                                        </a>
                                    </li>
                                    <li className={`nav-item wow fadeInUp ${isActive === 'tour' ? 'active' : ''}`} onClick={() => setIsActive('tour')}  data-wow-delay=".5s">
                                        <a href="#thumb2" data-bs-toggle="tab" className="nav-link">
                                            Tour
                                        </a>
                                    </li>
                                    <li className={`nav-item wow fadeInUp ${isActive === 'flight' ? 'active' : ''}`} onClick={() => setIsActive('flight')}  data-wow-delay=".7s">
                                        <a href="#thumb3" data-bs-toggle="tab" className="nav-link">
                                            Flight
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className={`tab-pane ${isActive === 'hotel' ? 'active' : ''}`} >
                                    <div className="comment-form-wrap">
                                        <form action="#" id="contact-form220" method="POST">
                                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Looking For</span>
                                                        <input type="text" name="name" id="name21" placeholder="Tour Name" />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Price</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Price</option>
                                                                <option>$1000</option>
                                                                <option>$1300</option>
                                                                <option>$1500</option>
                                                                <option>$2000</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Location</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>All City</option>
                                                                <option>London</option>
                                                                <option>Canada</option>
                                                                <option>Denmark</option>
                                                                <option>Finland</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Departure Month</span>
                                                        <div className="form-clt">
                                                            <input type="date" id="date1" name="date1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Departure Month</span>
                                                        <button type="submit" className="theme-btn w-100">
                                                            Search
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'tour' ? 'active' : ''}`} id="thumb2" >
                                    <div className="comment-form-wrap">
                                        <form action="#" id="contact-form22" method="POST">
                                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Looking For</span>
                                                        <input type="text" name="name" id="name22" placeholder="Tour Name" />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Price</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Price</option>
                                                                <option>$1000</option>
                                                                <option>$1300</option>
                                                                <option>$1500</option>
                                                                <option>$2000</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Location</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>All City</option>
                                                                <option>London</option>
                                                                <option>Canada</option>
                                                                <option>Denmark</option>
                                                                <option>Finland</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Departure Month</span>
                                                        <div className="form-clt">
                                                            <input type="date" id="date2" name="date1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Departure Month</span>
                                                        <button type="submit" className="theme-btn w-100">
                                                            Search
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'flight' ? 'active' : ''}`}  >
                                    <div className="comment-form-wrap">
                                        <form action="#" id="contact-form32" method="POST">
                                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-5">
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Looking For</span>
                                                        <input type="text" name="name" id="name2" placeholder="Tour Name" />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Price</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>Price</option>
                                                                <option>$1000</option>
                                                                <option>$1300</option>
                                                                <option>$1500</option>
                                                                <option>$2000</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Location</span>
                                                        <div className="form">
                                                            <select className="single-select w-100">
                                                                <option>All City</option>
                                                                <option>London</option>
                                                                <option>Canada</option>
                                                                <option>Denmark</option>
                                                                <option>Finland</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Departure Month</span>
                                                        <div className="form-clt">
                                                            <input type="date" id="date3" name="date1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-clt">
                                                        <span>Departure Month</span>
                                                        <button type="submit" className="theme-btn w-100">
                                                            Search
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </form>
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

export default HeroBanner2;