import DownloadButtons from '@/components/download-buttons';
import LaunchButton from '@/components/launch-button';
import Logo from '@/components/logo';
import { appStoreId, defaultMetadataTitle, usernameRegex, uuidRegex } from '@/lib/constants';
import { supabase } from '@/lib/supabase';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
    const pathname = headers().get('x-pathname')!;
    const urlString = `https://meetoo.app${pathname}`;

    let title = defaultMetadataTitle;
    let description = undefined;

    if (URL.canParse(urlString)) {
        const url = new URL(urlString);
        if (url.pathname.startsWith('/profile/')) {
            const slug = url.pathname.slice(9);
            if (uuidRegex.test(slug)) {
                const profile = await tryGetProfileById(slug);
                if (profile) {
                    title = getTitleForProfile(profile);
                }
            } else if (usernameRegex.test(slug)) {
                const profile = await tryGetProfileByUsername(slug);
                if (profile) {
                    title = getTitleForProfile(profile);
                }
            }
        } else if (url.pathname.startsWith('/meeting/') || url.pathname.startsWith('/meetup/')) {
            const slug = url.pathname.slice(9);
            if (uuidRegex.test(slug)) {
                const meeting = await tryGetMeetingById(slug);
                if (meeting) {
                    title = getTitleForMeeting(meeting);
                    description = meeting.description;
                }
            }
        }
    }

    return {
        title: {
            absolute: title,
        },
        description: description,
        itunes: {
            appId: appStoreId,
            appArgument: urlString,
        },
        appLinks: {
            ios: {
                url: urlString,
                app_store_id: appStoreId,
                app_name: 'meetoo',
            },
            android: {
                url: urlString,
                package: 'in.tylerl.meetoo',
                app_name: 'meetoo',
            },
        },
    };
}

export default function Redirect() {
    return (
        <main className="h-full">
            <div className="flex px-12 py-8 h-full overflow-auto">
                <div className="flex flex-col m-auto items-center text-center">
                    <div className="mb-6 p-6 rounded-[2rem] bg-secondary">
                        <Logo className="h-20 w-20 fill-primary" />
                    </div>
                    <h1 className="text-primary text-3xl leading-8 mb-5">Open in the meetoo app</h1>
                    <div className="mb-12">
                        <LaunchButton />
                    </div>
                    <p className="text-xl leading-tight mb-4">
                        If you don&apos;t have the <span className="text-primary font-bold">meetoo</span> app,
                    </p>
                    <div className="mb-12">
                        <DownloadButtons />
                    </div>
                </div>
            </div>
        </main>
    );
}

async function tryGetProfileById(profileId: string) {
    const { data } = await supabase
        .from('profile')
        .select('first_name,last_name,username')
        .eq('id', profileId)
        .single();
    return data;
}

async function tryGetProfileByUsername(username: string) {
    const { data } = await supabase
        .from('profile')
        .select('first_name,last_name,username')
        .eq('username', username)
        .single();
    return data;
}

function getTitleForProfile(profile: { first_name: string; last_name: string; username: string }) {
    return `${profile.first_name} ${profile.last_name} (@${profile.username}) | meetoo`;
}

async function tryGetMeetingById(meetingId: string) {
    const { data } = await supabase.from('meeting').select('title,emoji,description').eq('id', meetingId).single();
    return data;
}

function getTitleForMeeting(meeting: { title: string; emoji: string }) {
    return `${meeting.emoji} ${meeting.title} | meetoo`;
}
