import React from 'react';

export default function DigitalList(props) {
  const { data, total, title } = props;
  const renderData = data.slice(0, 8);

  return (
    <div className="digital-wrap">
      <div className="header">
        <span className="titla">{title}</span>
        <span className="tail">（{total}部）</span>
        <span>
          <img src="/assets/images/i_city.png" alt="more" />
        </span>
      </div>
      <ul>
        {
          renderData.map(item => (
            <span>{item.name}</span>
          ))
        }
      </ul>
    </div>
  )
}