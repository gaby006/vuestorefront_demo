// customQueries/index.js

module.exports = {
  'my-products-query': ({ variables }) => ({
    query: `
       query products(
    $where: String
    $sort: [String!]
    $limit: Int
    $offset: Int
    $skus: [String!]
    $locale: Locale!
    $acceptLanguage: [Locale!]
    $currency: Currency!
    $country: Country!
    $channelId: String
    $includeChannelIds: [String!]
    $excludeChannelIds: [String!]
    $channelLimit: Int
    $channelOffset: Int
  ) {
    products(
      where: $where
      sort: $sort
      limit: $limit
      offset: $offset
      skus: $skus
    ) {
       {
        
        masterData {
          current {
           
            allVariants {
              price(currency: $currency, country: $country, channelId: $channelId) {
				  
				      custom{
							            customFieldsRaw{
                            name
                            value
                          }
				}
				  
			  }
            }
          
          }
        }
      }
    }
  }
    `,
    variables,
  })
};