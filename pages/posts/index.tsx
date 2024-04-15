import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import PostsContainer from "../../components/postsContainer";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PostsContainer>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-10 p-5 bg-slate-400 bg-opacity-50 rounded-md hover:scale-105 transition-transform duration-150 shadow-md max-w-2xl">
            <Link
              as={`/posts/${post.slug }`}
              href="/posts/[slug]"
              className="text-lg leading-6 font-bold text-amber-300 drop-shadow-lg"
            >
              {post.title}
            </Link>
            <p className="text-white">{post.excerpt}</p>
            <div className="text-gray-50 drop-shadow-lg">
              <time>{distanceToNow(new Date(post.date))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>Todavia no se posteo nada :/</p>
      )}
    </PostsContainer>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return {
    props: { allPosts },
  };
}
