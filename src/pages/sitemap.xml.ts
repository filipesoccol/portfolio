import { GetServerSideProps } from 'next';
import { getAllPostSlugs } from '../lib/posts';

const Sitemap = () => {
    return null;
};

export default Sitemap;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const baseUrl = 'https://filipe.contact';
    const posts = getAllPostSlugs();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>${baseUrl}/blog/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>
        ${posts
            .map(({ params }: { params: { slug: string } }) => {
                return `
            <url>
                <loc>${baseUrl}/blog/${params.slug}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
        `;
            })
            .join('')}
    </urlset>
`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};