import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sites from './components/Sites';
import SiteDetails from './components/SiteDetails';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Sites />} />
        <Route path='/detail-site/:idSite' element={<SiteDetails />} />
      </Routes>
    </div>
  );
};

export default App;
