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
                <h2>Account Deletion</h2>
                <p>
                    If you would like to request for your account to be deleted, please email the address above and we will guide you through the process. Upon account deletion, your profile and all associated data will be irreversibly removed from our servers with no additional retention period.
                </p>
            </article>
        </main>
    )
}
