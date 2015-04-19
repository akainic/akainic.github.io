$(function() {
  $('.page-link').on('click', function() {
    var $this = $(this),
        $destination = $('body').find('section#' + $this.data('destination')),
        $current = $('.current');
    $current.removeClass('current');
    if ($destination.data('order') < $current.data('order')) {
      $current.addClass('on-right');
    } else {
      $current.addClass('on-left');
    }
    $destination.removeClass('on-left, on-right')
                .addClass('current');
  });
});
