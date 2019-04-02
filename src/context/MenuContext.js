import React from 'react';

export const menus = [
  {
    id: 1,
    name: 'home',
    label: '首页',
    path: '/'
  },
  {
    id: 2,
    name: 'ticket',
    label: '购票',
    path: '/ticket'
  },
  {
    id: 3,
    name: 'mall',
    label: '商城',
    path: '/mall'
  },
  {
    id: 4,
    name: 'discover',
    label: '发现',
    path: '/discover'
  }
]

export const MenuContext = React.createContext(menus)