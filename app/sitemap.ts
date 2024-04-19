import { publicPaths } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const date = new Date()
    const lastModified = new Date(date.getFullYear(), date.getMonth(), 1)
    return publicPaths.map(({ path, priority }) => ({
        url: `https://meetoo.app${path}`,
        lastModified,
        changeFrequency: 'monthly',
        priority,
    }))
}
