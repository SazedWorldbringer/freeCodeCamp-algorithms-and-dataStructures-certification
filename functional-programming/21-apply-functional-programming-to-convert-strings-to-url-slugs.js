// Only change code below this line
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
// Only change code above this line
urlSlug("");