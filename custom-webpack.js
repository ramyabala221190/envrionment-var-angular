const webpack=require('webpack');
const dotenv=require('dotenv');

dotenv.config();

module.exports = {
    plugins: [
      new webpack.EnvironmentPlugin({
        'var1':null,
        'var2':null,
        'jenkins_build_number':null
      }
    )
    ]
  };