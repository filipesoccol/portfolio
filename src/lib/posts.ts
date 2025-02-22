import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface PostData {
    slug: string;
    contentHtml?: string;
    [key: string]: any;
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
    const { data, content } = matter(fileContents);

    // Use remark to convert Markdown into HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
        slug,
        contentHtml,
        ...data,
    };
}

export const getAllPostSlugs = (): { params: { slug: string } }[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => ({
        params: {
            slug: fileName.replace(/\.md$/, ''),
        },
    }));
};

export const getAllPosts = (): PostData[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            ...data,
        };
    });
};