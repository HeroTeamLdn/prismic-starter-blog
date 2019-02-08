import { Link, RichText, Date } from 'prismic-reactjs';
import { asText, getPrismicApi, RichTextField } from '../utils/prismic';

import Layout from '../components/Layout';

const Index = ({ page_title }) => (
  <Layout>{page_title && RichText.render(data.page_title)}</Layout>
);

Index.getInitialProps = async () => {
  let api = await getPrismicApi();

  let response = await api.getSingle('home_page');

  if (response) {
    return { ...response.data };
  } else {
    console.log('no data from prismic');
    return {};
  }
};

export default Index;
