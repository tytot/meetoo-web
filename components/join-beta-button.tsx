import { appStoreUrl } from '@/lib/constants'
import Link from 'next/link'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStore } from '@fortawesome/free-brands-svg-icons'

export default function JoinBetaButton({ secondary }: { secondary?: boolean | undefined }) {
    return (
        <Button variant={secondary ? 'secondary' : 'default'} asChild>
            <Link href={appStoreUrl} target="_blank">
                <FontAwesomeIcon icon={faAppStore} size="lg" className="mr-2" />
                Join the Beta
            </Link>
        </Button>
    )
}
