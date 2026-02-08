import React from 'react';
import { Link } from 'react-router';

const Destination1 = () => {

    const destinationContent = [
        {img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop', location:'New York', title:'Luxury Plaza Hotel & Suites', rating:'4.9', day:'5 Star', number:'200+', price:'$199.00'},      
        {img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop', location:'Paris', title:'Grand Palace Resort & Spa', rating:'4.8', day:'5 Star', number:'150+', price:'$249.00'},      
        {img:'https://images.luxuryescapes.com/fl_progressive,q_auto:good/rus8eegknojpcg0z1n', location:'Dubai', title:'Emirates Beachfront Hotel', rating:'4.9', day:'5 Star', number:'300+', price:'$299.00'},      
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGvcFsC9FdWp1kHzykJZ62hZLS7XIWQjMng&s', location:'Tokyo', title:'Sakura Seasons Luxury Hotel', rating:'4.7', day:'5 Star', number:'180+', price:'$229.00'},      
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRid1cyt-KKtX_H4_hplM2rbfXERk5L1N1ang&s', location:'London', title:'Royal Thames Hotel & Wellness', rating:'4.8', day:'5 Star', number:'220+', price:'$189.00'},      
        {img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop', location:'Maldives', title:'Tropical Paradise Resort', rating:'4.9', day:'5 Star', number:'120+', price:'$349.00'},      
        {img:'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&h=400&fit=crop', location:'Barcelona', title:'Mediterranean Elegance Hotel', rating:'4.7', day:'4 Star', number:'160+', price:'$169.00'},      
        {img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop', location:'Sydney', title:'Harbor View Premier Suites', rating:'4.8', day:'5 Star', number:'250+', price:'$259.00'},       
      ]; 

    return (
        <section className="popular-destination-section section-padding pt-0">
            <div className="car-shape float-bob-x">
                <img src="/assets/img/hotel/car.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area justify-content-between">
                    <div className="section-title">
                        <span className="sub-title wow fadeInUp">
                            Best Recommended Hotels
                        </span>
                        <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                            Premium Hotels we offer worldwide
                        </h2>
                    </div>
                    <Link to="/tour/tour-details" className="theme-btn wow fadeInUp wow" data-wow-delay=".5s">View All Hotels<i className="bi bi-arrow-right"></i></Link>
                </div> 
                <div className="row">
                {destinationContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="destination-card-items">
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
                                    <i className="bi bi-star"></i>
                                        {item.day}
                                    </li>
                                    <li>
                                    <i className="bi bi-people"></i>
                                        {item.number} Guests
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

export default Destination1;