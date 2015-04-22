$(document).ready(function() {
  function confirmEmail() {
    $('#email-confirm').blur(function() {
      var email = document.getElementById('email').value;
      var emailconfirm = document.getElementById('email-confirm').value;

      if (email != emailconfirm) {
        $('form').find('.no-match').addClass('show');
      } else {
        $('form').find('.no-match').removeClass('show');
      }
    });
  }

  confirmEmail();

  if (window.location.search.substring(1)==="confirmation") {
    $(".email-received").removeClass('hide');
  };

  $(".email-received").on('click', function () {
    if (!$(this).hasClass('hide')) {
      $(this).addClass('hide');
    }
  });

});
