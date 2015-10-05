$(function() {
  $('#fullpage').fullpage({
    anchors: ['landing', 'about', 'work', 'contact'],
    menu: '#menu'
  });

  function setHeaderLinkColor(page) {
    $('.page-link').removeClass('dark light');
    if (page == '#about') {
      $('.page-link').addClass('dark');
    } else {
      $('.page-link').addClass('light');
    }
  }

  if (window.location.hash != "") {
    setHeaderLinkColor(window.location.hash);
  }

  $('.page-link').on('click', function() {
    setHeaderLinkColor('#' + $(this).data('destination'));
  });
});
