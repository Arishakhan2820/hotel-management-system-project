import React, { useRef } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

const DealOffers2 = () => {

        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 4000,        
            responsive: [
              {
                breakpoint: 1399,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2,
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
    
        const dealContent = [
            {name:'Qatar Airways', img:'/assets/img/offer/hourse.png', flytype:'Fastest Fly', Seat:'05 Seats', location1:'New Work', location2:'Nepal', starttime:'05 Seats', startdate:'25 Nov 2024', duaration:'04h 20 miniutes', endtime:'12.50PM', enddate:'25 Nov 2024', classtype:'Business Class', price:'$1520'},            
            {name:'NOVOAIR', img:'/assets/img/offer/fly.png', flytype:'Fastest Fly', Seat:'05 Seats', location1:'New Work', location2:'Nepal', starttime:'05 Seats', startdate:'25 Nov 2024', duaration:'04h 20 miniutes', endtime:'12.50PM', enddate:'25 Nov 2024', classtype:'Business Class', price:'$1520'},  
            {name:'Qatar Airways', img:'/assets/img/offer/hourse.png', flytype:'Fastest Fly', Seat:'05 Seats', location1:'New Work', location2:'Nepal', starttime:'05 Seats', startdate:'25 Nov 2024', duaration:'04h 20 miniutes', endtime:'12.50PM', enddate:'25 Nov 2024', classtype:'Business Class', price:'$1520'},            
            {name:'NOVOAIR', img:'/assets/img/offer/fly.png', flytype:'Fastest Fly', Seat:'05 Seats', location1:'New Work', location2:'Nepal', starttime:'05 Seats', startdate:'25 Nov 2024', duaration:'04h 20 miniutes', endtime:'12.50PM', enddate:'25 Nov 2024', classtype:'Business Class', price:'$1520'},                                  
          ]; 

    return (
<section className="deals-offer-section section-padding pb-0 fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="sub-title wow fadeInUp">
                            Deals & Offers
                        </span>
                        <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                            Last Minute Deals
                        </h2>
                    </div>
                    <div className="array-button justify-content-center wow fadeInUp wow" data-wow-delay=".5s">
                        <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                         <button onClick={next} className="array-next"><i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className="swiper offer-slider2">
                    <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider ref={sliderRef} {...settings}>
                    {dealContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="deals-offer-items">
                                <div className="airline-wrap">
                                    <div className="airline-card">
                                        <div className="airline">
                                            <div className="icon">
                                                <img src={item.img} alt="img" />
                                            </div>
                                            <div className="content">
                                                <h4>{item.name}</h4>
                                            </div>
                                        </div>
                                        <Link to="/tour/tour-details" className="theme-btn">{item.flytype}</Link>
                                    </div>
                                    <div className="text">
                                        <span>{item.Seat}</span>
                                    </div>
                                </div>
                                <ul className="post-meta">
                                    <li>{item.location1}</li>
                                    <li className="plane-shape">
                                        <img src="/assets/img/offer/plane-line.png" alt="img" />
                                    </li>
                                    <li>{item.location2}</li>
                                </ul>
                                <div className="date">
                                    <div className="content">
                                        <h4>{item.starttime}</h4>
                                        <span>{item.startdate}</span>
                                    </div>
                                    <span>{item.duaration}</span>
                                    <div className="content">
                                        <h4>{item.endtime}</h4>
                                        <span>{item.enddate}</span>
                                    </div>
                                </div>
                                <div className="offer-business">
                                    <div className="business-content">
                                        <div className="icon">
                                            <img src="/assets/img/icon/17.svg" alt="img" /> 
                                        </div>
                                        <div className="text">
                                            <h6>{item.classtype}</h6>
                                        </div>
                                    </div>
                                    <span>{item.price}</span>
                                    <Link to="/tour/tour-details" className="link-btn">Flight Details <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        ))}
                        </Slider>                        



                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealOffers2;