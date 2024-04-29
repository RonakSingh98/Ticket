import './event.css'
import React, { useState } from 'react';

const TicketUploadForm = () => {
  const [ticketImage, setticketImage] = useState(null);
  const [ticketCost, setTicketCost] = useState('');
  const [eventName, setEventName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setticketImage(event.target.files[0]);
  };

  const handleTicketCostChange = (event) => {
    setTicketCost(event.target.value);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ticketImage || !ticketCost || !eventName) {
      alert('Please fill in all fields.');
      return;
    }

    // Mock upload logic (replace with actual logic to upload the file)
    const formData = new FormData();
    formData.append('ticket', ticketImage);
    formData.append('ticketCost', ticketCost);
    formData.append('eventName', eventName);
    
    // Simulate upload process
    setTimeout(() => {
      setUploadStatus('Upload successful.');
    }, 2000);
  };

  return (
    <div>
      <h2 className='headi'>Ticket Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ticket">Ticket Image:</label>
          <input
            type="file"
            id="ticket"
            name="ticket"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ticketCost">Ticket Cost:</label>
          <input
            type="text"
            id="ticketCost"
            name="ticketCost"
            value={ticketCost}
            onChange={handleTicketCostChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventName}
            onChange={handleEventNameChange}
            required
          />
        </div>
        <button className='btn' type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default TicketUploadForm;
