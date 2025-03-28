import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { rehypeImageCaption } from './imageCaption';

export interface PostData {
    slug: string;
    content?: string;
    date: string;
    tags: string[];
    title: string;
    image: string;
}

export interface PostSlug {
    params: {
        slug: string;
    };
}

const postsDirectory = path.join(process.cwd(), 'content');

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content: contentRaw } = matter(fileContents);

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeImageCaption, { className: 'image-caption' }) 
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(contentRaw);
    const content = processedContent.toString();

    // Combine the data with the slug and content
    return {
        slug,
        content,
        date: data.date,
        tags: data.tags,
        title: data.title,
        image: data.image,
    };
}

export const getAllPostSlugs = (): { params: { slug: string } }[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.filter(fileName => fileName.endsWith('.md')).map(fileName => ({
        params: {
            slug: fileName.replace(/\.md$/, ''),
        },
    }));
};

export const getAllPosts = (): PostData[] => {
    const postsFilePath = path.join(process.cwd(), 'content/posts.json');
    const posts = JSON.parse(fs.readFileSync(postsFilePath, 'utf8'));

    return posts.map((post: any) => ({
        slug: post.slug || '',
        date: post.date,
        title: post.title || '',
        tags: post.tags || [],
        image: post.image || '',
    }));
};