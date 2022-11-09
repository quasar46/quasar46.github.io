$(document).ready(function () {
  $(".lang").on("click", function () {
    $(this).children().slideToggle();
  });

  $("#selectBox").selectbox();
});
