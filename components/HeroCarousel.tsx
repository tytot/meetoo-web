'use client'

import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Skeleton } from './ui/skeleton'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function HeroCarousel() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Carousel>
            <CarouselContent>
                {[
                    ['friend.png', 'A screenshot of a friend page in the meetoo app'],
                    ['scheduler.png', 'A screenshot of the scheduler screen in the meetoo app'],
                    ['timeline.png', 'A screenshot of the meeting timeline view in the meetoo app'],
                    ['meeting.png', 'A screenshot of a meeting page in the meetoo app'],
                ].map(([image, alt], index) => (
                    <CarouselItem key={index}>
                        <div className="md:h-[calc(100dvh-12rem)] md:min-h-96 max-md:w-[calc(100dvw-8rem)] max-md:max-w-72 my-8 md:my-16 aspect-[685/1366]">
                            {mounted ? (
                                <Image src={`/images/${resolvedTheme}/${image}`} alt={alt} width={1370} height={2732} />
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
    )
}
