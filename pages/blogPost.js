import { withRouter } from 'next/router';
import { Link, RichText, Date } from 'prismic-reactjs';
import { Predicates } from 'prismic-javascript';
import { asText, getPrismicApi, RichTextField } from '../utils/prismic';

import Layout from '../components/Layout';

const Blogpost = withRouter(document => (
  <Layout>
    <div>{RichText.render(document.data.title)}</div>
  </Layout>
));

Blogpost.getInitialProps = async ({ query }) => {
  console.log(query);
  let api = await getPrismicApi();

  let response = await api.getByUID('blog_post', query.uid);

  if (response) {
    return { ...response };
  } else {
    console.log('no data from prismic');
    return {};
  }
};

export default Blogpost;
