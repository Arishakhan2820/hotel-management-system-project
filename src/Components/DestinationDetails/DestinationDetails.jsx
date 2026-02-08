import React from 'react';
import { Link } from 'react-router';

const DestinationDetails = () => {
    return (
        <section className="destination-details-section fix section-padding">
        <div className="container">
            <div className="destination-details-wrapper">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="destination-details-items">
                            <div className="details-image">
                                <img src="/assets/img/hotel-details/desti-details.jpg" alt="img" />
                            </div>
                            <div className="details-content">
                                <h2>Explore the Beautiful Charm of South Africa</h2>
                                <p className="mt-3">
                                    Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. ut enim ad minim veniam made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat duis aute irure and dolor in reprehenderit.Nullam semper quam mauris nec mollis felis aliquam eu ut non gravida mi quam mauris nec mollis felis aliquam eu ut phasellus.
                                </p>
                                <p className="mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et.
                                </p>
                                <div className="row g-4 mt-4 mb-4">
                                    <div className="col-md-6">
                                        <div className="details-image">
                                            <img src="/assets/img/hotel-details/desti-details-2.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="details-image">
                                            <img src="/assets/img/hotel-details/desti-details-3.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. ut enim ad minim veniam made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat duis aute irure and dolor in reprehenderit.Nullam semper quam mauris nec mollis felis aliquam eu ut non gravida mi quam mauris nec mollis felis aliquam eu ut phasellus.
                                </p>
                            </div>
                            <div className="map-area">
                                <h3>View in Map</h3>
                                <div className="google-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                            <div className="map-area">
                                <h3>client review</h3>
                                <ul className="review-items">
                                    <li>
                                        <div className="thumb">
                                            <img src="/assets/img/hotel-details/client-1.jpg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <div className="star">
                                            <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                            </div>
                                            <h5>Shikhon Islam</h5>
                                            <p>Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                                            <span className="reply-icon">
                                                <i className="fa-solid fa-reply"></i> Reply
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img src="/assets/img/hotel-details/client-2.jpg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <div className="star">
                                            <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                            </div>
                                            <h5>Ralph Edwards</h5>
                                            <p>
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros.
                                            </p>
                                            <span className="reply-icon">
                                                <i className="fa-solid fa-reply"></i> Reply
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb">
                                            <img src="/assets/img/hotel-details/client-3.jpg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <div className="star">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            </div>
                                            <h5>Sohel Islam</h5>
                                            <p>
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
                                            </p>
                                            <span className="reply-icon">
                                                <i className="fa-solid fa-reply"></i> Reply
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="map-area ratting-items">
                                <h3>Add Your Reviews</h3>
                                <ul>
                                    <li>
                                        Services
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        </div>
                                    </li>
                                    <li>
                                        Hotel
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        </div>
                                    </li>
                                    <li>
                                        Places
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="mb-4">
                                    <li>
                                        Safety
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        </div>
                                    </li>
                                    <li>
                                        Foods
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        </div>
                                    </li>
                                    <li>
                                        Guides
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        </div>
                                    </li>
                                </ul>
                                <form action="#" id="contact-form1" method="POST">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <input type="text" name="phone" id="phone" placeholder="Your phone"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-clt">
                                                <input type="text" name="email2" id="email21" placeholder="Your email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-clt">
                                                <textarea name="message" id="message" placeholder="Your comments..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <button type="submit" className="theme-btn text-center">
                                                Submit Reviews <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="main-sideber">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Search Here</h4>
                                </div>
                                <div className="search-widget">
                                    <form action="#">
                                        <input type="text" placeholder="Search here"/>
                                        <button type="submit"><i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Contact for Booking</h4>
                                </div>
                                <div className="desti-booking-form">
                                    <form action="#" id="contact-form" method="POST">
                                        <div className="row g-4">
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <input type="text" name="name" id="name11" placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <input type="text" name="email" id="email212" placeholder="Your Email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <textarea name="message" id="message11" placeholder="Type Comment Here"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="theme-btn text-center">
                                                    Send Now <i className="bi bi-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Recent Tours</h4>
                                </div>
                                <div className="recent-post-area">
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/hotel-details/pp1.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <div className="star">
                                            <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                            </div>
                                            <h6>
                                            <Link to="/blog/blog-details">
                                                    Enrich Your Mind Envision Your Future Education for Success
                                                </Link>
                                            </h6>
                                            <span className="price-text">
                                                From:<b>$171</b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/hotel-details/pp2.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <div className="star">
                                            <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                            </div>
                                            <h6>
                                            <Link to="/blog/blog-details">
                                                   Meet Skeleton Svelte Taile Sindey For Reactive UIs
                                                </Link>
                                            </h6>
                                            <span className="price-text">
                                                From:<b>$171</b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/hotel-details/pp3.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <div className="star">
                                            <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                            </div>
                                            <h6>
                                            <Link to="/blog/blog-details">
                                                    Meet Skeleton Svelte Taile Sindey For Reactive UIs
                                                </Link>
                                            </h6>
                                            <span className="price-text">
                                                From:<b>$171</b>
                                            </span>
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

export default DestinationDetails;