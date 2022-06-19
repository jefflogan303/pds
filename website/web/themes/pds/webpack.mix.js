let mix = require('laravel-mix');

mix.options({
  processCssUrls: false
})
.sass("scss/main.scss", "css");
