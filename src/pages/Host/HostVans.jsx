import '../../server.js';
import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import HostVanList from '../../components/HostVanList.jsx';
import HostSkeletonList from '../../components/HostSkeletonList.jsx';

export default function HostVans() {
    const hostvanData = useLoaderData();
    
    return (
        <div className="mt-8 box-border px-5">
            <h1 className="text-2xl font-bold">Your listed vans</h1>
            <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Suspense fallback={<HostSkeletonList />}>
                <Await resolve={hostvanData.noncriticalData}>
                    {(hostvans) => <HostVanList hostvans={hostvans}/>}
                </Await>
            </Suspense>
            </div>
        </div>
    )
}