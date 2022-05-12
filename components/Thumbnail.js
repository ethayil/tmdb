import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { forwardRef } from "react"

const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    Thumbnail.displayName = 'Thumbnail'
    return (
        <div ref={ref} className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105">
            <Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`}
                layout='responsive' height={1080} width={1920}
            />

            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.name}</h2>
                <p className="flex items-center transition duration-400 opacity-0 group-hover:opacity-80">
                    {result.media_type} •{' '}
                    {result.release_date || result.first_air_date} •{' '}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail