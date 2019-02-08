import { withRouter } from 'next/router';
import { Link, RichText, Date } from 'prismic-reactjs';
import { Predicates } from 'prismic-javascript';
import { asText, getPrismicApi, RichTextField } from '../utils/prismic';

import Layout from '../components/Layout';

const Index = withRouter(
  ({ data: { page_title, page_intro, page_content } }) => (
    <Layout>{RichText.render(page_title)}</Layout>
  )
);

Index.getInitialProps = async ({ query }) => {
  let api = await getPrismicApi();

  let response = await api.getByUID('basic_page', query.uid);

  if (response.data) {
    return { ...response };
  } else {
    console.log('no data from prismic');
    return {};
  }
};

export default Index;
