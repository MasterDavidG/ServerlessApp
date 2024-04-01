module.exports = async function (context, req) {
  context.log('Received a request to create a new movie.')

  if (req.method === 'POST') {
    try {
      const { title, year, genre, description, director, actors } = req.body

      context.res = {
        status: 200,
        body: 'Movie created successfully.',
      }
    } catch (error) {
      context.res = {
        status: 500,
        body: 'An error occurred while creating the movie.',
      }
    }
  } else {
    context.res = {
      status: 405,
      body: 'Method Not Allowed',
    }
  }
}
