import DownloadButtons from '@/components/download-buttons'
import HeroCarousel from '@/components/hero-carousel'
import { copy, headline, keywords } from '@/lib/constants'
import { faApple, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const metadata = {
    keywords: keywords,
}

export default function Home() {
    return (
        <main>
            <section>
                <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
                    <div className="md:flex flex-col justify-center pl-8 md:pl-16 max-md:pr-8 pt-8 md:pb-8">
                        <div className="md:pr-4">
                            <h1 className="text-primary">{headline}</h1>
                            <p className="mb-8 text-lg lg:text-xl font-light leading-tight">
                                <span className="text-primary font-bold">meetoo</span>
                                {copy.slice(6)}
                            </p>
                            <p className="mb-8 text-muted-foreground text-md lg:text-lg font-medium">
                                Link your <FontAwesomeIcon icon={faGoogle} className="text-muted-foreground" /> Google,{' '}
                                <FontAwesomeIcon icon={faApple} className="text-muted-foreground" /> iCloud, and{' '}
                                <FontAwesomeIcon icon={faMicrosoft} className="text-muted-foreground" /> Outlook
                                calendars to show when you&apos;re free or busy—no need to fill in your availability
                                manually.
                            </p>
                        </div>
                        <span className="flex flex-wrap gap-3 max-md:justify-center">
                            <DownloadButtons />
                        </span>
                    </div>
                    <div className="px-16 md:pr-24 mx-auto max-w-full overflow-hidden">
                        <HeroCarousel />
                    </div>
                </div>
            </section>
        </main>
    )
}
