import React from 'react';
import './MovieCard.css';

export default function MovieCard({ data }) {
  return (
    <div className="movie-card-wrap">
      <div className="img">
        <img src={data.img} alt={data.titleEn} />
      </div>
      <div className="name">{data.titleCn}</div>
    </div>
  )
}