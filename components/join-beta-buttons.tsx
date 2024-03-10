import { appStoreUrl, playStoreUrl } from '@/lib/constants'
import Link from 'next/link'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faAppStore, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

export default function JoinBetaButtons({ secondary }: { secondary?: boolean | undefined }) {
    return (
        <div className="flex space-x-6">
            <div className="flex flex-col items-center">
                <span className="font-bold text-lg leading-tight mb-1">
                    <FontAwesomeIcon icon={faApple} className="mr-2" />
                    iOS
                </span>
                <Button variant={secondary ? 'secondary' : 'default'} asChild>
                    <Link href={appStoreUrl} target="_blank">
                        <FontAwesomeIcon icon={faAppStore} size="lg" className="mr-2" />
                        Join the Beta
                    </Link>
                </Button>
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
