import { Link, useLoaderData, Await } from "react-router-dom"
import { Suspense } from "react";
import Star from '../../assets/Star3.png'
import HostVanList from "../../components/HostVanList"
import HostSkeletonList from "../../components/HostSkeletonList";

export default function Dashboard() {
    const dashhostVans = useLoaderData();

    return (
        <div className="my-6 box-border">
            <div className="bg-[#FFEAD0] py-5 flex justify-between items-center px-5">
                <div>
                    <h1 className="text-2xl font-bold text-[#161616]">Welcome!</h1>
                    <div className="mt-4 text-[#4D4D4D] font-medium text-xs">Income last <span className="font-bold underline">30 days</span></div>
                    <div className="text-[#161616] mt-4 font-extrabold text-4xl">$2,260</div>
                </div>
                <Link to="income" className="cursor-pointer text-sm text-[#4D4D4D] font-semibold hover:underline">
                    Details
                </Link>
            </div>
            <div className="bg-[#FFDDB2] py-5 flex justify-between items-center px-5">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-[#161616] mr-2">Review score</h1>
                    <img src={Star} className="object-scale-down mr-1 w-4.5" />
                    <div className="text-[#161616] font-bold text-sm">5.0<span className="text-[#4D4D4D] font-medium">/5</span></div>
                </div>
                <Link to="reviews" className="cursor-pointer text-sm text-[#4D4D4D] font-semibold hover:underline">
                    Details
                </Link>
            </div>
            <div className="mt-8 box-border px-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Your listed vans</h1>
                    <Link to="vans" className="cursor-pointer text-sm text-[#4D4D4D] font-semibold hover:underline">
                        View All
                    </Link>
                </div>
                <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <Suspense fallback={<HostSkeletonList />}>
                        <Await resolve={dashhostVans.noncriticalData}>
                            {van => <HostVanList hostvans={van.slice(0, 3)} editEnabled disabledLink/>}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}