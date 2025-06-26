import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function VansDetailSkeleton() {
    return (
        <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row lg:mb-5">
            <Skeleton className="min-w-[30vw] h-[40vh] lg:h-[60vh]" />
            <div className="grow flex flex-col mt-3 lg:mx-10">
                <div className="grow">
                    <div className="flex flex-col text-[#161616] font-bold text-xl items-baseline gap-1 lg:gap-6 md:text-2xl lg:text-3xl">
                        <Skeleton height={20} width={60} />
                        <Skeleton height={15} width={100} />
                    </div>
                    <div className="text-[#161616] mt-2 lg:mt-4 flex flex-col overflow-hidden mb-4">
                        <div className="flex gap-2">
                            <Skeleton height={10} width={190} />
                            <Skeleton height={10} width={60} />
                            <Skeleton height={10} width={120} />
                        </div>
                        <div className="flex gap-2">
                            <Skeleton height={10} width={100} />
                            <Skeleton height={10} width={120} />
                            <Skeleton height={10} width={60} />
                        </div>
                        <div className="flex gap-2">
                            <Skeleton height={10} width={90} />
                            <Skeleton height={10} width={30} />
                            <Skeleton height={10} width={190} />
                        </div>
                    </div>
                </div>
                <Skeleton height={30} className="w-full" />
            </div>
        </div>
    )
}