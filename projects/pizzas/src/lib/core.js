export function createElement(tag, ...children) {
  return {
    tag: tag,
    children: children
  }
}

export function render(template, container) {
  container.innerHTML = template;
}