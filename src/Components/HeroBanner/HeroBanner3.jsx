import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import { Link } from 'react-router';

const HeroBanner3 = () => {

    const heroContent = [
        {img:'assets/img/hero/hero1.png', subtitle:'Booking Now', title:' Lifelong Memories Just <br>A Few Days Away', content:'Making your dream to see the world come true is a thrilling and enriching goal. Traveling allows you to experience new cultures, cuisines, landscapes, and ways of life'},              
        {img:'/assets/img/hero/04.png', subtitle:'Booking Now', title:' Lifelong Memories Just <br>A Few Days Away', content:'Making your dream to see the world come true is a thrilling and enriching goal. Traveling allows you to experience new cultures, cuisines, landscapes, and ways of life'},              
        {img:'/assets/img/hero/03.png', subtitle:'Booking Now', title:' Lifelong Memories Just <br>A Few Days Away', content:'Making your dream to see the world come true is a thrilling and enriching goal. Traveling allows you to experience new cultures, cuisines, landscapes, and ways of life'},              
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
<section className="hero-section hero-3">
            <div className="swiper hero-slider-3">
                <div className="swiper-wrapper">
                <Slider {...settings}>
                {heroContent.map((item, i) => (
                    <div key={i} className="swiper-slide">
                        <div className="hero-image bg-cover" data-background={item.img}></div>
                        <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="hero-content">
                                            <div className="sub-title" data-animation="fadeInUp" data-delay="1.2s">
                                            {item.subtitle}
                                            </div>
                                            <h1 data-animation="fadeInUp" data-delay="1.4s">
                                                {parse(item.title)}
                                            </h1>
                                            <p data-animation="fadeInUp" data-delay="1.6s">
                                            {item.content}
                                            </p>
                                            <div className="about-button" data-animation="fadeInUp" data-delay="1.8s">
                                                <Link to="/tour/tour-details" className="theme-btn">Explore Flight<i className="bi bi-arrow-right"></i></Link>
                                                <Link to="/tour/tour-details" className="theme-btn style-2">Book A Stay<i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                     </div>
                ))}
                 </Slider>

                   </div>
                   <div className="swiper-dot">
                      <div className="dot2"></div>
                   </div>
            </div>
        </section>
    );
};

export default HeroBanner3;