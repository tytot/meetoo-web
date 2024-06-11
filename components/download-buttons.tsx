import { appStoreUrl, playStoreUrl } from '@/lib/constants'
import Link from 'next/link'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import appStoreBadge from '@/app/images/app-store-badge.svg'
import Image from 'next/image'

export default function DownloadButtons({ secondary }: { secondary?: boolean | undefined }) {
    return (
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            <div className="flex flex-col items-center">
                <span className="font-bold text-lg leading-tight mb-1">
                    <FontAwesomeIcon icon={faApple} className="mr-2" />
                    iOS
                </span>
                <Link href={appStoreUrl} target="_blank">
                    <Image src={appStoreBadge} alt="Download on the App Store badge" />
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-bold text-lg leading-tight mb-1">
                    <FontAwesomeIcon icon={faAndroid} className="mr-2" />
                    Android
                </span>
                <Button variant={secondary ? 'secondary' : 'default'} asChild>
                    <Link href={playStoreUrl} target="_blank">
                        <FontAwesomeIcon icon={faGooglePlay} size="lg" className="mr-2" />
                        Join the Beta
                    </Link>
                </Button>
            </div>
        </div>
    )
}
