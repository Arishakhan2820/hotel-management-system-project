
import React, { useEffect, useState } from 'react';

import RoomCard from '../Card/RoomCard';
import { Spinner, Alert } from 'react-bootstrap';

const RoomSection = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/rooms', {
                    credentials: 'include'
                });
                const result = await response.json();

                if (result.success) {
                    setRooms(result.data);
                } else {
                    setError(result.message || 'Failed to fetch rooms');
                }
            } catch (err) {
                setError('Error connecting to server');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    return (
        <section className="cs_shape_animation_1 position-relative section-padding">
            <div className="container">
                <div className="section-title text-center mb-50">
                    <span className="sub-title wow fadeInUp">
                        Our Rooms
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Experience Luxary & Comfort</h2>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
                        Discover our spacious and well-appointed rooms designed for your ultimate relaxation.
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="primary" />
                    </div>
                )}

                {error && (
                    <Alert variant="danger" className="text-center">
                        {error}
                    </Alert>
                )}

                {!loading && !error && (
                    <div className="row">
                        {rooms.length > 0 ? (
                            rooms.map((room) => (
                                <RoomCard key={room._id} room={room} />
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No rooms available at the moment.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

        </section>
    );
};

export default RoomSection;
