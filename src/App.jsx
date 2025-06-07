import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans/Vans.jsx';
import VansDetails from './pages/Vans/VansDetails.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVansDetail from './pages/Host/HostVansDetail.jsx';
import Pricing from './pages/Host/HostVanDetails/Pricing.jsx';
import Photos from './pages/Host/HostVanDetails/Photos.jsx';
import HostLayout from './components/HostLayout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './server.js';
import Info from './pages/Host/HostVanDetails/Info.jsx';

export default function App() {
  return (
    <div className='bg-[#FFF7ED] h-screen font-[inter] relative flex flex-col overflow-x-hidden'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VansDetails />} />

            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVansDetail />}>
                <Route index element={<Info />}/>
                <Route path='pricing' element={<Pricing />}/>
                <Route path='photos' element={<Photos />}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}