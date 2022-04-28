import './App.css';
import LandingPage from './components/landing_page';
import {Route, Routes} from 'react-router-dom';
import HomePage from './components/home_page';
import ConnectPage from './components/connect_page';
import CreatePage from './components/create_page';
import AssetPage from './components/asset_page';
import SellPage from './components/sell_page';
import CollectionPage from './components/collection_page';
import ProfilePage from './components/profile_page';
import { useActiveWeb3React } from './hooks/useWeb3';

function App() {

  const {account} = useActiveWeb3React();


  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/connect-wallet" element={<ConnectPage />} />
      <Route path="/asset/create" element={<CreatePage />} />
      <Route path="/assets/:address" element={<AssetPage />} />
      <Route path="/assets/:address/sell" element={<SellPage />} />
      <Route path="/collection/:collectionname" element={<CollectionPage />} />
      <Route path="/account" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
