import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Map from './components/Map';
import Header from './components/Header';

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setloading(true);
      const res = await fetch(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
      );
      const { events } = await res.json();

      setEventData(events);
      setloading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
};

export default App;
