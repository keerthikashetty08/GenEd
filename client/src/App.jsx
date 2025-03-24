import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topicpage from './pages/topicpage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="root">
        <Routes>
          <Route path="/" element={<Topicpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
