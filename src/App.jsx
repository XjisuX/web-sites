import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SiteList from './components/SiteList';
import SiteDetails from './components/SiteDetails';
import SiteEdition from './components/SiteEdition';
import SiteNew from './components/SiteNew';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<SiteList />} />
        <Route path='/site/new' element={<SiteNew />} />
        <Route path='/site/update' element={<SiteEdition />} />
        <Route path='/site/detail/:idSite' element={<SiteDetails />} />
      </Routes>
    </div>
  );
};

export default App;
