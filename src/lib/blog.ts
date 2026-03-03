import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type BlogPost = {
  metadata: {
    title: string;
    date: string;
    summary: string;
    readingTime?: number;
  };
  slug: string;
  source: string;
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s+/).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.max(1, Math.ceil(minutes));
}

function getMDXData(dir: string): BlogPost[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    const metadata = data as BlogPost["metadata"];
    if (!metadata.readingTime) {
      metadata.readingTime = calculateReadingTime(content);
    }

    return {
      metadata,
      slug,
      source: content,
    };
  });
}

export async function getBlogPosts(locale: string = "en"): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), "content", "blog", locale);
  return getMDXData(blogDir);
}

export async function getPost(
  slug: string,
  locale: string = "en",
): Promise<BlogPost | null> {
  const blogDir = path.join(process.cwd(), "content", "blog", locale);
  const posts = getMDXData(blogDir);
  return posts.find((post) => post.slug === slug) || null;
}

export async function getAvailableLocales(slug: string, locales: string[]) {
  const availableLocales: string[] = [];

  for (const locale of locales) {
    const blogDir = path.join(process.cwd(), "content", "blog", locale);
    const mdxFiles = getMDXFiles(blogDir);
    if (mdxFiles.some((file) => path.basename(file, ".mdx") === slug)) {
      availableLocales.push(locale);
    }
  }

  return availableLocales;
}
