let mix = require('laravel-mix');

mix.js('assets/admin/src/locations/index.js', 'assets/admin/js/locations.js').react();

mix.options({
  terser: {
    extractComments: false,
  }
});
