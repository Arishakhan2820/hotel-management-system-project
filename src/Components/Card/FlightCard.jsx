import React from 'react';
import { Link } from 'react-router';

const FlightCard = ({img,name,oneway,destination,price,review}) => {
    return (
        <div className="featured-flight-items">
        <div className="featured-image">
            <img src={img} alt="img" />
        </div>
        <div className="featured-content">
            <div className="featured-post">
                <ul className="feature-list">
                    <li>
                    <i className="bi bi-send"></i>
                        {name}
                    </li>
                </ul>
                <div className="text">
                    <p>
                        {oneway}
                    </p>
                </div>
            </div>
            <div className="featured-cont">
                <div className="content">
                    <h4>
                        <Link to="/tour/tour-details">
                            {destination}
                        </Link>
                    </h4>
                </div>
                <p>From <b>{price}</b></p>
            </div>
            <div className="featured-rating">
                <div className="star">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                    <h6>{review}</h6>
                </div>
                <Link to="/tour/tour-details" className="theme-btn">Book Now<i className="bi bi-arrow-right"></i></Link>
            </div>
        </div>
    </div>
    );
};

export default FlightCard;