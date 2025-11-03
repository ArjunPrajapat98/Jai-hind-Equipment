'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const VideoSection = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)

    const videos = [
        {
            id: 1,
            title: "Next.js 14 Full Course",
            description: "Learn Next.js 14 with this complete beginner's tutorial",
            thumbnail: "https://img.youtube.com/vi/__mSgDEOyv8/maxresdefault.jpg",
            youtubeId: "__mSgDEOyv8",
            duration: "2:15:30"
        },
        {
            id: 2,
            title: "Tailwind CSS in 100 Seconds",
            description: "Quick introduction to Tailwind CSS utility-first framework",
            thumbnail: "https://img.youtube.com/vi/mr15Xzb1Ook/maxresdefault.jpg",
            youtubeId: "mr15Xzb1Ook",
            duration: "2:20"
        },
        {
            id: 3,
            title: "React Hooks Explained",
            description: "Complete guide to React hooks for beginners",
            thumbnail: "https://img.youtube.com/vi/TNhaISOUy6Q/maxresdefault.jpg",
            youtubeId: "TNhaISOUy6Q",
            duration: "45:12"
        },
        {
            id: 4,
            title: "TypeScript Crash Course",
            description: "Learn TypeScript fundamentals in this crash course",
            thumbnail: "https://img.youtube.com/vi/gp5H0Vw39yw/maxresdefault.jpg",
            youtubeId: "gp5H0Vw39yw",
            duration: "1:31:22"
        },
        {
            id: 5,
            title: "Responsive Web Design",
            description: "Create responsive layouts that work on all devices",
            thumbnail: "https://img.youtube.com/vi/VQraviuwbzU/maxresdefault.jpg",
            youtubeId: "VQraviuwbzU",
            duration: "25:47"
        },
        {
            id: 6,
            title: "JavaScript Modern Features",
            description: "Latest JavaScript features you need to know",
            thumbnail: "https://img.youtube.com/vi/NCwa_xi0Uuc/maxresdefault.jpg",
            youtubeId: "NCwa_xi0Uuc",
            duration: "38:15"
        },
        {
            id: 7,
            title: "CSS Grid vs Flexbox",
            description: "When to use CSS Grid and when to use Flexbox",
            thumbnail: "https://img.youtube.com/vi/RSIclWvNTdQ/maxresdefault.jpg",
            youtubeId: "RSIclWvNTdQ",
            duration: "18:33"
        },
        {
            id: 8,
            title: "Web Performance Optimization",
            description: "Tips and tricks to make your website faster",
            thumbnail: "https://img.youtube.com/vi/9a6eSw4zpmI/maxresdefault.jpg",
            youtubeId: "9a6eSw4zpmI",
            duration: "32:45"
        },
        {
            id: 9,
            title: "Git & GitHub Tutorial",
            description: "Complete Git and GitHub tutorial for beginners",
            thumbnail: "https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg",
            youtubeId: "RGOj5yH7evk",
            duration: "46:18"
        },
        {
            id: 10,
            title: "Deploying Next.js Apps",
            description: "How to deploy Next.js applications to production",
            thumbnail: "https://img.youtube.com/vi/ek7jKbHezyo/maxresdefault.jpg",
            youtubeId: "ek7jKbHezyo",
            duration: "22:09"
        }
    ]

    const openVideo = (youtubeId) => {
        setSelectedVideo(youtubeId)
    }

    const closeVideo = () => {
        setSelectedVideo(null)
    }

    return (
        <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Our Videos
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
                            onClick={() => openVideo(video.youtubeId)}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                        <svg
                                            className="w-6 h-6 text-white ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                    {video.duration}
                                </div>

                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                    YouTube
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                                    {video.title}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-5">
                    <Link href='/' className=" inline-block cursor-pointer">
                        <button className='custom_btn'>
                            Go to Home
                            <span className="__lgArrow_icon "> <FaLongArrowAltRight /></span>
                        </button>
                    </Link>
                </div>
            </div>

            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={closeVideo}
                >
                    <div
                        className="bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 bg-black">
                            <h3 className="text-lg font-semibold text-white">Now Playing</h3>
                            <button
                                onClick={closeVideo}
                                className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="aspect-video bg-black">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube video player"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default VideoSection