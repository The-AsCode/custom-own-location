let mix = require('laravel-mix');

mix.js('assets/admin/src/locations/index.js', 'assets/admin/js/locations.js').react();
mix.js('assets/admin/src/user-from/index.js', 'assets/admin/js/settings.js').react();

mix.options({
  terser: {
    extractComments: false,
  }
});
