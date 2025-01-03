import Link from 'next/link';
import Logo from './logo';
import ModeToggle from './mode-toggle';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { supportEmail } from '@/lib/constants';

const links = [
    // eslint-disable-next-line react/jsx-key
    <Link href="/">Home</Link>,
    // eslint-disable-next-line react/jsx-key
    <a href={`mailto:${supportEmail}`} target="_blank">
        Contact
    </a>,
    // eslint-disable-next-line react/jsx-key
    <Link href="/download">Download</Link>,
];

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
                    <div className="hidden sm:flex">
                        {links.map((link, index) => (
                            <Button key={index} variant="ghost" asChild>
                                {link}
                            </Button>
                        ))}
                    </div>
                    <ModeToggle />
                    <div className="block sm:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-[1.2rem] w-[1.2rem]" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {links.map((link, index) => (
                                    <DropdownMenuItem key={index}>{link}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
}
