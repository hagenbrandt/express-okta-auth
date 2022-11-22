import okta from '@okta/okta-sdk-nodejs';

const oktaClient = new okta.Client({
    orgUrl: process.env.OKTA_ORG_URL,
    token: process.env.OKTA_TOKEN
  });

  export default oktaClient;