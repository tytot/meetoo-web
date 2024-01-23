'use client'

import AppStoreButton from '@/components/app-store-button'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { copy, headline } from '@/lib/constants'
import { faApple, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <main>
            <section className="md:h-dvh">
                <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
                    <div className="md:flex flex-col justify-center pl-8 md:pl-16 max-md:pr-8 pt-24 md:pb-8">
                        <div className="md:pr-4">
                            <h1 className="mb-4 text-4xl lg:text-5xl font-extrabold text-primary">{headline}</h1>
                            <p className="mb-8 text-lg lg:text-xl font-light leading-tight">
                                <span className="text-primary font-bold">meetoo</span>
                                {copy.slice(6)}
                            </p>
                            <p className="mb-6 text-muted-foreground text-md lg:text-lg font-medium !leading-snug">
                                Link your <FontAwesomeIcon icon={faGoogle} className="text-muted-foreground" /> Google,{' '}
                                <FontAwesomeIcon icon={faApple} className="text-muted-foreground" /> iCloud, and{' '}
                                <FontAwesomeIcon icon={faMicrosoft} className="text-muted-foreground" /> Outlook
                                calendars to show when you&apos;re free or busy—no need to fill in your availability
                                manually.
                            </p>
                        </div>
                        <span className="flex flex-wrap gap-3 max-md:justify-center">
                            <AppStoreButton />
                            <div className="text-center">
                                <Button disabled>
                                    <ExternalLink size={20} className="mr-2" />
                                    Open in Browser
                                </Button>
                                <div className="mt-1 text-sm font-semibold">Coming soon!</div>
                            </div>
                        </span>
                    </div>
                    <div className="px-16 md:pr-24 md:pt-16 mx-auto max-w-full overflow-hidden">
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
                                                <Image
                                                    src={`/images/${resolvedTheme}/${image}`}
                                                    alt={alt}
                                                    width={1370}
                                                    height={2732}
                                                />
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
                    </div>
                </div>
            </section>
        </main>
    )
}
