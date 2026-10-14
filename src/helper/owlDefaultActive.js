// Active-card handling for Owl Carousel service cards.
//
//  - By default the FIRST visible card has the class "is-active".
//  - When the user hovers another card, "is-active" is removed from the first
//    card and added to the hovered card.
//  - When the mouse leaves the card, "is-active" goes back to the first
//    visible card.
//
// Usage (call BEFORE slider.owlCarousel(...), $ = jQuery):
//   const unbind = bindDefaultActive($(sliderRef.current));
//   cleanup: unbind();

const NS = ".defaultActive";
const ACTIVE = "is-active";

export function bindDefaultActive($slider) {
  let rafId = null;
  let timerId = null;
  let hovering = false;

  const clearAll = () =>
    $slider.find(`.owl-item .item.${ACTIVE}`).removeClass(ACTIVE);

  // put the class on the first visible card
  const activateFirst = () => {
    if (hovering) return; // user is hovering a card -> don't override
    clearAll();
    $slider.find(".owl-item.active").first().find(".item").addClass(ACTIVE);
  };

  // Owl updates its ".active" classes right after its events,
  // so wait one tick + one frame before reading them.
  const schedule = () => {
    clearTimeout(timerId);
    cancelAnimationFrame(rafId);
    timerId = setTimeout(() => {
      rafId = requestAnimationFrame(activateFirst);
    }, 0);
  };

  // slider moved / resized / initialised
  $slider.on(
    [
      "initialized.owl.carousel",
      "changed.owl.carousel",
      "translated.owl.carousel",
      "resized.owl.carousel",
      "refreshed.owl.carousel",
    ]
      .map((e) => e + NS)
      .join(" "),
    schedule
  );

  // hover: move the active class to the hovered card
  $slider.on("mouseenter" + NS, ".owl-item .item", function () {
    hovering = true;
    clearAll();
    $(this).addClass(ACTIVE);
  });

  // leave: give the active class back to the first visible card
  $slider.on("mouseleave" + NS, ".owl-item .item", function () {
    hovering = false;
    activateFirst();
  });

  schedule();

  return () => {
    clearTimeout(timerId);
    cancelAnimationFrame(rafId);
    $slider.off(NS);
  };
}