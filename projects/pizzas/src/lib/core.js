export function createElement(tag, ...children) {
  return {
    tag: tag,
    children: children,
  };
}

export function render(vNode, container) {
  if (typeof vNode === "string") {
    container.appendChild(document.createTextNode(vNode));
    return;
  }

  const element = document.createElement(vNode.tag)

  vNode.children.forEach(child => render(child, element))

  container.appendChild(element);
}