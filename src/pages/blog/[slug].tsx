import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData, getAllPostSlugs, PostData } from '../../lib/posts';

import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Blog.module.scss'
import mainStyles from '@/styles/Home.module.scss'
import Highlighter from '@/components/highlighter';


interface PostProps {
    postData: PostData;
}

export default function Post({ postData }: PostProps) {
    return (
        <div className={mainStyles.main}>
            <Head>
                <title>Filipe Montanari Soccol - Blog - {String(postData.title)}</title>
            </Head>

            <Link href="/blog"> ⦦ Back </Link>
            <article className={styles.article}>
                <h2>{postData.title}</h2>
                <div>{postData.date}</div>
                <div className={styles.tags}>
                    {postData.tags?.map(tag => (
                        <Link key={tag} href={`/blog/tags/${tag}`}>
                            <Highlighter text={tag} />
                        </Link>
                    ))}
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.content || '' }} />
            </article>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params?.slug || Array.isArray(params.slug)) {
        return { notFound: true };
    }
    const postData = await getPostData(params.slug);
    return {
        props: {
            postData,
        },
    };
};