export function createElement(tag, props = {}, ...children) {
  return {
    tag,
    props,
    children,
  };
}

export function render(vNode, container) {
  // console.log(vNode.tag);
  // console.log(vNode.children);

  if (typeof vNode === "string") {
    container.appendChild(document.createTextNode(vNode));
    return;
  }

  const element = document.createElement(vNode.tag);

  if (vNode.props) {
    Object.keys(vNode.props).forEach(key => {
      element.setAttribute(key, vNode.props[key]);
    })
  }

  vNode.children.forEach((child) => render(child, element));

  container.appendChild(element);
}