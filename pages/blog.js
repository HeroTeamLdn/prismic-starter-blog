import Link from 'next/link';
import { RichText, Date } from 'prismic-reactjs';
import { Predicates } from 'prismic-javascript';
import { asText, getPrismicApi, RichTextField } from '../utils/prismic';

import Layout from '../components/Layout';

const Blog = ({ page_title, entries }) => (
  <Layout>
    {RichText.render(page_title)}
    {entries.map(({ uid, data: { title } }) => (
      <div className="blog">
        <Link as={`/blog/${uid}`} href={`blogpost?uid=${uid}`}>
          {RichText.render(title)}
        </Link>
      </div>
    ))}
  </Layout>
);

Blog.getInitialProps = async () => {
  let api = await getPrismicApi();

  let { data } = await api.getSingle('blog');

  let { results: entries } = await api.query(
    Predicates.at('document.type', 'blog_post'),
    {
      orderings: '[my.blog_post.date desc]'
    }
  );

  // console.log(entries);
  return { ...data, entries };
};

export default Blog;
