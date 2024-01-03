const webpack=require('webpack');
const dotenv=require('dotenv');

dotenv.config();

module.exports = {
    plugins: [
      new webpack.EnvironmentPlugin({
        'environment':null,
        'port':null,
        'jenkins_build_number':null,
        'url':null,
        'description':null
      }
    )
    ]
  };