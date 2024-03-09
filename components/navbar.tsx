import Link from 'next/link'
import Logo from './logo'
import ModeToggle from './mode-toggle'
import { Button } from './ui/button'

export default function Navbar() {
    return (
        <nav className="fixed w-full z-20 bg-background/60 backdrop-blur border-b">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
                <Link href="/">
                    <div className="p-2 rounded-md bg-secondary">
                        <Logo className="h-6 w-6 fill-primary" />
                    </div>
                </Link>
                <div className="flex items-center space-x-3">
                    <Button variant="outline" asChild>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}
