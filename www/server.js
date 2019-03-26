const express = require('express');
const axios = require('axios');

const app = express();

const headerConfig = {
  host: 'api-m.mtime.cn'
};

const respMap = {
  code: '00000000',
  success: true,
  data: null
}

let apiRoutes = express.Router()

// 获取地区信息
app.get('/hot-city-by-cinema', function(req, res) {
  axios.get('https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api',  {
    headers: headerConfig,
    params: req.query
  }).then(response => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      const resp = {
        ...respMap,
        data: response.data.p
      }
      res.json(resp)
    })
    .catch(err => {
      console.log(err)
    });
});

//
app.get('/hot-play-movies', function(req, res) {
  axios.get('https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api',  {
    headers: headerConfig,
    params: req.query
  }).then(response => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      const resp = {
        ...respMap,
        data: response.data
      }
      res.json(resp)
    })
    .catch(err => {
      console.log(err)
    });
})

app.use('/', apiRoutes)

const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)