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
