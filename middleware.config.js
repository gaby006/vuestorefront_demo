
module.exports = {
  integrations: {
    ct: {
      location: '@vue-storefront/commercetools-api/server',
      configuration: {
        api: {
          uri: 'https://api.europe-west1.gcp.commercetools.com/loylogic-poc/graphql',
          authHost: 'https://auth.europe-west1.gcp.commercetools.com',
          projectKey: 'loylogic-poc',
          clientId: 'zgyw8Yqp8uorEEO_FaT0RaJT',
          clientSecret: 'K04Lt5hyt4bIPhTpTDm6uvNPLsn_CKhw',
          scopes: [
            'view_published_products:loylogic-poc',
			'view_categories:loylogic-poc',
			'manage_my_payments:loylogic-poc',
			'manage_my_orders:loylogic-poc',
			'manage_my_profile:loylogic-poc',
			'create_anonymous_token:loylogic-poc',
			'view_stores:loylogic-poc',
			'manage_my_shopping_lists:loylogic-poc'
			]
        },
        serverApi: {
          clientId: 'Ws3NovbmN_ewQYtzGvIPiVP3',
          clientSecret: 'G3asa1VpgYNHPMVab6UHwNcUaVMuQQsU',
          scopes: [
            'manage_customers:loylogic-poc',
			'manage_products:loylogic-poc'
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
