'use client'

import { Button } from './ui/button'
import { Rocket } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { wwwHostname } from '@/lib/constants'

export default function LaunchButton() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [url, setUrl] = useState<string | null>(null)

    useEffect(() => {
        const url = `${wwwHostname}${pathname}?${searchParams}`
        setUrl(url)
    }, [pathname, searchParams])

    return (
        <Button className="animate-pulse h-12 text-lg" asChild>
            <a href={url ?? wwwHostname} target="_blank">
                <Rocket size={20} className="mr-2" />
                <span>
                    Launch <span className="font-bold">meetoo</span>
                </span>
            </a>
        </Button>
    )
}
