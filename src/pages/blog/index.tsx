import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { GetStaticProps } from 'next';

interface Post {
    slug: string;
    title: string;
}

interface BlogProps {
    allPosts: Post[];
}

export default function Blog({ allPosts }: BlogProps) {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {allPosts.map((post: Post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const allPosts = getAllPosts().map((post: { slug: string }) => ({
        slug: post.slug,
        title: post.slug, // replace with actual title if available
    }));
    return {
        props: {
            allPosts,
        },
    };
};