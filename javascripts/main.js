$(function() {
  function changePage(page) {
    $('body').find('section')
             .removeClass('current on-right on-left');
    $(page).prevAll('section')
                  .addClass('on-left');
    $(page).nextAll('section')
                  .addClass('on-right');
    $(page).addClass('current');
  }

  function setHeaderLinkColor(page) {
    $('.page-link').removeClass('dark light');
    if (page == '#about') {
      $('.page-link').addClass('dark');
    } else {
      $('.page-link').addClass('light');
    }

  }

  if (window.location.hash != "") {
    changePage(window.location.hash);
    setHeaderLinkColor(window.location.hash);
  }

  $('.page-link').on('click', function() {
    changePage('#' + $(this).data('destination'));
    setHeaderLinkColor('#' + $(this).data('destination'));
  });
});
