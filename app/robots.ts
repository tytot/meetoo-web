import { publicPaths } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: '/',
            allow: publicPaths.map(({ path }) => `${path}$`),
        },
        sitemap: 'https://meetoo.app/sitemap.xml',
    }
}
