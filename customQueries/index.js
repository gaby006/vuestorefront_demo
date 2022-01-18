// customQueries/index.js

module.exports = {
  'my-products-query': ({ variables }) => ({
    query: `
      query products($where: String) {
        products(where: $where) { /* ... */ }
      }
    `,
    variables,
  }),
  ... // other custom queries
};