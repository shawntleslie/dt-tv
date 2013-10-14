//= require_tree .

$(function() {

  var showNotes = $('#show-notes-container');

  showNotes.data('default-height', showNotes.height()).height(0);

  $('#notes').on('click', function(event) {
    event.preventDefault();
    if( $(this).hasClass('show') ){
      // Remove Class Show
      showNotes.height(0);
      $('div.show-notes').removeClass('show');
      $(this).removeClass('show');
      $(this).find('span').html($(this).data('default-text'));
    }else{
      // Add Class Show
      showNotes.height(showNotes.data('default-height'));
      $('div.show-notes').addClass('show');
      $(this).addClass('show');
      $(this).find('span').html($(this).data('hidden-text'));
    }
  });

});