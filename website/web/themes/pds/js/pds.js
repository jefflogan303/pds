/**
 * @file
 * PDS behaviors.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.pds = {
    attach: function (context, settings) {

      // Only add behavior once, on document context.
      if (context !== document) {
        return;
      }

      var elMobile = document.querySelector('.header__mobile--trigger');
      elMobile.addEventListener('click', event => {
        elMobile.classList.toggle('is-active');
        var elMenu = document.querySelector('.mobile-menu');
        elMenu.classList.toggle('mobile-open');
      });

    }
  };

} (Drupal));
