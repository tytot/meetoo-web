import { appStoreUrl } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function AppStoreButton() {
    return (
        <Link href={appStoreUrl} target="_blank">
            <Image
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                alt="Download on the App Store"
                width={120}
                height={40}
            />
        </Link>
    )
}
