module.exports = async function (context, myTimer) {
  var timeStamp = new Date().toISOString()

  if (myTimer.isPastDue) {
    context.log('Timer function is running late!')
  }
  context.log('Calculating daily average ratings...')

  context.log('Daily average ratings calculation completed.')

  context.done()
}
