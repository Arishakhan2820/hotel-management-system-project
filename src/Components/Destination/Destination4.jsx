import React from 'react';
import { Link } from 'react-router';

const Destination4 = () => {

    const destinationContent = [
        {img:'/assets/img/hotel/dest1.png', location:'Indonesia', title:'Brooklyn Beach Resort Tour', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/dest2.png', location:'Indonesia', title:'Pak Chumphon Town Tour ', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/dest3.png', location:'Indonesia', title:'Java & Bali One Life Adventure', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/dest4.png', location:'Indonesia', title:'Places To Travel In November', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/dest5.png', location:'Indonesia', title:'Brooklyn Beach Resort Tour', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/dest6.png', location:'Indonesia', title:'Pak Chumphon Town Tour ', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/dest7.png', location:'Indonesia', title:'Java & Bali One Life Adventure', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},      
        {img:'/assets/img/hotel/dest8.png', location:'Indonesia', title:'Places To Travel In November', rating:'4.7', day:'10 Days', number:'50+', price:'$59.00'},       
      ]; 

    return (
        <section className="popular-destination-section section-padding pb-0">
            <div className="car-shape float-bob-x">
                <img src="/assets/img/hotel/car.png" alt="img" />
            </div>
            <div className="container">
                <div className="row g-4">
                {destinationContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".2s">
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
            </div>
        </section>

    );
};

export default Destination4;