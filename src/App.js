import React from 'react';
import Recap from './components/recap.js'

function App() {
  return (

    <div className="todo d-flex justify-content-center align-items-center bg-warning">
      <div className="w-50">
        <nav className="navbar navbar-light bg-dark">
          <div className=" navbar-brand text-light mx-auto ">
            To-Do List
          </div>

        </nav>

        <Recap />
      </div>
    </div>



  );
}

export default App;
