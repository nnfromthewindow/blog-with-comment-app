import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-10 p-5 bg-slate-400 bg-opacity-50 rounded-md hover:scale-105 transition-transform duration-150 shadow-md">
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="text-lg leading-6 font-bold text-white"
            >
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
            <div className="text-gray-50">
              <time>{distanceToNow(new Date(post.date))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>Todavia no se posteo nada :/</p>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return {
    props: { allPosts },
  };
}
