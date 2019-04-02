import React from 'react';
import Card from './MovieCard';
import './DigitalList.css';

const mock = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

export default function DigitalList(props) {
  const { data = mock, total, title } = props;
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
            <li>
              <Card key={item.id} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}