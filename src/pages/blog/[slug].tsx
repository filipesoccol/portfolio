import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData, getAllPostSlugs } from '../../lib/posts';

interface PostData {
    title: string;
    contentHtml: string;
}

interface PostProps {
    postData: PostData;
}

export default function Post({ postData }: PostProps) {
    return (
        <article>
            <h1>{postData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
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