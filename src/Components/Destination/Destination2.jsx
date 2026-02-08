import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

const Destination2 = () => {

    const destinationContent = [
        {img:'/assets/img/hotel/new/01.jpg', location:'New Zealand', title:'Hotel 1'},          
        {img:'/assets/img/hotel/new/02.jpg', location:'The Amazon', title:'Hotel 1'},          
        {img:'/assets/img/hotel/new/03.jpg', location:'Angel Falls, Venezuela', title:'Hotel 1'},          
        {img:'/assets/img/hotel/new/04.jpg', location:'The great wall of china', title:'Hotel 1'},          
      ]; 

      const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  


    return (
        <section className="new-destination-section fix section-padding">
        <div className="container">
            <div className="section-title-area">
                <div className="section-title">
                    <span className="sub-title wow fadeInUp">
                        Our Destination
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".5s">
                        Our Top Location For <br/> You Property
                    </h2>
                </div>
                <Link to="/destination" className="theme-btn">
                    Learn More <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
            <div className="new-destination-wrapper">
                <div className="swiper new-destination-slider">
                    <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider {...settings}>
                    {destinationContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="new-destination-items">
                                <div className="thumb">
                                    <img src={item.img} alt="img" />
                                    <div className="content">
                                        <div className="title-text">
                                            <h3><Link to="/destination/destination-details">{item.location}</Link></h3>
                                            <p>{item.title}</p>
                                        </div>
                                        <Link to="/destination/destination-details" className="icon"><i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Destination2;