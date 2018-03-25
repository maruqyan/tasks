jQuery(document).ready(function($){
    $('form').submit(function(ev){
      ev.preventDefault();
      var $form = $(this);
      $.ajax({
          url: $form.attr('action'),
          type: $form.find('[name="_method"]').val() || $form.attr('method'),
          data : $form.serialize(),
      }).done(function(res) {
          alert(res);
          window.location.href =  $form.find('[name="_redirect"]').val() ||  $form.attr('action');
      });
    });
})
