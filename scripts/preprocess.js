const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'content');
const outputFile = path.join(process.cwd(), 'content/posts.json');

const filenames = fs.readdirSync(postsDirectory);

const posts = filenames.filter(filename => filename.endsWith('.md')).map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
        slug: filename.replace(/\.md$/, ''),
        ...data,
    };
});

// Ensure the data directory exists
if (!fs.existsSync(path.dirname(outputFile))) {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

// Save the processed data to a JSON file
fs.writeFileSync(outputFile, JSON.stringify(posts));

console.log(`Processed ${posts.length} posts into ${outputFile}`);