// TODO
// 2. Modulurize
// 3. Add functionality to clean out public folder
// 5. Simplify Webpack
// 6. Lint build process files

import gulp from 'gulp';
import util  from 'gulp-util';
import eslint from 'gulp-eslint';
import webpack from 'webpack'
import webpackConfig from './webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import path from 'path';

const scripts = './assets/js/**/*.js';

const statsSettings = {
    colors: util.colors.supportsColor,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: true,
    cachedAssets: false,
    reasons: true,
    source: false,
    errorDetails: true
};

gulp.task('lint', function() {
    console.log('lint');
    return gulp.src(scripts)
      .pipe(plumber())
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('build:scripts', function() {
    console.log('build:scrips');
    webpack(webpackConfig, function(err, stats = {}) {
        if(err) notify('Error: ' + err);

        util.log(stats.toString(statsSettings));
    });
});

gulp.task('dev:server', function() {
    var compiler = webpack(webpackConfig);

    var server = new WebpackDevServer(compiler, {
      port: 8080,
      publicPath: '/',
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      stats: statsSettings
    });

    server.listen(8080, 'localhost', function() {
        console.log("WebpackDevServer running on: http://localhost:8080")
    });
});

gulp.task('build', ['lint', 'build:scripts']);

gulp.task('default', ['lint', 'dev:server']);
