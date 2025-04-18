import Link from 'next/link';
import { getAllPosts, PostData } from '@/lib/posts';
import type { GetStaticProps, GetStaticPaths } from 'next';

import styles from '@/styles/Blog.module.scss'
import mainStyles from '@/styles/Home.module.scss'
import PostCard from '@/components/postCard';

interface TagPageProps {
    posts: PostData[];
    tag: string;
}

export default function TagPage({ posts, tag }: TagPageProps) {
    return (
        <div className={mainStyles.main}>
            <head>
                <title>Posts tagged with #{tag} | Filipe Soccol's Blog</title>
                <meta name="description" content={`Filipe Montanari Soccol - Blog posts tagged with ${tag}`} />
                <meta property="og:title" content={`Filipe Montanari Soccol - Posts tagged with #${tag}`} />
                <meta property="og:description" content={`Explore blog posts tagged with ${tag}`} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={`Filipe Montanari Soccol - Posts tagged with #${tag}`} />
                <meta name="twitter:description" content={`Explore blog posts tagged with ${tag}`} />
            </head>
            <Link href="/blog"> ⦦ Back to Blog </Link>
            <div className={styles.article}>
                <h2>Posts tagged with #{tag}</h2>
                <div className={styles.postList}>
                    {posts.map((post: PostData) => (
                        <PostCard key={post.slug} post={post} showTags={false} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();
    const tags = Array.from(new Set(posts.flatMap(post => post.tags || [])));

    const paths = tags.map(tag => ({
        params: { tag }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<TagPageProps> = async ({ params }) => {
    const tag = params?.tag as string;
    const allPosts = getAllPosts();
    const posts = allPosts.filter(post => post.tags?.includes(tag));

    return {
        props: {
            posts,
            tag
        },
    };
};
