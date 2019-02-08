import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

import { PRISMIC_API_ENDPOINT, PRISMIC_API_TOKEN } from '../config.local.js';

export const getPrismicApi = async () =>
  await Prismic.getApi(PRISMIC_API_ENDPOINT, {
    accessToken: PRISMIC_API_TOKEN
  });

export const RichTextField = ({ text }) => (
  <div className="richtext">{RichText.render(text)}</div>
);

export const asText = RichText.asText;

export default getPrismicApi;
