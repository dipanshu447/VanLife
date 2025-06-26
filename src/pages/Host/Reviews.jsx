import starimg from '../../assets/Star3.png'

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ];

    const starGen = (count) => {
        return Array.from({ length: count }).map((_, i) => <img key={i} src={starimg} alt={`star-img-${i}`} />)
    }

    const ratings = [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
    ];

    const ratingsElements = ratings.map(rating => (
        <div key={rating.stars} className='flex items-center gap-2 text-sm'>
            <span className='flex-2'>{rating.stars} stars</span>
            <div className='bg-[#B9B9B9] rounded h-2 flex-10 sm:flex-12 md:flex-14 lg:flex-18'>
                <div className='bg-[#FF8C38] h-2 rounded'
                    style={{ width: `${rating.percent}%` }}
                ></div>
            </div>
            <span className='text-right flex-2'>{rating.percent}%</span>
        </div>
    ));

    const reviews = reviewsData.map(review => (
        <div key={review.id} className='mt-6 flex flex-col gap-3'>
            <div className='flex gap-2 mb-1'>
                {starGen(review.rating)}
            </div>
            <div className='flex font-bold gap-1 text-sm'>
                {review.name}
                <span className='text-[#8C8C8C]'>{review.date}</span>
            </div>
            <p className='font-medium text-sm'>{review.text}</p>
            <div className='text-[#C7C7C7] border-t-2 mt-4' />
        </div>
    ))

    return (
        <div className="my-6 box-border px-5 text-[#161616]">
            <div className="flex gap-3">
                <h1 className="text-2xl font-bold">Your reviews</h1>
                <div className="text-[#4D4D4D] font-medium text-sm content-end-safe">last <span className="font-bold underline">30 days</span></div>
            </div>
            <div className="mt-4 flex text-[#161616] gap-1.5 font-extrabold text-2xl items-center">
                5.0
                <img src={starimg} alt="star-image" className='ml-1' />
                <span className='font-medium text-sm content-end-safe'>overall rating</span>
            </div>
            <div className='mt-5 flex flex-col gap-3'>
                {ratingsElements}
            </div>
            <h1 className="mt-5 text-base font-bold">Reviews (2)</h1>
            <div className="flex flex-col mb-10">
                {reviews}
            </div>
        </div>
    )
}