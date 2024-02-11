import React, { useEffect, useState } from 'react';

function Menu() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then(response => response.json())
      .then(data => setMenus(data));
  }, []);

  return (
    <div>
      {menus.map(menu => (
        <div key={menu.id}>{menu.name}</div>
      ))}
    </div>
  );
}

export default Menu;