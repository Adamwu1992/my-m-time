import React from 'react';
import Card from './MovieCard';
import './DigitalList.css';

export default function DigitalList(props) {
  const { data = [], total, title } = props;
  const renderData = data.slice(0, 8);

  return (
    <div className="digital-wrap">
      <div className="header">
        <span className="title">{title}</span>
        <span className="tail">（{total}部）</span>
        <span className="icon">
          <img src="/assets/images/i_city.png" alt="more" />
        </span>
      </div>
      <ul>
        {
          renderData.map(item => (
            <li key={item.movieId}>
              <Card key={item.movieId} data={item} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}