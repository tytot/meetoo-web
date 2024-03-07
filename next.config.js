/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tools.applemediaservices.com',
                pathname: '/api/badges/download-on-the-app-store/**',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '*',
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN',
            },
            {
                source: '*',
                key: 'X-Content-Type-Options',
                value: 'nosniff',
            },
            {
                source: '*',
                key: 'Referrer-Policy',
                value: 'no-referrer-when-downgrade',
            },
        ]
    },
}

module.exports = nextConfig
