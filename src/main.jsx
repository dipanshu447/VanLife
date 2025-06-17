import { createRoot } from 'react-dom/client'
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login, { loader as loginLoader, action as loginAction } from './pages/Login.jsx';
import Error from './components/Error.jsx';
import Vans, { loader as vanLoader } from './pages/Vans/Vans.jsx';
import VansDetails, { loader as vanDetailLoader } from './pages/Vans/VansDetails.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostVans, { loader as hostvanLoader } from './pages/Host/HostVans.jsx';
import HostVansDetail, { loader as hostvandetailLoader } from './pages/Host/HostVansDetail.jsx';
import Pricing from './pages/Host/HostVanDetails/Pricing.jsx';
import Photos from './pages/Host/HostVanDetails/Photos.jsx';
import Info from './pages/Host/HostVanDetails/Info.jsx';
import HostLayout from './components/HostLayout.jsx';
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import './server.js';
import { requireAuth } from './utils.js';
import { StrictMode } from 'react';

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} loader={vanLoader} errorElement={<Error />} />
        <Route path='vans/:id' element={<VansDetails />} loader={vanDetailLoader} />

        <Route path='host' element={<HostLayout />}>
            <Route
                index
                element={<Dashboard />}
                loader={async ({request}) => await requireAuth(request)}
            />
            <Route
                path='income'
                element={<Income />}
                loader={async ({request}) => await requireAuth(request)}
            />
            <Route
                path='reviews'
                element={<Reviews />}
                loader={async ({request}) => await requireAuth(request)}
            />
            <Route
                path='vans'
                element={<HostVans />}
                loader={hostvanLoader}
            />
            <Route
                path='vans/:id'
                element={<HostVansDetail />}
                loader={hostvandetailLoader}
            >
                <Route
                    index
                    element={<Info />}
                    loader={async ({request}) => await requireAuth(request)}
                />
                <Route
                    path='pricing'
                    element={<Pricing />}
                    loader={async ({request}) => await requireAuth(request)}
                />
                <Route
                    path='photos'
                    element={<Photos />}
                    loader={async ({request}) => await requireAuth(request)}
                />
            </Route>
        </Route>
        <Route path='login' element={<Login />} loader={loginLoader} action={loginAction} />
        <Route path='*' element={<NotFound />} />
    </Route>
));

function App() {
    return (
        <div className='bg-[#FFF7ED] h-screen font-[inter] relative flex flex-col overflow-x-hidden'>
            <RouterProvider router={router} HydrateFallback={<h1>Loading...</h1>} />
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)