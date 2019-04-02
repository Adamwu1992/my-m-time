import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';
import './Header.css';

export default function Header() {
  const menuConfig = useContext(MenuContext);
  const initialMenus = menuConfig.map((m, index) => {
    if (index === 0) {
      return { ...m, active: true };
    }
    return { ...m, active: false };
  })

  const [menus, setMenus] = useState(initialMenus);

  function handleMenuClick(menu) {
    const newMenus = menus.map(m => {
      if (m.id === menu.id) {
        return { ...m, active: true };
      }
      return { ...m, active: false };
    });
    setMenus(newMenus);
  }

  return (
    <div className="header-wrap">
      <div className="logo">
        <img src="/assets/images/logo_mtime.png" alt="mtime"/>
      </div>
      <ul>
        {
          menus.map(menu => (
            <li className={menu.active ? 'active' : ''} key={menu.id} onClick={() => handleMenuClick(menu)}>
              <Link to={menu.path}>{menu.label}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}