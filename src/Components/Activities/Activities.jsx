import React from 'react';
import { Link } from 'react-router';

const Activities = () => {

    const teamContent = [
        {img:'/assets/img/activities/01.jpg', name:'(5 Trips)', content:'California'},
        {img:'/assets/img/activities/02.jpg', name:'(2 Trips)', content:'Thailand'},
        {img:'/assets/img/activities/03.jpg', name:'(3 Trips)', content:'India'},
        {img:'/assets/img/activities/04.jpg', name:'(6 Trips)', content:'Sugarland'},
        {img:'/assets/img/activities/05.jpg', name:'(7 Trips)', content:'California'},
        {img:'/assets/img/activities/06.jpg', name:'(8 Trips)', content:'Sugarland'},
        {img:'/assets/img/activities/07.jpg', name:'(6 Trips)', content:'India'},
        {img:'/assets/img/activities/08.jpg', name:'(3 Trips)', content:'California'},
        {img:'/assets/img/activities/09.jpg', name:'(5 Trips)', content:'Thailand'},
      ];

    return (
        <section className="activities-section fix section-padding">
            <div className="container">
                <div className="row g-4">
                {teamContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="activities-items">
                            <div className="activities-image">
                            <img src={item.img} alt="img" />
                                <div className="post">
                                {item.name}
                                </div>
                            </div>
                            <div className="activities-content">
                                <h4>
                                    <Link to="/activities/activities-details">{item.content}</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
         </section>
    );
};

export default Activities;