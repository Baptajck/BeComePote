// /* eslint-disable no-console */

// module.exports = withAuth;
/**
 * @param  {Object} req
 * @param  {Object} res
 * @param  {func} next
 */
const withAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  }
  else {
    res.status(401).send({
      message: 'No connected',
    });
  }
};


module.exports = withAuth;
