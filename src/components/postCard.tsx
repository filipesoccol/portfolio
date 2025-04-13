import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Blog.module.scss';
import { PostData } from '@/lib/posts';
import Highlighter from '@/components/highlighter';

interface PostCardProps {
    post: PostData;
    showTags?: boolean;
}

export default function PostCard({ post, showTags = true }: PostCardProps) {

    return (
        <div className={styles.postCard}>
            <Image
                className={styles.postImage}
                src={post.image}
                alt={"Image representing the post: " + post.title}
                width={200}
                height={150}
                objectFit="cover"
            />
            <Link href={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
                <div className={styles.date}>{post.date}</div>
            </Link>
            {showTags && post.tags && (
                <div className={styles.tags}>
                    {post.tags.map(tag => (
                        <Link key={tag} href={`/blog/tags/${tag}`}>
                            <Highlighter text={tag} className='mx-2 px-2' />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
