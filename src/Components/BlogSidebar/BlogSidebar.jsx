import React from 'react';
import { Link } from 'react-router';

const BlogSidebar = () => {

        const blogContent = [
        {img:'/assets/img/news/post-1.jpg', title:'Get Best Advertiser Your Side Pocket.', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
        {img:'/assets/img/news/post-2.jpg', title:'Supervisor Disapproved of Latest Work.', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
        {img:'/assets/img/news/post-3.jpg', title:'Sakura Dreams and Samurai Tales.', content:'Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis.'},
      ];

    return (
        <section className="news-classNameic-section- section-padding fix">
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-lg-8">
                        <div className="news-standard-wrapper">
                            {blogContent.map((item, i) => (
                            <div key={i} className="news-standard-items">
                                <div className="news-thumb">
                                    <img src={item.img} alt="img" />
                                    <div className="post">
                                        <h3>
                                            16
                                            <span>Dec</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul>
                                        <li>
                                            <i className="bi bi-person"></i>
                                            By admin
                                        </li>
                                        <li>
                                             <i className="bi bi-tag-fill"></i>
                                            0 Comments
                                        </li>
                                    </ul>
                                    <h3>
                                       <Link to="/blog/blog-details">{item.title}</Link>
                                    </h3>
                                    <p>
                                       {item.content}
                                    </p>
                                    <Link to="/blog/blog-details" className="theme-btn">Read More <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                            ))}

                            <div className="page-nav-wrap text-center">
                                <ul>
                                    <li><a className="page-numbers" href="#"><i className="bi bi-arrow-left"></i></a></li>
                                    <li><a className="page-numbers" href="#">01</a></li>
                                    <li><a className="page-numbers" href="#">02</a></li>
                                    <li><a className="page-numbers" href="#">03</a></li>
                                    <li><a className="page-numbers" href="#"><i className="bi bi-arrow-right"></i></a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="main-sideber">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Search</h4>
                                </div>
                                <div className="search-widget">
                                    <form action="#">
                                        <input type="text" placeholder="Search here" />
                                        <button type="submit"><i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Services</h4>
                                </div>
                                <div className="news-widget-categories">
                                    <ul>
                                        <li><a href="#">Travel</a><span>04</span></li>
                                        <li><a href="#">System</a><span>03</span></li>
                                        <li><a href="#">Agency</a><span>02</span></li>
                                        <li><a href="#">Restaurant</a><span>05</span></li>
                                        <li><a href="#">Rant A Car</a><span>06</span></li>
                                        <li><a href="#">Blueprint Builders</a><span>(03)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Recent Post</h4>
                                </div>
                                <div className="recent-post-area">
                                 <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/news/pp1.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="bi bi-calendar-check"></i>
                                                    14 Feb, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/blog-details">
                                                    Get Best Advertised Your
                                                    Side Pocket.
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/news/pp2.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                   <i className="bi bi-calendar-check"></i>
                                                    12 Mar, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/blog-details">
                                                    Supervisor Disapproved
                                                    of Latest Work.
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="/assets/img/news/pp3.jpg" alt="img" />
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="bi bi-calendar-check"></i>
                                                    23 Feb, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <Link to="/blog/blog-details">
                                                    Sakura dreams and
                                                    samurai tales.
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Tags</h4>
                                </div>
                                <div className="news-widget-categories">
                                    <div className="tagcloud">
                                        <a href="#">Agency</a>     
                                        <a href="#">Traveling</a>
                                        <a href="#">Design</a>
                                        <a href="#">Travel</a>
                                        <a href="#">Change</a>
                                        <a href="#">Video</a>
                                        <a href="#">World</a>     
                                        <a href="#">Startup</a>
                                        <a href="#">Services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSidebar;