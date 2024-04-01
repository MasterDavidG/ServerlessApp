module.exports = async function (context, req) {
  context.log('Received a request to search for movies.')

  if (req.method === 'GET') {
    try {
      const searchQuery = req.query.search

      context.log(`Search query: ${searchQuery}`)

      context.res = {
        status: 200,
        body: `Search results for "${searchQuery}": [Movie 1, Movie 2, Movie 3]`, // Replace with actual search results
      }
    } catch (error) {
      context.res = {
        status: 500,
        body: 'An error occurred while searching for movies.',
      }
    }
  } else {
    context.res = {
      status: 405,
      body: 'Method Not Allowed',
    }
  }
}
