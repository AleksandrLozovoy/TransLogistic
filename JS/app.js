$(function () {
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let header = $("#header");
  let headerH = header.innerHeight();

  headerScrool();

  $(window).on("scroll resize", function () {
    headerScrool();
  });

  function headerScrool() {
    let scrollTop = $(this).scrollTop();

    if (scrollTop >= introH - headerH) {
      header.addClass("header--dark");
    } else {
      header.removeClass("header--dark");
    }
  }
});
