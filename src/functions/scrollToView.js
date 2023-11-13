export function scrollToView(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  }