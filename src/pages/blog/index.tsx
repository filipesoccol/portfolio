import Link from 'next/link';
import { getAllPosts, PostData } from '@/lib/posts';
import type { GetStaticProps } from 'next';

import styles from '@/styles/Blog.module.scss'
import mainStyles from '@/styles/Home.module.scss'
import Highlighter from '@/components/highlighter';
import PostCard from '@/components/postCard';
import Head from 'next/head';

interface BlogProps {
    allPosts: PostData[];
}

export default function Blog({ allPosts }: BlogProps) {
    return (
        <div className={mainStyles.main}>
            <Head>
                <title>Filipe Montanari Soccol - Blog</title>
            </Head>
            <Link href="/"> ⦦ Back </Link>
            <div className={styles.article}>
                <h1>Blog</h1>
                <div className={styles.tags}>
                    {Array.from(new Set(allPosts.flatMap(post => post.tags || []))).map(tag => (
                        <Link key={tag} href={`/blog/tags/${tag}`}>
                            <Highlighter text={tag} />
                        </Link>
                    ))}
                </div>
                <div className={styles.postList}>
                    {allPosts.map((post: PostData) => (
                        <PostCard key={post.slug} post={post} showTags={false} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const allPosts = getAllPosts() as PostData[];
    return {
        props: {
            allPosts,
        },
    };
};