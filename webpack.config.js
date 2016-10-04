switch (process.env.NODE_ENV) {
  case 'PROD':
    module.exports = require('./webpack_config/webpack.prod');
    break;
  case 'UAT':
    module.exports = require('./webpack_config/webpack.uat');
    break;
  case 'QA':
    module.exports = require('./webpack_config/webpack.qa');
    break;
  case 'DEV':
    module.exports = require('./webpack_config/webpack.dev');
    break;
  default:
    module.exports = require('./webpack_config/webpack.dev');
}
