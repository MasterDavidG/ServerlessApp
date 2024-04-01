module.exports = async function (context, req) {
  context.log('Received a request to add a rating for a movie.')

  if (req.method === 'POST') {
    try {
      const { title, opinion, rating, dateTime, author } = req.body

      context.log(
        `Rating added for movie "${title}": Rating=${rating}, Opinion=${opinion}, Author=${author}, DateTime=${dateTime}`
      )

      context.res = {
        status: 200,
        body: 'Rating added successfully.',
      }
    } catch (error) {
      context.res = {
        status: 500,
        body: 'An error occurred while adding the rating.',
      }
    }
  } else {
    context.res = {
      status: 405,
      body: 'Method Not Allowed',
    }
  }
}
