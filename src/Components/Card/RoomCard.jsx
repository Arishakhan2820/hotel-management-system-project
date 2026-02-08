
import React from 'react';
import { Link } from 'react-router';

const RoomCard = ({ room }) => {
    // Determine image source - fallback if images array is empty
    const imageSrc = room.images && room.images.length > 0
        ? room.images[0]
        : '/assets/img/tour/tour_grid_1.jpg'; // Placeholder

    return (
        <div className="col-lg-4 col-md-6">
            <div className="tour_card_style_1">
                <div className="tour_card_thumb">
                    <Link to={`/rooms/${room._id}`}>
                        <img src={imageSrc} alt={room.roomNumber} style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div className="tour_card_tag">{room.type}</div>
                </div>
                <div className="tour_card_content">
                    <div className="tour_card_meta">
                        <span className="tour_card_meta_item">
                            <i className="bi bi-people"></i> {room.capacity} Person
                        </span>
                        <span className="tour_card_meta_item">
                            <i className="bi bi-star-fill text-warning"></i> {room.status}
                        </span>
                    </div>
                    <h3 className="tour_card_title">
                        <Link to={`/rooms/${room._id}`}>Room {room.roomNumber}</Link>
                    </h3>
                    <p className="tour_card_price">
                        Starting From <span>${room.pricePerNight}</span> / Night
                    </p>

                </div>
            </div>
        </div>
    );
};

export default RoomCard;
