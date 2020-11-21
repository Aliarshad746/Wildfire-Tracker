import React from 'react';
import { Icon } from '@iconify/react';
import fireAlert from '@iconify-icons/mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={fireAlert} className="location-icon"></Icon>
    </div>
  );
};

export default LocationMarker;
