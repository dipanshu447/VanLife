import clsx from 'clsx';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';

export async function loader({ request, params }) {
    await requireAuth(request);
    return getHostVans(params.id);
}

export default function HostVansDetail() {
    const vandetail = useLoaderData()[0];

    const typeStyles = clsx("text-[#FFEAD0] text-[11px] capitalize py-1 px-3 font-semibold cursor-pointer rounded-md lg:text-sm", {
        "bg-[#E17654]": vandetail?.type == "simple",
        "bg-[#115E59]": vandetail?.type == "rugged",
        "bg-[#161616]": vandetail?.type == "luxury"
    });

    return (
        <div className="grow flex flex-col mt-10">
            <Link to='..' relative="path" className="text-xs font-medium text-[#201F1D]  cursor-pointer">
                &larr; <span className="underline">Back to all vans</span>
            </Link>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 px-5 py-4 rounded-sm bg-white">
                <div className='flex sm:flex-col gap-4 sm:gap-3'>
                    <img className="w-[40%] sm:w-full max-w-sm object-cover rounded-sm transition-all duration-800 ease-[cubic-bezier(0.12,0.08,0,1.59)] hover:shadow-xl" src={vandetail.imageUrl} alt={`Image of ${vandetail.name}`} />
                    <div className=' grow flex flex-col items-baseline'>
                        <button className={typeStyles}>{vandetail.type}</button>
                        <div className="flex flex-col mt-2 w-auto">
                            <span className="text-[#161616] font-bold text-lg sm:text-xl">{vandetail.name}</span>
                            <div className="text-[#161616]">
                                <span className="font-bold text-base sm:text-lg">${vandetail.price}</span>
                                <small className="font-medium text-sm lg:text-base">/day</small>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className='mt-2 w-full'>
                    <ul className='flex list-none space-x-5 text-[#4D4D4D] font-semibold text-sm'>
                        <li>
                            <NavLink to="." end className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                                Details
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="pricing" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="photos" className={({ isActive }) => `cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] ${isActive ? "border-b-2 border-black text-black" : "border-b-2 border-transparent hover:border-black hover:text-black"}`}>
                                Photos
                            </NavLink>
                        </li>
                    </ul>
                    <Outlet context={vandetail} />
                </nav>
            </div>
        </div>
    )
}