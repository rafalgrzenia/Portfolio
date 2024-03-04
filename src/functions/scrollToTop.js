export function scrollToTop() {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 200);
}
