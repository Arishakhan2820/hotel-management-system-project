import React from 'react';
import { Link } from 'react-router';

const Tour = () => {

    const destinationContent = [
        {img:'/assets/img/hotel/01.jpg', location:'Indonesia', title:'Brooklyn Beach Resort Tour', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/02.jpg', location:'Indonesia', title:'Pak Chumphon Town Tour ', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/03.jpg', location:'Indonesia', title:'Java & Bali One Life Adventure', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/04.jpg', location:'Indonesia', title:'Places To Travel In November', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/05.jpg', location:'Indonesia', title:'Brooklyn Beach Resort Tour', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/06.jpg', location:'Indonesia', title:'Pak Chumphon Town Tour ', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/07.jpg', location:'Indonesia', title:'Java & Bali One Life Adventure', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/08.jpg', location:'Indonesia', title:'Places To Travel In November', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},       
        {img:'/assets/img/hotel/04.jpg', location:'Indonesia', title:'Places To Travel In November', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},          
      ]; 


    return (
<section className="tour-section section-padding fix">
            <div className="container custom-container">
                <div className="tour-destination-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-8">
                            <div className="row g-4">
                            {destinationContent.map((item, i) => (
                                <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="destination-card-items mt-0">
                                        <div className="destination-image">
                                        <img src={item.img} alt="img" />
                                            <div className="heart-icon">
                                            <i className="bi bi-heart"></i>
                                            </div>
                                        </div>
                                        <div className="destination-content">
                                            <ul className="meta">
                                                <li>
                                                <i className="bi bi-geo-alt"></i>
                                                    {item.location}
                                                </li>
                                                <li className="rating">
                                                    <div className="star">
                                                    <i className="bi bi-star-fill"></i>
                                                    </div>
                                                    <p>{item.rating}</p>
                                                </li>
                                            </ul>
                                            <h5>
                                            <Link to="/tour/tour-details">
                                                {item.title}
                                                </Link>
                                            </h5>
                                            <ul className="info">
                                                <li>
                                                <i className="bi bi-clock"></i>
                                                    {item.day}
                                                </li>
                                                <li>
                                                <i className="bi bi-person"></i>
                                                {item.number}
                                                </li>
                                            </ul>
                                            <div className="price">
                                                <h6>{item.price}<span>/Per day</span></h6>
                                                <Link to="/tour/tour-details" className="theme-btn style-2">Book Now<i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}

                            </div>
                            <div className="page-nav-wrap text-center">
                                <ul>
                                    <li><a className="page-numbers" href="#"><i className="bi bi-arrow-left"></i></a></li>
                                    <li><a className="page-numbers" href="#">01</a></li>
                                    <li><a className="page-numbers" href="#">02</a></li>
                                    <li><a className="page-numbers" href="#">03</a></li>
                                    <li><a className="page-numbers" href="#"><i className="bi bi-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="main-sidebar mt-0">
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Destination Category</h3>
                                    </div>
                                    <div className="categories-list">
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Canada
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Europe
                                                </span>
                                            </span>
                                            <span className="text-color">03</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    France
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Indonesia
                                                </span>
                                            </span>
                                            <span className="text-color">06</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Nepal
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Maldives
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Activities</h3>
                                    </div>
                                    <div className="categories-list">
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" readOnly />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Canada
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Europe
                                                </span>
                                            </span>
                                            <span className="text-color">03</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    France
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox"  />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Indonesia
                                                </span>
                                            </span>
                                            <span className="text-color">06</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Nepal
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Maldives
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title style-2">
                                        <h3>Tour Types</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="categories-list">
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Premium
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Luxury 
                                                </span>
                                            </span>
                                            <span className="text-color">03</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox"  />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Standard
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
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

export default Tour;