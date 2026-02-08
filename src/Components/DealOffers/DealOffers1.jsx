import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const DealOffers1 = () => {

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

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

         useEffect(() => {
             loadBackgroudImages();
         }, []);

      const offerContent = [
        {img:'/assets/img/offer/nepal.png', subtitle:'-50% Off', title:'Nepal', price:'$160'},          
        {img:'/assets/img/offer/dubai.png', subtitle:'-50% Off', title:'Dubai', price:'$160'},          
        {img:'/assets/img/offer/china.png', subtitle:'-50% Off', title:'China', price:'$160'},          
        {img:'/assets/img/offer/newyork.png', subtitle:'-50% Off', title:'New York ', price:'$160'},                 
      ];       

    return (
        <section className="deals-offer-section section-padding fix bg-cover" data-background="/assets/img/offer/bg.jpg">
            <div className="deals-offer-wrapper">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="price-items">
                            <div className="price-image wow fadeInUp wow" data-wow-delay=".2s">
                                <img src="/assets/img/offer/price.png" alt="img" />
                            </div>
                            <div className="coming-soon-timer">
                                <div className="timer-content wow fadeInUp" data-wow-delay=".2s">
                                    <h2 id="day">07</h2>
                                    <p>Days</p>
                                </div>
                                <div className="timer-content wow fadeInUp" data-wow-delay=".4s">
                                    <h2 id="hour">13</h2>
                                    <p>Hours</p>
                                </div>
                                <div className="timer-content wow fadeInUp" data-wow-delay=".6s">
                                    <h2 id="min">39</h2>
                                    <p>Minutes</p>
                                </div>
                                <div className="timer-content wow fadeInUp" data-wow-delay=".8s">
                                    <h2 id="sec">15</h2>
                                    <p>Secound</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="sub-title text-white wow fadeInUp">
                                    Deals & Offers
                                </span>
                                <h2 className="text-white wow fadeInUp wow" data-wow-delay=".3s">
                                    Incredible Last-Minute Offers
                                </h2>
                            </div>
                            <div className="array-button justify-content-center wow fadeInUp wow" data-wow-delay=".5s">
                                <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                                <button  onClick={next} className="array-next"><i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="offer-slide-items">
                            <div className="swiper offer-slider">
                                <div className="swiper-wrapper cs_slider_gap_301">

                                <Slider ref={sliderRef} {...settings}>
                                {offerContent.map((item, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="offer-items">
                                            <div className="offer-image">
                                                <img src={item.img} alt="img" />
                                                <div className="offer-content">
                                                    <ul className="offer-btn">
                                                        <li>{item.subtitle}</li>
                                                    </ul>
                                                    <div className="content">
                                                        <h3>
                                                            <Link to="/tour/tour-details">
                                                            {item.title}
                                                            </Link>
                                                        </h3>
                                                        <span>
                                                        {item.price}
                                                        </span>
                                                    </div>
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
                </div>
            </div>
        </section>
    );
};

export default DealOffers1;