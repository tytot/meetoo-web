import AppStoreButton from '@/components/app-store-button'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Redirect({ params }: { params: { slug: string[] } }) {
    return (
        <main className="h-screen pt-16">
            <section className="flex px-12 py-8 h-full overflow-auto">
                <div className="flex flex-col m-auto items-center text-center">
                    <div className="mb-6 p-6 rounded-[2rem] bg-secondary">
                        <Logo className="h-20 w-20 fill-primary" />
                    </div>
                    <h1 className="mb-4 text-4xl lg:text-5xl font-bold text-primary">Open in the meetoo app</h1>
                    <Button className="mb-12 animate-pulse" asChild>
                        <Link href={`https://meetoo.app/${params.slug.join('/')}`} target="_blank">
                            <span>
                                Launch <span className="font-bold">meetoo</span>
                            </span>
                        </Link>
                    </Button>
                    <p className="mb-2 text-xl lg:text-2xl leading-tight">
                        If you don&apos;t have the <span className="text-primary font-bold">meetoo</span> app,
                    </p>
                    <div className="mb-12">
                        <AppStoreButton />
                    </div>
                </div>
            </section>
        </main>
    )
}
