import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './List.css'; // Create this file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css';

const List = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      alert('Failed to fetch bookings');
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="booking-list-container">
      <h2 className="text-center mb-4">Booking List</h2>

      {bookings.length === 0 ? (
        <p className="text-center text-muted">No bookings found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.service}</td>
                  <td>{booking.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default List;
