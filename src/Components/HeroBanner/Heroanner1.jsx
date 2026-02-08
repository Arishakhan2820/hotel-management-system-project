import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';
import Slider from 'react-slick';

const Heroanner1 = () => {


    const heroContent = [
        {img:'/assets/img/hero/hero1.png', subtitle:'Get unforgettable pleasure with us', title:'Hotel <br> Management System'} ,
        {img:'/assets/img/hero/hero2.png', subtitle:'Get unforgettable pleasure with us', title:'Hotel <br> Management System'},
        {img:'/assets/img/hero/hero1.png', subtitle:'Get unforgettable pleasure with us', title:'Hotel <br> Management System'},
      ];

      useEffect(() => {
        loadBackgroudImages();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
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
        <section className="hero-section">
        <div className="swiper hero-slider">
            <div className="swiper-wrapper">
            <Slider {...settings}>
            {heroContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                    <div className="hero-1">
                        <div className="hero-bg bg-cover" data-background={item.img}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="hero-content">
                                        <div className="sub-title">
                                        {item.subtitle}
                                        </div>
                                        <h1>
                                        {parse(item.title)}
                                        </h1>
                                        <div className="booking-list-area">
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <img src="/assets/img/hero/icon-1.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h6>Location</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option>Australia</option>
                                                            <option>India</option>
                                                            <option>Italy</option>
                                                            <option>Japan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <img src="/assets/img/hero/icon-2.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h6>Activities Type</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option> Activities Type</option>
                                                            <option> Adventure 02</option>
                                                            <option>Adventure 03</option>
                                                            <option> Adventure 04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <img src="/assets/img/hero/icon-3.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h6>Activate Day</h6>
                                                    <div className="form-clt">
                                                        <input type="date" id="date1" name="date1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <img src="/assets/img/hero/icon-3.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h6>Traveler</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option>01</option>
                                                            <option>02</option>
                                                            <option>03</option>
                                                            <option>04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="theme-btn" type="submit">Search</button>
                                        </div>
                                    </div>
                                    <div className="counter-area">
                                        <div className="counter-items">
                                            <div className="counter-text">
                                                <h2><span className="count">20.5</span>k</h2>
                                                <p>Featured Projects</p>
                                            </div>
                                            <div className="counter-text">
                                                <h2><span className="count">100.5</span>k</h2>
                                                <p>Luxury Houses</p>
                                            </div>
                                            <div className="counter-text">
                                                <h2><span className="count">150.5</span>k</h2>
                                                <p>Satisficed Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                 </Slider>

            </div>
        </div>
    </section>
    );
};

export default Heroanner1;