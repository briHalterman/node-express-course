const notFound = (req, res) => res.status(404).send('Route does not exist'); // set up 404 with whatever message you want to send back

module.exports = notFound;