import React from 'react';
import { Link } from 'react-router';

const Team1 = () => {

    const teamContent = [
        {img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&q=80', name:'Esther howard', content:'Hotel Manager',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=500&h=500&fit=crop', name:'Theresa Web', content:'Front Desk Manager',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=500&fit=crop', name:'Leslie Alexander', content:'Concierge',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop', name:'Floyd Miles', content:'Guest Services',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="team-section fix section-padding">
            <div className="jip-shape float-bob-x">
                <img src="/assets/img/team/jip.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        Meet Our Team
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">Our Hotel Staff</h2>
                </div>
                <div className="row">
                {teamContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="team-card-item">
                            <div className="team-image">
                                <img src={item.img} alt="img" />
                            </div>
                            <div className="team-content">
                                <h4><Link to="/team/team-details">{item.name}</Link></h4>
                                <p>{item.content}</p>
                                <div className="social-profile">
                                    <ul>
                                        <li><a href={item.facebook}><i className="bi bi-facebook"></i></a></li>
                                        <li><a href={item.twitter}><i className="bi bi-twitter-x"></i></a></li>
                                        <li><a href={item.linkedin}> <i className="bi bi-linkedin"></i></a></li>
                                        <li><a href={item.instagram}><i className="bi bi-instagram"></i></a></li>
                                    </ul>
                                    <span className="plus-btn"><i className="bi bi-share"></i></span>
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

export default Team1;