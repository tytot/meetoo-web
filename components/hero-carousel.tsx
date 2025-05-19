'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Skeleton } from './ui/skeleton';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from '../styles/hero-carousel.module.css';

import friendImageDark from '../public/images/dark/friend.png';
import meetingImageDark from '../public/images/dark/meeting.png';
import schedulerImageDark from '../public/images/dark/scheduler.png';
import timelineImageDark from '../public/images/dark/timeline.png';
import friendImageLight from '../public/images/light/friend.png';
import meetingImageLight from '../public/images/light/meeting.png';
import schedulerImageLight from '../public/images/light/scheduler.png';
import timelineImageLight from '../public/images/light/timeline.png';

const imageAlts = [
    'A screenshot of a friend page in the meetoo app',
    'A screenshot of the scheduler screen in the meetoo app',
    'A screenshot of the meeting timeline view in the meetoo app',
    'A screenshot of a meeting page in the meetoo app',
];

export default function HeroCarousel() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const images =
        resolvedTheme === 'dark'
            ? [friendImageDark, schedulerImageDark, timelineImageDark, meetingImageDark]
            : [friendImageLight, schedulerImageLight, timelineImageLight, meetingImageLight];

    return (
        <Carousel>
            <CarouselContent className={styles.content}>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="md:h-[calc(100dvh-12rem)] md:min-h-96 max-md:w-[calc(100dvw-8rem)] max-md:max-w-72 my-8 md:my-16 aspect-[685/1366]">
                            {mounted ? (
                                <Image src={image} alt={imageAlts[index]} placeholder="blur" priority={true} />
                            ) : (
                                <Skeleton className="h-full rounded-3xl" />
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
