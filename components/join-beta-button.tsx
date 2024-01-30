import { appStoreUrl } from '@/lib/constants'
import Link from 'next/link'
import { Button } from './ui/button'

export default function JoinBetaButton({ secondary }: { secondary?: boolean | undefined }) {
    return (
        <Button variant={secondary ? 'secondary' : 'default'} asChild>
            <Link href={appStoreUrl} target="_blank">
                Join the Beta
            </Link>
        </Button>
    )
}
