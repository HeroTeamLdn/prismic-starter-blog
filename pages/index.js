import { Link, RichText, Date } from 'prismic-reactjs';
import { asText, getPrismicApi, RichTextField } from '../utils/prismic';

import Layout from '../components/Layout';

const Index = data => <Layout>{RichText.render(data.page_title)}</Layout>;

Index.getInitialProps = async () => {
  let api = await getPrismicApi();

  let { data } = await api.getSingle('home_page');

  console.log(data);

  return { ...data };
};

export default Index;
