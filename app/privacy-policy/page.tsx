export default function PrivacyPolicy() {
    return (
        <main className="pt-16">
            <article className="mx-auto p-8 max-w-screen-md">
                <h1>Privacy Policy</h1>
                <p className="italic text-muted-foreground">Last updated: March 1, 2024</p>
                <p>This Privacy Policy describes how meetoo access, uses, stores, and shares your data.</p>
                <h2>Personally Identifiable Information</h2>
                <p>
                    When creating a meetoo profile, you are asked for a username and password, your name, and your phone
                    number. Your username and name are stored in a remote database and may be shared with other users of
                    the app. Your password is irreversibly encrypted by an authentication provider and is never shared
                    with anyone. Your phone number is only used to verify your identity. It is stored in a remote
                    database and is never shared with anyone.
                </p>
                <h2>App-Specific Content</h2>
                <p>
                    Content that you create within meetoo may be stored in a remote database. App-specific content is
                    only shared with users who need to see it. It is not accessible by other users. For example, meeting
                    information is only shared with other meeting participants, and a friend request is only shared with
                    the user whom you request.
                </p>
                <h2>Data from Third-Parties</h2>
                <h3>Google Data</h3>
                <p>
                    If you want to connect your Google Calendar, meetoo may request access to the following Google
                    account data:
                </p>
                <ul>
                    <li>Your name, email, and profile picture</li>
                    <li>The names and details of your calendars</li>
                    <li>The events on the calendars that you own</li>
                </ul>
                <p>meetoo accesses this data using an official Google APIs package.</p>
                <p>
                    Your name, email, and profile picture are only used to verify your identity and are not stored or
                    shared anywhere.
                </p>
                <p>
                    The names and details of your calendars are used for customization purposes. They are only stored
                    locally on your device and are never shared with anyone.
                </p>
                <p>
                    The events on the calendars that you own are used to display your availability to other users. They
                    are stripped of all information except for the event time and transparency before being stored in a
                    remote database. They are only shared with your friends. Adding a friend is treated as consent for
                    your sharing your availability with them.
                </p>
                <h4 id="limited-use-disclosure">Limited Use</h4>
                <p>
                    meetoo's use and transfer to any other app of information received from Google APIs will adhere to
                    the{' '}
                    <a
                        href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                        target="_blank"
                    >
                        Google API Services User Data Policy
                    </a>
                    , including the Limited Use requirements.
                </p>
                <h2>Sensitive Permissions</h2>
                <h3>Photo Library</h3>
                <p>
                    meetoo may request access to your photo library to send images in chats. Chat images are stored in a
                    remote storage bucket and are only shared with other participants in the chat. Sending an image is
                    treated as consent for said image to be stored remotely.
                </p>
                <h3>Contacts</h3>
                <p>
                    meetoo may request access to your contacts to suggest profiles who you might know. Contacts are only
                    processed during app runtime and are not stored or shared in any manner.
                </p>
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, you can contact us:</p>
                <ul>
                    <li>
                        By email:{' '}
                        <a href="mailto:privacy@meetoo.app" target="_blank">
                            privacy@meetoo.app
                        </a>
                    </li>
                </ul>
            </article>
        </main>
    )
}
