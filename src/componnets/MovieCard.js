import React from 'react';
import './MovieCard.css';

const data = {
  "actorName1":"于谦",
  "actorName2":"汤孟佳",
  "btnText":"",
  "commonSpecial":"于谦变“恶霸”老师",
  "directorName":"张栾",
  "img":"http://img5.mtime.cn/mt/2019/02/21/095918.47882172_1280X720X2.jpg",
  "is3D":false,
  "isDMAX":false,
  "isFilter":false,
  "isHot":false,
  "isIMAX":false,
  "isIMAX3D":false,
  "isNew":false,
  "length":111,
  "movieId":261858,
  "nearestShowtime":{
      "isTicket":true,
      "nearestCinemaCount":107,
      "nearestShowDay":1554105600,
      "nearestShowtimeCount":742
  },
  "preferentialFlag":false,
  "rDay":22,
  "rMonth":3,
  "rYear":2019,
  "ratingFinal":7.1,
  "titleCn":"老师·好",
  "titleEn":"Song of Youth",
  "type":"剧情",
  "wantedCount":250
}

export default function MovieCard() {
  return (
    <div className="movie-card-wrap">
      <img src={data.img} alt={data.titleEn} />
      <div className="name">{data.titleCn}</div>
    </div>
  )
}