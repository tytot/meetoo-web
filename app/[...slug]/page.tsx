import LaunchButton from '@/components/launch-button'
import JoinBetaButtons from '@/components/join-beta-buttons'
import Logo from '@/components/logo'
import { appStoreId, uuidRegex } from '@/lib/constants'
import { Metadata } from 'next'
import { headers } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
    const pathname = headers().get('x-pathname')!
    const url = `https://meetoo.app${pathname}`

    let profileUsername
    if (pathname.startsWith('/profile/') && !uuidRegex.test(pathname.slice(9))) {
        profileUsername = pathname.slice(9)
    }

    return {
        title: {
            absolute: profileUsername ? `@${profileUsername}'s Profile | meetoo` : 'Open in the meetoo app',
        },
        itunes: {
            appId: appStoreId,
            appArgument: url,
        },
        appLinks: {
            ios: {
                url,
                app_store_id: appStoreId,
                app_name: 'meetoo',
            },
            android: {
                url,
                package: 'in.tylerl.meetoo',
                app_name: 'meetoo',
            },
        },
    }
}

export default function Redirect() {
    return (
        <main className="h-dvh pt-16">
            <div className="flex px-12 py-8 h-full overflow-auto">
                <div className="flex flex-col m-auto items-center text-center">
                    <div className="mb-6 p-6 rounded-[2rem] bg-secondary">
                        <Logo className="h-20 w-20 fill-primary" />
                    </div>
                    <h1 className="text-primary">Open in the meetoo app</h1>
                    <div className="mb-12">
                        <LaunchButton />
                    </div>
                    <p className="text-xl lg:text-2xl leading-tight mb-4">
                        If you don&apos;t have the <span className="text-primary font-bold">meetoo</span> app,
                    </p>
                    <div className="mb-12">
                        <JoinBetaButtons secondary />
                    </div>
                </div>
            </div>
        </main>
    )
}
