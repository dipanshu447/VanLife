import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function HostVanSkeleton() {
    return (
        <div className="flex items-center p-3 rounded-smjustify-between">
            <div className="flex gap-3 items-center flex-10">
                <Skeleton height={50} width={50} />
                <div className="flex flex-col gap-2">
                    <Skeleton height={20} width={200} />
                    <Skeleton height={20} width={150} />
                </div>
            </div>
        </div>
    )
}