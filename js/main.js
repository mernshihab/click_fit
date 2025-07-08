$(document).ready(function () {
  const slider = $("#exploreSlider");

  $("#slideLeft").click(function () {
    slider.animate({ scrollLeft: "-=300" }, 400);
  });

  $("#slideRight").click(function () {
    slider.animate({ scrollLeft: "+=300" }, 400);
  });

  function animateExploreCards() {
    $(".explore__card").each(function () {
      const cardTop = $(this).offset().top;
      const scrollBottom = $(window).scrollTop() + $(window).height();

      if (cardTop < scrollBottom - 100) {
        $(this).addClass("animate");
      }
    });
  }

  animateExploreCards();
  $(window).on("scroll", animateExploreCards);
});

$(document).ready(function () {
  const $reviews = $(".review__item");
  let currentIndex = 0;

  function showReview(index) {
    $reviews.removeClass("active");
    $reviews.eq(index).addClass("active");
  }

  $("#nextReview").on("click", function () {
    currentIndex = (currentIndex + 1) % $reviews.length;
    showReview(currentIndex);
  });

  $("#prevReview").on("click", function () {
    currentIndex = (currentIndex - 1 + $reviews.length) % $reviews.length;
    showReview(currentIndex);
  });

  showReview(currentIndex);
});

$(document).ready(function () {
  function isInViewport(element) {
    const rect = element[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function triggerClassAnimations() {
    const $img = $(".class__img-1");
    const $img2 = $(".class__img-2");
    const $content = $(".class__content");

    if (isInViewport($img)) {
      $img.addClass("animate");
    }

    if (isInViewport($img2)) {
      $img2.addClass("animate");
    }

    if (isInViewport($content)) {
      $content.addClass("animate");
    }
  }
  triggerClassAnimations();
  $(window).on("scroll resize", triggerClassAnimations);
});
