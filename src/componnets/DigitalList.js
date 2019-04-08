import React from 'react';
import Card from './MovieCard';
import './DigitalList.css';

export default function DigitalList(props) {
  const { data = [], total, title } = props;
  const renderData = data.slice(0, 6);

  function handleHeaderClick() {
    if (props.onHeaderClick) {
      props.onHeaderClick();
    }
  }

  function handleItemClick(item) {
    if (props.onItemClick) {
      props.onItemClick(item);
    }
  }

  return (
    <div className="digital-wrap">
      <div className="header" onClick={handleHeaderClick}>
        <span className="title">{title}</span>
        <span className="tail">（{total}部）</span>
        <span className="icon">
          <img src="/assets/images/i_city.png" alt="more" />
        </span>
      </div>
      <ul>
        {
          renderData.map(item => (
            <li key={item.movieId} onClick={() => handleItemClick(item)}>
              <Card key={item.movieId} data={item} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}