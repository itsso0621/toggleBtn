$(document).ready(function () {
  //   $(function () {
  //     $(document).on("click", function () {
  //       if ($(document) == "after") {
  //         $(".text-list-item").addClass("effect");
  //       } else {
  //         //remove the background property so it comes transparent again (defined in your css)
  //         $(".text-list-item").removeClass("effect");
  //       }
  //     });
  //   });
  // this function will handle the toggle for the slide in menu
  $(document).ready(function () {
    var $toggleButton = $(".toggleBtn");
    // Hamburger button
    $toggleButton.on("click", function () {
      $(".text-list-item").toggleClass("effect");
      $(".balldiv").toggleClass("bounce");
      $(".shadow").toggleClass("shadowToggle");
    });
  });
});
