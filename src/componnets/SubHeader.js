import React, { useState } from 'react';
import './SubHeader.css';

export default function SubHeader() {
  const [location] = useState('北京');
  return (
    <div className="sub-header-wrap">
      <div className="location">{location}</div>
      <div className="search">影片/影院/影人，任你搜</div>
    </div>
  )
}