import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import VideoModal from '../VideoModal/VideoModal';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Story1 = () => {

    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);
    
    const handelClick = () => {
        setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
        setToggle(!toggle);
    };
    const handelClose = () => {
        setIframeSrc('about:blank');
        setToggle(!toggle);
    };   

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="watch-video-section section-padding pb-0 fix">
            <div className="bg-shape">
                <img src="/assets/img/map-bg.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        Watch Our Story
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                        Unforgettable Travel Experiences <br/>
                        Get Your Guide
                    </h2>
                </div>
                <div className="video-wrapper">
                    <div className="watch-button">
                        <Link to="/contact" className="theme-btn wow fadeInUp wow" data-wow-delay=".5s">Contact Us<i className="bi bi-arrow-right"></i></Link>
                        <Link to="/tour/tour-details" className="theme-btn style-2 wow fadeInUp wow" data-wow-delay=".7s">Book Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                    <div className="video-image bg-cover" data-background="/assets/img/videobg.png" >
                        <a onClick={handelClick} className="video-btn video-popup">
                        <i className="bi bi-play-fill"></i>
                        </a>
                    </div>
                </div>
            </div>

        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>

        </section>
    );
};

export default Story1;