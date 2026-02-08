import React, { useEffect, useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router';

const Cta2 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

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

    return (
        <section className="cta-bg-section fix bg-cover" data-background="/assets/img/ctabg.png" >
            <div className="container">
                <div className="row">
                   <div className="cta-wrapper">
                    <div className="section-title text-center">
                        <span className="sub-title text-white wow fadeInUp">
                            Experience Excellence
                        </span>
                        <h2 className="text-white wow fadeInUp wow" data-wow-delay=".3s">
                            We Provide Premium Hotel <br/>
                             Management Services
                        </h2>
                    </div>
                    <div className="cta-btn wow fadeInUp wow" data-wow-delay=".5s">
                        <Link to="/tour/tour-details" className="theme-btn">Find Out More<i className="bi bi-arrow-right"></i></Link>
                        <div className="watch-btn">
                            <a onClick={handelClick} data-delay=".7s" className="video-btn video-popup">
                                <i className="bi bi-play-fill"></i></a>
                                <h6>
                                    Watch Video 
                               </h6>
                        </div>
                     </div>
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

export default Cta2;