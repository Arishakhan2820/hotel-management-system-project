import React from 'react';
import { Link } from 'react-router';

const DestinationCard = ({img,title,content}) => {
    return (
        <div className="new-top-desti-thumb">
        <img src={img} alt="img" />
        <Link to="/destination/destination-details" className="icon img-popup2">
        <i className="bi bi-plus-lg"></i>
        </Link>
        <div className="content">
            <h4><Link to="/destination/destination-details">{title}</Link></h4>
            <p>{content}</p>
        </div>
    </div>
    );
};

export default DestinationCard;