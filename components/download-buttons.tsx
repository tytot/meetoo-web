import { appStoreUrl, googlePlayUrl } from '@/lib/constants'
import appStoreBadge from '@/app/images/app-store-badge.svg'
import googlePlayBadge from '@/app/images/google-play-badge.png'
import Image from 'next/image'

export default function DownloadButtons() {
    return (
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
            <a href={appStoreUrl} target="_blank">
                <Image src={appStoreBadge} alt="Download on the App Store badge" height={48} />
            </a>
            <a href={googlePlayUrl} target="_blank">
                <Image src={googlePlayBadge} alt="Get it on Google Play badge" height={48} />
            </a>
        </div>
    )
}
