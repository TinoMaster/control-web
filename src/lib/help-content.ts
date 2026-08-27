import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface HelpArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  comingSoon: boolean;
  content: string;
}

export interface HelpCategory {
  id: string;
  label: string;
}

export const HELP_CATEGORIES: HelpCategory[] = [
  { id: "primeros-pasos", label: "Primeros pasos" },
  { id: "ventas", label: "Ventas" },
  { id: "empleados", label: "Empleados" },
  { id: "inventario", label: "Inventario" },
  { id: "configuracion", label: "Configuración" },
];

const CONTENT_DIR = path.join(process.cwd(), "content", "help-center");

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"));
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

export async function getArticleBySlug(
  slug: string,
): Promise<HelpArticle | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    category: data.category ?? "",
    readTime: data.readTime ?? "",
    comingSoon: data.comingSoon ?? false,
    content: htmlContent,
  };
}

export async function getAllArticles(): Promise<HelpArticle[]> {
  const files = getMarkdownFiles();
  const articles = await Promise.all(
    files.map((f) => getArticleBySlug(slugFromFilename(f))),
  );
  return articles.filter((a): a is HelpArticle => a !== null);
}

export async function getArticlesByCategory(
  category: string,
): Promise<HelpArticle[]> {
  const all = await getAllArticles();
  return all.filter((a) => a.category === category);
}
