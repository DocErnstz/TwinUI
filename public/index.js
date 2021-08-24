let counter = false;
function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";

  if (!counter) {
    element.value = "";
  }
  counter = true;
}
