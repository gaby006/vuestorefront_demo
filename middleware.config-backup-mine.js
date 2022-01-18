
module.exports = {
  integrations: {
    ct: {
      location: '@vue-storefront/commercetools-api/server',
      configuration: {
        api: {
          uri: 'https://api.europe-west1.gcp.commercetools.com/my-commercetools-project123/graphql',
          authHost: 'https://auth.europe-west1.gcp.commercetools.com',
          projectKey: 'my-commercetools-project123',
          clientId: 'g-ydGIaN6_nG7-IvKKzW7ZUS',
          clientSecret: 'hNoFVqGMEjH7jMHszpFwWx_lumpxSk2q',
          scopes: [
            'view_published_products:my-commercetools-project123',
			'view_categories:my-commercetools-project123',
			'manage_my_payments:my-commercetools-project123',
			'manage_my_orders:my-commercetools-project123',
			'manage_my_profile:my-commercetools-project123',
			'create_anonymous_token:my-commercetools-project123',
			'view_stores:my-commercetools-project123',
			'manage_my_shopping_lists:my-commercetools-project123'
          ]
        },
        serverApi: {
          clientId: '29ozE6AdLL3kuyLkOnEh43-9',
          clientSecret: 'ZydDIwOv6nakJka6caXWvMMp41TXF07y',
          scopes: [
            'manage_customers:my-commercetools-project123',
			'manage_products:my-commercetools-project123'
          ]
        },
        currency: 'USD',
        country: 'US',
        languageMap: {
          en: ['en', 'de'],
          de: ['de', 'en']
        }
      }
    }
  }
};
