$(function () {
  // NavToggle
  let navToggle = $("#navToggle");
  let nav = $("#nav");

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
    $("body").toggleClass("show-nav");
    $(this).addClass("active");
  });

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

    navToggle.removeClass("active");
    nav.removeClass("show");

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

  // SLIDER https://kenwheeler.github.io/slick/
  // introSlider

  let introSlider = $("#introSlider");

  introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $("#introSliderPrev").on("click", function () {
    introSlider.slick("slickPrev");
  });

  $("#introSliderNext").on("click", function () {
    introSlider.slick("slickNext");
  });
  // reviewsSlider
  let reviewsSlider = $("#reviewsSlider");

  reviewsSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  //  AOS JS https://github.com/michalsnik/aos
  AOS.init({
    // Global settings:
    disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 80, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});
