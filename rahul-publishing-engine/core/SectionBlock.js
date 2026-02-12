export function createSection(title = "New Section", level = 2) {
  return {
    type: "section",
    id: "sec-" + Date.now(),
    level,
    title,
    children: []
  };
}
