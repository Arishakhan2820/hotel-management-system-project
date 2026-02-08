import React from 'react';
import { Link } from 'react-router';

const Blog3 = () => {

    const blogContent = [
        {img:'/assets/img/news/08.jpg', title:'The Surfing man Will Blow Your Mind'},
        {img:'/assets/img/news/09.jpg', title:'Supervisor Disapproved Of Latest Work'},
        {img:'/assets/img/news/10.jpg', title:'Get Best Advertiser In Your Side Pocket'},
      ];

    return (
        <section className="news-section-3 section-padding pb-0 fix">
            <div className="top-shape float-bob-y">
                <img src="/assets/img/news/plane-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        News & Updates
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                        Recent Blog Posts
                    </h2>
                </div>
                <div className="row">
                {blogContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-card-items-3 style-4">
                            <div className="news-image">
                            <img src={item.img} alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li className="post">26<span>Nov</span></li>
                                    <li>
                                    <i className="bi bi-person"></i>
                                        By Admin
                                    </li>
                                    <li>
                                    <i className="bi bi-tag-fill"></i>
                                        Travel
                                    </li>
                                </ul>
                                <h4>
                                <Link to="/blog/blog-details">
                                    {item.title}
                                    </Link>
                                </h4>
                                <Link to="/blog/blog-details" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))}
 

                </div>
            </div>
        </section>

    );
};

export default Blog3;