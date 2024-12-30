import Link from 'next/link';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { instagramUrl, linkedinUrl, tiktokUrl } from '@/lib/constants';

const siteLinks = [<Link href="/privacy-policy">Privacy Policy</Link>, <Link href="/support">Support</Link>];

const socialLinks = [
    <a href={tiktokUrl} target="_blank">
        <FontAwesomeIcon icon={faTiktok} size="lg" />
    </a>,
    <a href={instagramUrl} target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
    </a>,
    <a href={linkedinUrl} target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
    </a>,
];

export default function Footer() {
    return (
        <footer className="w-full max-w-screen-xl border-t mx-auto">
            <div className="flex justify-between my-3 sm:my-2 pl-1 pr-2">
                <div className="sm:flex items-center">
                    <Button
                        variant="link"
                        className="px-3 pb-[0.6rem] max-sm:h-8 text-xl font-serif hover:text-popover-foreground hover:no-underline"
                        asChild
                    >
                        <Link href="/">meetoo</Link>
                    </Button>
                    <div className="flex">
                        {siteLinks.map((link, index) => (
                            <Button
                                key={index}
                                variant="link"
                                className="px-3 max-sm:h-8 text-muted-foreground hover:text-popover-foreground hover:no-underline"
                                asChild
                            >
                                {link}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex sm:items-center">
                    {socialLinks.map((link, index) => (
                        <Button
                            key={index}
                            variant="link"
                            className="max-sm:h-8 hover:text-popover-foreground"
                            size="icon"
                            asChild
                        >
                            {link}
                        </Button>
                    ))}
                </div>
            </div>
        </footer>
    );
}
