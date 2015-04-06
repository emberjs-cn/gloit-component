/* jshint node: true */
'use strict';

var mergeTrees = require( 'broccoli-merge-trees' ),
    pickFiles  = require( 'broccoli-static-compiler' );

module.exports = {
  name: 'gloit-component',

  //included: function (app) {
    //app.import({
      //development: 'bower_components/semantic-ui/dist/semantic.css',
      //production: 'bower_components/semantic-ui/dist/semantic.min.css'
    //});

    //app.import({
      //development: 'bower_components/semantic-ui/dist/semantic.js',
      //production: 'bower_components/semantic-ui/dist/semantic.min.js'
    //});

    //var fontExtensions = ['.eot','.otf','.svg','.ttf','.woff'];
    //for (var i = fontExtensions.length - 1; i >= 0; i--) {
      //app.import('bower_components/semantic-ui/dist/themes/default/assets/fonts/icons'+fontExtensions[i], { destDir: 'assets/themes/default/assets/fonts' });
    //};
  //},

  postprocessTree: function( type, tree ) {
    return mergeTrees([ tree,
      pickFiles( 'bower_components/fontawesome/fonts', {
          srcDir  : '/',
          files   : [ 'fontawesome-webfont.woff' ],
          destDir : '/fonts'
      })
    ],
    {
        overwrite: true
    });
  }
};
