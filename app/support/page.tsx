import { supportEmail } from '@/lib/constants'

export const metadata = {
    title: 'Support',
}

export default function Support() {
    return (
        <main className="pt-16">
            <article className="mx-auto p-8 max-w-screen-md">
                <h1 className="text-3xl">Need Help?</h1>
                <p>
                    Please email{' '}
                    <a href={`mailto:${supportEmail}`} target="_blank">
                        {supportEmail}
                    </a>{' '}
                    with any support inquiries.
                </p>
            </article>
        </main>
    )
}
