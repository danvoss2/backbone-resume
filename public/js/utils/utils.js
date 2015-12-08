define([
  'jquery',
], function($){

  var navLinkClicks = function(elem) {
      var href = elem.attr('href'),
          sect = href.substring(1);

      $('html, body').animate({
        scrollTop: $('#' + sect + '-content').offset().top
      }, 'slow');
  };

  return {
    navLinkClicks: navLinkClicks
  };
});