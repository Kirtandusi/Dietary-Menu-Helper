import './App.css';
import './tailwind.css';
//import React from 'react';
import WebRouter from './WebRouter';
import Menu from './Menu';
//import React, { useEffect, useState } from 'react';
function App() {
  //const [menus, setMenus] = useState([]);
  return (
    <>
      {/* <WebRouter /> */}
      <Menu />
    </>
  );
  // useEffect(() => {
  //   // Fetch the menus from your Flask backend
  //   fetch('http://localhost:5000/menu')
  //     .then(response => response.json())
  //     .then(data => setMenus(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  // return (
  //   <div>
  //     {menus.map((menu, index) => (
  //       <div key={index}>
  //         <h2>{menu.date}</h2>
  //         <ul>
  //           {menu.items.map((item, itemIndex) => (
  //             <li key={itemIndex}>{item.name}: {item.description}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default App;