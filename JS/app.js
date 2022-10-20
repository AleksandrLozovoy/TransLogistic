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
        scrollTop: scrollElPos - headerH,
      },
      500
    );
  });

  // ScrollSpy
  let windowH = $(window).height();
  let scrollTop = $(this).scrollTop();

  scrollSpy(scrollTop);

  $(window).on("scroll", function () {
    scrollTop = $(this).scrollTop();

    scrollSpy(scrollTop);
  });

  function scrollSpy(scrollTop) {
    $("[data-scrollspy]").each(function () {
      let $this = $(this);
      let sectionId = $this.data("scrollspy");
      let sectionOffset = $this.offset().top;

      if (scrollTop >= sectionOffset - 0.33333 * windowH) {
        $("#nav [data-scroll]").removeClass("active");
        $('#nav [data-scroll="' + sectionId + '"]').addClass("active");
      }

      if (scrollTop == 0) {
        $("#nav [data-scroll]").removeClass("active");
      }
    });
  }

  // MODALS

  $("[data-modal]").on("click", function (event) {
    event.preventDefault();

    let modal = $(this).data("modal");

    $(modal).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modal).find(".modals__content").css({
        transform: "translateY(0)",
        opacity: "1",
      });
    });
  });

  $("[data-modal-close]").on("click", function (event) {
    event.preventDefault();

    let modals = $(this).parents(".modals");

    modalClose(modals);
  });

  $(".modals").on("click", function () {
    let modals = $(this);
    $(".modals").find(".modals__content").css({
      transform: "translateY(-100px)",
      opacity: "0",
    });

    modalClose(modals);
  });

  $(".modals__content").on("click", function (event) {
    event.stopPropagation();
  });

  function modalClose(modals) {
    modals.find(".modals__content").css({
      transform: "translateY(-100px)",
      opacity: "0",
    });

    setTimeout(function () {
      modals.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  }
});
