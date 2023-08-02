import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sites from './components/Sites';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Sites />} />
      </Routes>
    </div>
  );
};

export default App;
