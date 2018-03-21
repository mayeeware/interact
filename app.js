var modalOpen = $('.modal-open');
var modalClose = $('.modal-close');
var modal = $('.modal');

modalOpen.on('click', function(){
  modal.fadeIn();
})

modalClose.on('click', function(){
  modal.fadeOut();
})
