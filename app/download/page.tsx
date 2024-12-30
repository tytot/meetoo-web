import DownloadButtons from '@/components/download-buttons';
import Logo from '@/components/logo';
import appStoreQRCode from '@/app/images/app-store-qrcode.svg';
import Image from 'next/image';
import { appStoreUrl } from '@/lib/constants';

export const metadata = {
    title: 'Download',
};

export default function Download() {
    return (
        <main className="h-full">
            <div className="flex px-12 py-8 h-full overflow-auto">
                <div className="flex flex-col m-auto items-center text-center">
                    <div className="md:hidden mb-12 p-6 rounded-[2rem] bg-secondary">
                        <Logo className="h-20 w-20 fill-primary" />
                    </div>
                    <h1 className="text-primary mb-6">Download meetoo!</h1>
                    <div className="max-md:hidden flex flex-col items-center">
                        <div className="rounded-3xl overflow-hidden mb-4">
                            <a href={appStoreUrl} target="_blank">
                                <Image src={appStoreQRCode} alt="App Store QR code" height={180} width={180} />
                            </a>
                        </div>
                        <p className="text-2xl text-muted-foreground font-medium leading-tight mb-12">
                            Scan this QR code with your phone to download the{' '}
                            <span className="text-primary font-bold">meetoo</span> app.
                        </p>
                    </div>
                    <div className="mb-12">
                        <DownloadButtons />
                    </div>
                </div>
            </div>
        </main>
    );
}
