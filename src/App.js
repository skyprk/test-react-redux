import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OtherComponent from './pages/OtherComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/otherpage" element={<OtherComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
