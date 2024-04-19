import JoinBetaButtons from '@/components/join-beta-buttons'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { appStoreId } from '@/lib/constants'
import { Rocket } from 'lucide-react'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
    const pathname = headers().get('pathname')!
    const url = `https://meetoo.app${pathname}`
    return {
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

export default function Redirect({ params }: { params: { slug: string[] } }) {
    return (
        <main className="h-dvh pt-16">
            <div className="flex px-12 py-8 h-full overflow-auto">
                <div className="flex flex-col m-auto items-center text-center">
                    <div className="mb-6 p-6 rounded-[2rem] bg-secondary">
                        <Logo className="h-20 w-20 fill-primary" />
                    </div>
                    <h1 className="text-primary">Open in the meetoo app</h1>
                    <Button className="mb-12 animate-pulse" asChild>
                        <Link href={`https://www.meetoo.app/${params.slug.join('/')}`} target="_blank">
                            <Rocket size={20} className="mr-2" />
                            <span>
                                Launch <span className="font-bold">meetoo</span>
                            </span>
                        </Link>
                    </Button>

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
