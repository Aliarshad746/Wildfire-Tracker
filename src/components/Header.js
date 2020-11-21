import React from 'react';
import { Icon } from '@iconify/react';
import fireAlert from '@iconify-icons/mdi/fire-alert';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Icon icon={fireAlert} /> Wildfire Tracker (Powered By NASA)
      </h1>
    </div>
  );
};

export default Header;
