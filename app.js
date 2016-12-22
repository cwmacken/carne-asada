var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    consolidate = require('consolidate'),
    routes = require('./routes/index'),
    config = require('./config');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const wpConfig = require('./webpack.config.js');
const webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

app.engine('dust', consolidate.dust);
app.set('view engine', 'dust');
app.set('views','./src');

app.use(bodyParser.json());

app.use('/server', routes);

// TODO: this may cause problems, prob need to remove this REMOVE????
app.set('port', process.env.PORT || 9090);

const isDeveloping = process.env.NODE_ENV !== 'production';
console.log("in dev mode", isDeveloping)
console.log("in prod mode", !isDeveloping)

// TODO: this may cause problems -REMOVE????
const port = isDeveloping ? 9090 : process.env.PORT;

if (isDeveloping) {
  const compiler = webpack(wpConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: wpConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
