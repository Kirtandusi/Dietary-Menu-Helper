import './App.css';
import './tailwind.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members")
   .then(res => res.json())
   .then(data => setData(data))
   console.log(data);
  }, [])




  return (
    <div className="text-center text-blue-500">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
