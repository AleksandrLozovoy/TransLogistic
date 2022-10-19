$(function () {
  // HeaderCroll
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let header = $("#header");
  let headerH = header.innerHeight();

  headerScrool();

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    headerH = header.innerHeight();
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

  // Scroll to sections
  $("[data-scroll").on("click", function (event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollElPos - 2.8 * headerH,
      },
      500
    );
  });
});
