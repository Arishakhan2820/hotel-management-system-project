import React, { useRef } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

const Team3 = () => {

    const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 4000,        
            responsive: [
              {
                breakpoint: 1399,
                settings: {
                  slidesToShow: 3,
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

    const teamContent = [
        {img:'/assets/img/team/01.jpg', name:'Esther howard', content:'Tourist Guide',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/02.jpg', name:'Leslie Alexander', content:'Tourist Guide',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/03.jpg', name:'Theresa Web', content:'Tourist Guide',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/img/team/04.jpg', name:'Floyd Miles', content:'Tourist Guide',facebook:'#',twitter:'#',linkedin:'#'},
      ];    

    return (
<section className="team-section-2 section-padding pt-0 fix">
            <div className="container">
                <div className="team-wrapper">
                    <div className="team-wrap">
                        <h2>Related Guider</h2>
                        <div className="array-button justify-content-center wow fadeInUp wow" data-wow-delay=".5s">
                            <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                            <button onClick={next} className="array-next"><i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="swiper team-slider">
                        <div className="swiper-wrapper cs_slider_gap_301">
                            <Slider ref={sliderRef} {...settings}>
                            {teamContent.map((item, i) => (
                            <div key={i} className="swiper-slide">
                                <div className="team-card-items-2">
                                    <div className="team-image">
                                         <img src={item.img} alt="img" />
                                    </div>
                                    <div className="team-content">
                                        <h4><Link to="/team/team-details">{item.name}</Link></h4>
                                        <p>{item.content}</p>
                                        <div className="social-icon">
                                       <a href={item.facebook}><i className="bi bi-facebook"></i></a>
                                       <a href={item.twitter}><i className="bi bi-twitter-x"></i></a>
                                        <a href={item.linkedin}> <i className="bi bi-linkedin"></i></a>
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

export default Team3;