/**!
 * RED
 * @copyright (c) 2012 observe.it (observe.it) <opensource@observe.it>
 * MIT Licensed
 */

module.exports = process.env.RED_COVERAGE
  ? require('./lib-cov/red')
  : require('./lib/red');
