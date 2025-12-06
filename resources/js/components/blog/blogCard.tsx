import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import ImageButton from '../ImageBtn';
import { BlogPost } from '@/data/blog';

type BlogCarouselCardProps = {
    blogs: BlogPost[];
    title: string;
};

export default function BlogCard({ blogs, title }: BlogCarouselCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numVisible, setNumVisible] = useState(2);

    // Swipe state
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) nextSlide();
        if (touchEndX.current - touchStartX.current > 50) prevSlide();
    };

    // Responsive layout
    useEffect(() => {
        let timer: NodeJS.Timeout;
        const updateVisible = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if (window.innerWidth < 640) setNumVisible(1);
                else if (window.innerWidth < 900) setNumVisible(2);
                else setNumVisible(3);
            }, 100);
        };
        window.addEventListener('resize', updateVisible);
        updateVisible(); // initial
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    // const nextSlide = () => {
    //   if (currentIndex < blogs.length - numVisible) {
    //     setCurrentIndex((prev) => prev + 1);
    //   }
    // };

    // const prevSlide = () => {
    //   if (currentIndex > 0) {
    //     setCurrentIndex((prev) => prev - 1);
    //   }
    // };
    const nextSlide = () => {
        if (currentIndex >= blogs.length - numVisible) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handleBlog = (id: string) => {
        window.location.assign(`/blogs/${id}`);
    };

    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${currentIndex * (100 / numVisible)}%)`;
        }
    }, [currentIndex, numVisible]);

    return (
        <div className="relative mx-auto w-full">
            <div className="flex flex-col gap-10 overflow-hidden">
                <div className="flex flex-row justify-between">
                    <div>
                        <h1 className="text-xl font-bold md:text-3xl">
                            {title}
                        </h1>
                    </div>
                    <div className="flex gap-5">
                        {/* Controls (hidden on mobile) */}
                        <ImageButton
                            icon="left"
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="bg-primary/30 p-2 text-foreground disabled:opacity-30"
                        >
                            <span className="sr-only">previous slide</span>
                        </ImageButton>
                        <ImageButton
                            icon="right"
                            onClick={nextSlide}
                            disabled={currentIndex >= blogs.length - numVisible}
                            className="bg-primary/30 p-2 text-foreground disabled:opacity-30"
                        >
                            <span className="sr-only">next slide</span>
                        </ImageButton>
                    </div>
                </div>

                <div
                    ref={trackRef}
                    className="flex transition-transform duration-500"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {blogs.map((b) => (
                        <div
                            key={b.id}
                            className="flex-shrink-0 p-2"
                            style={{ width: `${100 / numVisible}%` }}
                            onClick={() => handleBlog(b.id)}
                        >
                            <div className="flex h-full cursor-pointer flex-col rounded-2xl border border-ring/30 pb-3 duration-400 hover:-translate-y-2">
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={b.PostImage}
                                        alt={b.title}
                                        loading="lazy"
                                        className="h-full w-full rounded-tl-2xl rounded-tr-2xl object-cover"
                                    />
                                    <p className="bg-primary text-highlight1-foreground absolute top-2 left-2 rounded-full px-2 py-1 text-sm font-semibold">
                                        {b.category}
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="flex flex-grow flex-col justify-between px-3">
                                    <div>
                                        {/* Meta */}
                                        <div className="my-3 flex text-sm text-foreground/50">
                                            <FaCalendarAlt className="my-auto mr-2 block" />
                                            <span className="mr-5">
                                                {b.date}
                                            </span>
                                            <FaUser className="my-auto mr-2 block" />
                                            <span>{b.author.name}</span>
                                        </div>

                                        {/* Title */}
                                        <h1 className="line-clamp-2 text-lg font-bold text-foreground md:text-2xl">
                                            {b.title}
                                        </h1>
                                    </div>

                                    {/* Description always at bottom */}
                                    <p
                                        className="mt-2 line-clamp-3 text-sm text-foreground/50"
                                        dangerouslySetInnerHTML={{
                                            __html: b.description,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
