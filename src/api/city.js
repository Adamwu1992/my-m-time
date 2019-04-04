const resp = {
  code: '00000000',
  success: true,
  data: null
}

const cityList = [
  { id: 292, n: '上海', pinyinFull: 'Shanghai', pinyinShort: 'sh' },
  { id: 366, n: '深圳', pinyinFull: 'Shenzhen', pinyinShort: 'sz' },
  { id: 291, n: '重庆', pinyinFull: 'Chongqing', pinyinShort: 'cq' },
  { id: 290, n: '北京', pinyinFull: 'Beijing', pinyinShort: 'bj' },
  { id: 880, n: '成都', pinyinFull: 'Chengdu', pinyinShort: 'cd' },
  { id: 365, n: '广州', pinyinFull: 'Guangzhou', pinyinShort: 'gz' },
  { id: 974, n: '杭州', pinyinFull: 'Hangzhou', pinyinShort: 'hz' },
  { id: 371, n: '东莞', pinyinFull: 'Dongguan', pinyinShort: 'dg' },
  { id: 561, n: '武汉', pinyinFull: 'Wuhan', pinyinShort: 'wh' },
  { id: 373, n: '佛山', pinyinFull: 'Foshan', pinyinShort: 'fs' },
]

export const getCityList = () => Promise.resolve({
  ...resp,
  data: cityList
})