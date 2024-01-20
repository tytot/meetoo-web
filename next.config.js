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
}

module.exports = nextConfig
