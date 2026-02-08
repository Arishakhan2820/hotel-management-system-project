import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';

const About1 = () => {

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
            <section className="about-section section-padding  fix bg-cover" data-background="/assets/img/about/about-bg.jpg">
            <div className="right-shape float-bob-x">
                <img src="/assets/img/about/pngfile.png" alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="/assets/img/about/about04.jpg" alt="img" className="wow img-custom-anim-left" />
                                <div className="border-image">
                                    <img src="/assets/img/about/border.png" alt="" />
                                </div>
                                <div className="vdeo-item">
                                    <a onClick={handelClick} className="video-btn video-popup">
                                    <i className="bi bi-play-fill"></i>
                                    </a>
                                    <h5>WACTH VIDEO </h5>
                                </div>
                                <div className="about-image-2">
                                    <img src="/assets/img/about/about3.jpg" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                                    <div className="plane-shape float-bob-y">
                                        <img src="/assets/img/about/plane-shape.png" alt="" />
                                    </div>
                                    <div className="about-tour">
                                        <div className="icon">
                                            <img src="/assets/img/icon/10.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h4>Luxury Hotels</h4>
                                            <span>25 years of Experience</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">Let’s Go Together</span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s" style={{ color: '#000' }}>
                                        Great opportunity for <br/>
                                        luxury hotel stays
                                    </h2>
                                </div>
                                <div className="about-area mt-4 mt-md-0">
                                    <div className="line-image">
                                        <img src="/assets/img/about/Line-image.png" alt="img" />
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                        <div className="icon">
                                            <img src="/assets/img/icon/05.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h5 style={{ color: '#000' }}>
                                                Exclusive Trip
                                            </h5>
                                            <p style={{ color: '#000' }}>
                                                There are many variations of passages <br/> of available, but the majority
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <div className="icon">
                                            <img src="/assets/img/icon/06.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h5 style={{ color: '#000' }}>
                                                Safety first always
                                            </h5>
                                            <p style={{ color: '#000' }}>
                                                There are many variations of passages <br/> of available, but the majority
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".7s">
                                        <div className="icon">
                                            <img src="/assets/img/icon/07.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h5 style={{ color: '#000' }}>
                                                Professional Guide
                                            </h5>
                                            <p style={{ color: '#000' }}>
                                                There are many variations of passages <br/> of available, but the majority
                                            </p>
                                        </div>
                                    </div>
                                </div>
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

export default About1;