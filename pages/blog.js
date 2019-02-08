import Link from 'next/link';
import { RichText, Date } from 'prismic-reactjs';
import { Predicates } from 'prismic-javascript';
import { asText, getPrismicApi, RichTextField } from '../utils/prismic';

import Layout from '../components/Layout';

const Blog = ({ page_title, entries }) => (
  <Layout>
    {page_title && RichText.render(page_title)}
    {entries &&
      entries.map(({ uid, data: { title } }) => (
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

  let pageResponse = await api.getSingle('blog');

  let postsResponse = await api.query(
    Predicates.at('document.type', 'blog_post'),
    {
      orderings: '[my.blog_post.date desc]'
    }
  );

  if (pageResponse && postsResponse.results.length > 0) {
    let { results: entries } = postsResponse;
    return { ...pageResponse.data, entries };
  } else if (postsResponse.results.length > 0) {
    console.log('no page data from prismic');
    let { results: entries } = postsResponse;
    return { entries };
  } else if (pageResponse) {
    console.log('no posts data from prismic');
    return { ...pageResponse.data };
  } else {
    console.log('no data from prismic');
    return {};
  }
};

export default Blog;
