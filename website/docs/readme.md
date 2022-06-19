# Installation

## Drupal

Import the included database.
Update settings.php or provide a settings.local.php file with your database settings.
Requires php7.4.
Please note the vendor directory is not committed.
Note the files directory has been included in git.

`sh
composer install --no-dev`

## theme
Sass compilation requires node 16, npm 8.

To setup, please run the following:
`sh
cd web/themes/pds/
npm install`

To compile sass use npm run watch or npm run production e.g.
`sh
npm run watch`
