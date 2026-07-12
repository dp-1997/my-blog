import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const [essays, notes] = await Promise.all([
    getCollection('essays'),
    getCollection('notes'),
  ]);

  const items = [
    ...essays.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/essays/${post.id}/`,
    })),
    ...notes.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/notes/${post.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Anyone Can Cook',
    description: 'Essays and notes by Damian Pickett on product, marketing, storytelling, and making things.',
    site: context.site,
    items,
  });
}
