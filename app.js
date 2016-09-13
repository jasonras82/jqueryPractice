// alert('hi');

// window.setTimeout(function(){
//   $('#heyYouGuys').css('color', 'red');
//   document.getElementById('rock').style.color = 'green';
// }, 500);

// window.setTimeout(function(){
//   $('#rock').remove();
// }, 500);

// window.setTimeout(function(){
//   $('#rock').html('Jason rocks, suckas');
// }, 500);

// window.setTimeout(function(){
//   $('#rock').append(' I come after rockin\'');
// }, 500);

// $('#change-text').on('click', function(){
//   $('#rock').append(
//     '<img src="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"/>'
//   );
// });

// $('#change-text').on('click', function(){
//   $('#rock').hide();
// });

$('#change-text').on('click', function(){
  $('#rock').toggleClass('green');
});
