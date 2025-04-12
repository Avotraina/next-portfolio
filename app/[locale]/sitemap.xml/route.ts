// app/[locale]/sitemap.xml/route.ts
import { type NextRequest } from 'next/server'

export const dynamic = 'force-static' // optional for caching

export async function GET() {
  const baseUrl = 'https://avotraina-rabe.vercel.app'

  const locales = ['en', 'fr'] // tes langues supportées

  const urls = [
    '', // homepage
    '/projects',
    '/about',
    '/contact',
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locales
  .flatMap((locale) =>
    urls.map(
      (path) => `<url><loc>${baseUrl}/${locale}${path}</loc></url>`
    )
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
