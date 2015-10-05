$(function() {
  $('#fullpage').fullpage({
    anchors: ['landing', 'about', 'work', 'contact'],
    menu: '#menu'
  });

  // function setCurrentPage(page) {
  //   $(page).addClass('active');
  // }

  function setHeaderLinkColor(page) {
    $('.page-link').removeClass('dark light');
    if (page == '#about') {
      $('.page-link').addClass('dark');
    } else {
      $('.page-link').addClass('light');
    }
  }

  if (window.location.hash != "") {
    // setCurrentPage(window.location.hash);
    setHeaderLinkColor(window.location.hash);
  }

  $('.page-link').on('click', function() {
    // setCurrentPage('#' + $(this).data('destination'));
    setHeaderLinkColor('#' + $(this).data('destination'));
  });
});
