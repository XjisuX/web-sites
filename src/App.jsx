import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SiteList from './components/SiteList';
import SiteDetails from './components/SiteDetails';
import SiteEdition from './components/SiteEdition';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<SiteList />} />
        <Route path='/update-site' element={<SiteEdition />} />
        <Route path='/detail-site/:idSite' element={<SiteDetails />} />
      </Routes>
    </div>
  );
};

export default App;
