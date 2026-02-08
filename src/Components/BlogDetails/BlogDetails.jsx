import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router';

const BlogDetails = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="news-details fix section-padding">
        <div className="container">
            <div className="news-details-area">
                <div className="row g-5">
                    <div className="col-12 col-lg-8">
                        <div className="blog-post-details">
                            <div className="single-blog-post">
                                <div className="post-featured-thumb bg-cover" data-background="/assets/img/news/post-4.jpg"
                                    >
                                    <div className="post">
                                        <h3>
                                            16
                                            <span>Dec</span>
                                        </h3>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <ul className="post-list d-flex align-items-center">
                                        <li>
                                            <i className="fa-regular fa-user"></i>
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-comment"></i>
                                            2 Comments
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-tag"></i>
                                            Tour
                                        </li>
                                    </ul>
                                    <h3>
                                        Get Best Advertiser in Your Side Pocket
                                    </h3>
                                    <p className="mb-3">
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
                                        aute irure and dolor in reprehenderit.
                                    </p>
                                    <p className="mb-3">
                                        The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta
                                        arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus
                                        libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac
                                        ante rutrum sed the is sodales augue consequat.
                                    </p>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="details-image">
                                                <img src="/assets/img/news/post-5.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="details-image">
                                                <img src="/assets/img/news/post-6.jpg" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-4">
                                        The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta
                                        arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus
                                        libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac
                                        ante rutrum sed the is sodales augue consequat.
                                    </p>
                                    <div className="hilight-text mt-4 mb-4">
                                        <p>
                                            Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel
                                            ultricies <br/> urnacondimentum, sapien neque lobortis tortor, quis efficitur
                                            mi ipsum eu metus. <br/> Praesent eleifend orci sit amet est vehicula.
                                        </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                            viewBox="0 0 36 36" fill="none">
                                            <path
                                                d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
                                                stroke="#1CA8CB" />
                                            <path
                                                d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
                                                stroke="#1CA8CB" />
                                        </svg>
                                    </div>
                                    <p className="mt-4 mb-5">
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
                                        aute irure and dolor in reprehenderit.
                                    </p>
                                </div>
                            </div>
                            <div className="row tag-share-wrap mt-4 mb-5">
                                <div className="col-lg-8 col-12">
                                    <div className="tagcloud">
                                        <a href="news-details.html">Travel</a>
                                        <a href="news-details.html">Services</a>
                                        <a href="news-details.html">Agency</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                    <div className="social-share">
                                        <span className="me-3">Share:</span>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-area">
                                <div className="comments-heading">
                                    <h3>02 Comments</h3>
                                </div>
                                <div className="blog-single-comment d-flex gap-4 pt-4 pb-4">
                                    <div className="image">
                                        <img src="/assets/img/news/comment.png" alt="image" />
                                    </div>
                                    <div className="content">
                                        <div
                                            className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                            <div className="con">
                                                <h5><a href="news-details.html">Leslie Alexander</a></h5>
                                                <span>February 10, 2024 at 2:37 pm</span>
                                            </div>
                                            <a href="news-details.html" className="reply">Reply</a>
                                        </div>
                                        <p className="mt-30 mb-4">Neque porro est qui dolorem ipsum quia quaed inventor
                                            veritatis et quasi
                                            architecto var sed efficitur turpis gilla sed
                                            sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                                    </div>
                                </div>
                                <div className="blog-single-comment d-flex gap-4 pt-5 pb-4">
                                    <div className="image">
                                        <img src="/assets/img/news/comment-2.png" alt="image" />
                                    </div>
                                    <div className="content">
                                        <div
                                            className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                            <div className="con">
                                                <h5><a href="news-details.html">Ralph Edwards</a></h5>
                                                <span>February 10, 2024 at 2:37 pm</span>
                                            </div>
                                            <a href="news-details.html" className="reply">Reply</a>
                                        </div>
                                        <p className="mt-30 mb-4">Neque porro est qui dolorem ipsum quia quaed inventor
                                            veritatis et quasi
                                            architecto var sed efficitur turpis gilla sed
                                            sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form-wrap pt-5">
                                <h3>Leave a comments</h3>
                                <form action="#" id="contact-form" method="POST">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <span>Your Name*</span>
                                                <input type="text" name="name" id="name" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <span>Your Email*</span>
                                                <input type="text" name="email" id="email6" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-clt">
                                                <span>Message*</span>
                                                <textarea name="message" id="message"
                                                    placeholder="Write Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <button type="submit" className="theme-btn ">
                                                post comment<i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="main-sideber">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Search</h4>
                                </div>
                                <div className="search-widget">
                                    <form action="#">
                                        <input type="text" placeholder="Search here" />
                                        <button type="submit"><i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Services</h4>
                                </div>
                                <div className="news-widget-categories">
                                    <ul>
                                        <li><a href="#">Travel</a><span>04</span></li>
                                        <li><a href="#">System</a><span>03</span></li>
                                        <li><a href="#">Agency</a><span>02</span></li>
                                        <li><a href="#">Restaurant</a><span>05</span></li>
                                        <li><a href="#">Rant A Car</a><span>06</span></li>
                                        <li><a href="#">Blueprint Builders</a><span>(03)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Recent Post</h4>
                                </div>
                                <div className="recent-post-area">
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/news/pp1.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="bi bi-calendar-check"></i>
                                                    14 Feb, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/blog-details">
                                                    Get Best Advertised Your
                                                    Side Pocket.
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/news/pp2.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                   <i className="bi bi-calendar-check"></i>
                                                    12 Mar, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/blog-details">
                                                    Supervisor Disapproved
                                                    of Latest Work.
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/news/pp3.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="bi bi-calendar-check"></i>
                                                    23 Feb, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/blog-details">
                                                    Sakura dreams and
                                                    samurai tales.
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Tags</h4>
                                </div>
                                <div className="news-widget-categories">
                                    <div className="tagcloud">
                                        <a href="#">Agency</a>
                                        <a href="#">Traveling</a>
                                        <a href="#">Design</a>
                                        <a href="#">Travel</a>
                                        <a href="#">Change</a>
                                        <a href="#">Video</a>
                                        <a href="#">World</a>
                                        <a href="#">Startup</a>
                                        <a href="#">Services</a>
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

export default BlogDetails;