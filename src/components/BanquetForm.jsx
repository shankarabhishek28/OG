// BanquetForm.jsx
import React, { useState } from 'react';
import './Home.css'
const BanquetForm = () => {
    const [isExpanded, setExpanded] = useState(false);

    const [bookingDetails, setBookingDetails] = useState({
        eventName: '',
        eventDate: '',
        numberOfGuests: '',
        contactPerson: '',
        contactEmail: '',
        contactPhone: '',
        additionalRequests: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', bookingDetails);
        
        setBookingDetails({
            eventName: '',
            eventDate: '',
            numberOfGuests: '',
            contactPerson: '',
            contactEmail: '',
            contactPhone: '',
            additionalRequests: '',
        });
    };

    return (

        <form onSubmit={handleSubmit} className='formm'>
            <label >
                Event Name:
                <input
                    type="text"
                    name="eventName"
                    value={bookingDetails.eventName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Event Date:
                <input

                    type="date"
                    name="eventDate"
                    value={bookingDetails.eventDate}
                    onChange={handleChange}
                />
            </label>
            <label>
                Number of Guests:
                <input
                    type="number"
                    name="numberOfGuests"
                    value={bookingDetails.numberOfGuests}
                    onChange={handleChange}
                />
            </label>

            {isExpanded && (
                <>
                    <label>
                        Contact Person:
                        <input
                            type="text"
                            name="contactPerson"
                            value={bookingDetails.contactPerson}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Contact Email:
                        <input
                            type="email"
                            name="contactEmail"
                            value={bookingDetails.contactEmail}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Contact Phone:
                        <input
                            type="tel"
                            name="contactPhone"
                            value={bookingDetails.contactPhone}
                            onChange={handleChange}
                        />
                    </label>
                 
                </>
            )}
            <div className='formbtn-container'>
                <button
                    className='form-btn'
                    type="button"
                    onClick={() => setExpanded(!isExpanded)}
                    style={{ cursor: 'pointer' }}
                >
                    {isExpanded ? 'Hide Details' : 'Show Details'}
                </button>
                <button className='form-btn' type="submit">Submit</button>
            </div>
            
        </form>
    );
};

export default BanquetForm;
