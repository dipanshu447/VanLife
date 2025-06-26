import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function HostVanDetailSkeleton() {
    return (
        <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 px-5 py-4 rounded-sm ">
            <Skeleton className="w-full h-[60vh] lg:min-w-[95vw]" />
        </div>
    )
}