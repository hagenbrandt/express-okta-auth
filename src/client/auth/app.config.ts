export default {
    url: process.env.OKTA_ORG_URL,
    issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: '{clientId}'
  };