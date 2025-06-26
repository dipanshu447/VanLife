import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function VansSkeleton() {
    return (
        <div>
            <Skeleton className="h-[80%]" />
            <div className="flex mt-2 items-center">
                <div className="flex flex-col text-[#161616] font-semibold text-[14px] items-baseline gap-1 sm:text-[15px] md:text-base xl:text-xl">
                    <Skeleton width={100} height={8} />
                    <Skeleton width={60} height={15}/>
                </div>
            </div>
        </div>
    )
}